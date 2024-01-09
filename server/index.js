const express = require("express");
const cors = require("cors");
const server = express();
const { port } = require("./config");

server.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET"],
  })
);

const binanceRoute = require("./routes/Binance");
server.use("/", binanceRoute);

const ethereumRoute = require("./routes/Ethereum");
server.use("/", ethereumRoute);

const priceRoute = require("./routes/PriceUSD");
server.use("/", priceRoute);

const binanceCode = require("./routes/BinanceSourceCode");
server.use("/", binanceCode);

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
