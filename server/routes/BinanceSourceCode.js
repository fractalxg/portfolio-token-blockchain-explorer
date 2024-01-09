const express = require("express");
const axios = require("axios");
const router = express.Router();
const { bscscan_api_url, bscscan_api_key } = require("../config");

router.get("/binance-code/:search", async (req, res) => {
  const { search } = req.params;

  try {
    const response = await axios.get(
      `${bscscan_api_url}&address=${search}&apikey=${bscscan_api_key}`
    );
    const responseData = response.data;
    res.send(responseData);
  } catch (error) {
    console.error("Error fetching data from blockchain:", error);
    res.status(500).send("Error fetching data from blockchain:", error);
  }
});

module.exports = router;
