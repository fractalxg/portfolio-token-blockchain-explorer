const express = require("express")
const router = express.Router()

router.get("/blockchain", (req, res) => {
    res.send({data:"teste"})
})

module.exports = router