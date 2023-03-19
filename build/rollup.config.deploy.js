process.env.NODE_ENV = "production";
const configList = require("./rollup.config");
const terser = require("@rollup/plugin-terser");

configList.map((config, index) => {
  config.output.sourcemap = false;
  config.output = {
    name: "guessCallingCode",
    file: "example/index.umd.js",
    format: "umd",
  };
  config.plugins = [...config.plugins, [terser()]];

  return config;
});

module.exports = configList;
