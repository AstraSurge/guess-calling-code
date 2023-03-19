const path = require("path");
const typescript = require("@rollup/plugin-typescript");
const json = require("@rollup/plugin-json");

const resolveFile = function (filePath) {
  return path.join(__dirname, "..", filePath);
};

module.exports = [
  {
    input: resolveFile("lib/index.ts"),
    output: {
      file: resolveFile("dist/index.js"),
      format: "iife",
      name: "guessCallingCode",
    },
    plugins: [typescript({ resolveJsonModule: true }), json()],
  },
];
