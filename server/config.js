const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  bscscan_url: process.env.BSCSCAN_URL,
  bscscan_url_image: process.env.BSCSCAN_URL_IMAGE,
};
