const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // If we're running the AI site, proxy requests to the IO site
  if (process.env.REACT_APP_IS_AI_SITE === 'true') {
    app.use(
      '/io-api',
      createProxyMiddleware({
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/io-api': '', // Remove the /io-api prefix when forwarding
        },
      })
    );
  } 
  // If we're running the IO site, proxy requests to the AI site
  else {
    app.use(
      '/ai-api',
      createProxyMiddleware({
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: {
          '^/ai-api': '', // Remove the /ai-api prefix when forwarding
        },
      })
    );
  }
};