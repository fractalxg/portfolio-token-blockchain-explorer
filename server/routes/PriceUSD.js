const express = require("express");
const axios = require("axios");
const router = express.Router();
const { price_url } = require("../config");

router.get("/price", async (req, res) => {
  try {
    const response = await axios.get(price_url);

    const responseData = response.data;

    res.send(responseData.USDBRL.high);

  } catch (error) {
    console.error("Error fetching data from price:", error);
    res.status(500).send("Error fetching data from price:", error);
  }
});

module.exports = router;
