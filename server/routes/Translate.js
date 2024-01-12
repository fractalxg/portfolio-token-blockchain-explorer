const express = require("express");
const axios = require("axios");
const router = express.Router();
const { gct_url, gct_api_key } = require("../config");

router.use(express.json());

router.post("/translate", async (req, res) => {
  try {
    const data = req.body;
		const params = {
      key: gct_api_key,
      q: data.text,
      source: data.sourceLanguage,
      target: data.targetLanguage,
      format: "text",
    };
    const response = await axios.post(gct_url, null, { params });

    const responseData = response.data;

    res.send(responseData.data.translations[0].translatedText);
  } catch (error) {
    console.error("Error fetching data from translation.", error);
    res.status(500).send("Error fetching data from translation.", error);
  }
});

module.exports = router;
