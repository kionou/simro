// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" ,
     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  },
     proxy:'https://simro.onrender.com',
    //  proxy:'https://clever-crow-wear.cyclic.app',

     
  }
})

// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = {
//   devServer: {
//     before: function(app) {
//       app.use('/api', createProxyMiddleware({
//         target: 'https://simro-kberthe.pythonanywhere.com',
//         changeOrigin: true
//       }));
//     }
//   }
// };
