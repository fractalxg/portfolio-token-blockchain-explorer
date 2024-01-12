const express = require("express");
const cors = require("cors");
const server = express();
const { port, local_host } = require("./config");

server.use(
  cors({
    origin: {local_host},
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

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
