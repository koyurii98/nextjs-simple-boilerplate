const Dotenv = require("dotenv-webpack");

module.exports = {
  webpack: (config) => {
    // 기존의 웹팩 플러그인에 새로운 Dotenv플러그인을 연결시켜준다.
    config.plugins.push(new Dotenv());
    return config;
  }
};