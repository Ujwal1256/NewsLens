const axios = require("axios");
const config = require("./src/config/index");

const gnewsClient = axios.create({
  baseURL: "https://gnews.io/api/v4",
  timeout: 10000,
  params: {
    apikey: config.gnewsApiKey,
  },
});

module.exports = gnewsClient;