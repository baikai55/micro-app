const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package");
const port = 9001;
const dev = process.env.NODE_ENV == "development";

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: dev ? "/" : `/app/${name}`,
  outputDir: `${name}`,
  devServer: {
    port: port,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd", // 把微应用打包成 umd 库格式
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    },
  },
});
