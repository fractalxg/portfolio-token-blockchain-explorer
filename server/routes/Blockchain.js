const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/blockchain", async (req, res) => {
  const search = req.query.term;

  try {
    const response = await axios.get("https://bscscan.com/searchHandler", {
      params: {
        term: search,
        filterby: 0,
      },
    });

    const responseData = response.data;

    res.send(
      responseData.map((data) => {
        return {
          title: data.title,
          address: data.address,
        };
      })
    );
  } catch (error) {
    console.error("Erro ao buscar dados da blockchain:", error);
    res.status(500).send("Erro ao buscar dados da blockchain");
  }
});

module.exports = router;
