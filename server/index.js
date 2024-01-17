const express = require("express");
const cors = require("cors");
const server = express();
require('dotenv').config()

server.use(
  cors({
    origin: process.env.LOCAL_HOST,
    methods: ["GET", "POST"],
  })
);

const binanceRoute = require("./routes/Binance");
server.use("/", binanceRoute);

const ethereumRoute = require("./routes/Ethereum");
server.use("/", ethereumRoute);

const priceRoute = require("./routes/PriceUSD");
server.use("/", priceRoute);

const translate = require("./routes/Translate");
server.use("/", translate);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
