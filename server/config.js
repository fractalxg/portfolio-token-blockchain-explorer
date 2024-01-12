const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  bscscan_url: process.env.BSCSCAN_URL,
  bscscan_url_image: process.env.BSCSCAN_URL_IMAGE,
  etherscan_url: process.env.ETHERSCAN_URL,
  etherscan_url_image: process.env.ETHERSCAN_URL_IMAGE,
  price_url: process.env.PRICE_URL,
  local_host: process.env.LOCAL_HOST,
  gct_api_key: process.env.GCT_API_KEY,
  gct_url: process.env.GCT_URL
};