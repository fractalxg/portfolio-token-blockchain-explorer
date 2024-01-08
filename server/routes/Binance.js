const express = require("express");
const axios = require("axios");
const router = express.Router();
const { bscscan_url, bscscan_url_image } = require("../config");

router.get("/binance", async (req, res) => {
  const search = req.query.term;

  try {
    const response = await axios.get(bscscan_url, {
      params: {
        term: search,
        filterby: 0,
      },
    });

    const responseData = response.data;

    responseData.sort((a, b) => {
      const rateA = parseFloat(a.rate.replace(/[^\d.-]/g, ""));
      const rateB = parseFloat(b.rate.replace(/[^\d.-]/g, ""));

      const reputationA = parseInt(a.reputation);
      const reputationB = parseInt(b.reputation);

      if (rateA !== rateB) {
        return rateB - rateA;
      } else {
        return reputationB - reputationA;
      }
    });

    res.send(
      responseData
        .filter((data) => data.img)
        .map((data) => {
          return {
            title: data.title,
            rate: data.rate,
            address: data.address,
            image: `${bscscan_url_image}${data.img}`
          };
        })
    );
  } catch (error) {
    console.error("Error fetching data from blockchain:", error);
    res.status(500).send("Error fetching data from blockchain:", error);
  }
});

module.exports = router;
