const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  // Update the entry point
  entry: {
    db: './db.js',
    index: './index.js',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
  },

  mode: "production",
  plugins: [new WebpackPwaManifest (
    {
      "name": "Budget Tracker",
      "short_name": "Budget Tracker",
      "icons": [
        {
          "src": "icons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png"
        }
      ],
      "theme_color": "#ffffff",
      "background_color": "#ffffff",
      "start_url": "/",
      "display": "standalone"
    }
  )]
};

module.exports = config;
