'use strict';

module.exports = {
    entry: './app.js',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            plugins: [
                ["transform-react-jsx", {
                  "pragma": "dom" // default pragma is React.createElement
                }]
            ]
          }
        }
      ]
    },
    output: {
      filename: 'app.bundle.js'
    },
    target: 'web'
};
