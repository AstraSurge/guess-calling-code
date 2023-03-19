process.env.NODE_ENV = "production";
const configList = require("./rollup.config");
const terser = require("@rollup/plugin-terser");

configList.map((config, index) => {
  config.output.sourcemap = false;
  config.output.file = "example/index.js";
  config.plugins = [...config.plugins, [terser()]];

  return config;
});

module.exports = configList;
