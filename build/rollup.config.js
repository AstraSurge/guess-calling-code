const path = require("path");
const typescript = require("@rollup/plugin-typescript");
const json = require("@rollup/plugin-json");

const resolveFile = function (filePath) {
  return path.join(__dirname, "..", filePath);
};

module.exports = [
  {
    input: resolveFile("lib/index.ts"),
    output: [
      {
        file: "dist/index.cjs.js",
        format: "cjs",
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
      },
      {
        name: "guessCallingCode",
        file: "dist/index.umd.js",
        format: "umd",
      },
    ],
    plugins: [typescript({ exclude: ["lib/**/*.test.ts"] }), json()],
  },
];
