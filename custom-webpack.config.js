const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      $ENV: {
        NG_APP_ENV: JSON.stringify(process.env.NG_APP_ENV),
        NG_GOOGLE_MAPS_KEY: JSON.stringify(process.env.NG_GOOGLE_MAPS_KEY),
      }
    })
  ]
};