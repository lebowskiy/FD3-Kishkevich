var webpack = require('webpack');

/*
 * Default webpack configuration for development
 */
var config = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/EditorText_1.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015','react']
      }
    }],
      rules: [
          {
              test: /\.scss$/,
              use: ExtractSass.extract( {
                  use: [ {
                      loader: "css-loader"
                  }, {
                      loader: "sass-loader"
                  } ],
                  fallback: "style-loader"
              } )
          },
          {
              test: /\.sass$/,
              use: ExtractSass.extract( {
                  use: [ {
                      loader: "css-loader"
                  }, {
                      loader: "sass-loader"
                  } ],
                  fallback: "style-loader"
              } )
          },
      ]
  },
  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  },
};

module.exports = {
    module: {
        loaders: [
            {
                test: /plugin\.css$/,
                loaders: [
                    'style-loader', 'css',
                ],
            },
        ],
    },
};

/*
 * If bundling for production, optimize output
 */
if (process.env.NODE_ENV === 'production') {
  config.devtool = false;
  config.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: false}),
    new webpack.DefinePlugin({
      'process.env': {NODE_ENV: JSON.stringify('production')}
    })
  ];
};

module.exports = config;
