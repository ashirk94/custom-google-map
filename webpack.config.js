const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    custom: "./src/custom.js",
    Location: "./src/Location.js",
    MapApplication: "./src/MapApplication.js",
    MapConfiguration: "./src/MapConfiguration.js",
    MapDatasources: "./src/MapDatasources.js",
    MapFeature: "./src/MapFeature.js",
    MapTheme: "./src/MapTheme.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
