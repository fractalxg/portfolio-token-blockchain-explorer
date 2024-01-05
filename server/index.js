const express = require("express");
const cors = require("cors");
const server = express();
const PORT = 3001;

server.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET"],
  })
);

const blockchainRoute = require("./routes/Blockchain");
server.use("/", blockchainRoute);

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
