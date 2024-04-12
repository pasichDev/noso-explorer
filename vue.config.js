const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

/* GITHUB PAGES
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/noso-explorer/" : "/",
};
*/
