const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/ethereum", async (req, res) => {
  const search = req.query.term;

  try {
    const response = await axios.get(process.env.ETHERSCAN_URL, {
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
            image: `${process.env.ETHERSCAN_URL_IMAGE}${data.img}`
          };
        })
    );
  } catch (error) {
    console.error("Error fetching data from blockchain:", error);
    res.status(500).send("Error fetching data from blockchain:", error);
  }
});

module.exports = router;
