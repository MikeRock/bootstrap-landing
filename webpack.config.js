import webpack from 'webpack';
import path from 'path';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
export default {
  entry: { bundle: './src/index.js' },
  output: {
    filename: '[name][hash].js',
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    chunkFilename: '[name][chunkhash:base64:5].js'
  },
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: './src',
    disableHostCheck: true,
    historyApiFallback: true,
    port: 8080
  },
  resolve: {
    extensions: ['.js', '.html', '.scss'],
    alias: { bootstrap: path.resolve(__dirname, 'node_modules/bootstrap/scss') }
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png)/,
        use: 'file-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.s?css/,
        exclude: [/\.global.s?css/,/node_modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name][hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer(), cssnano()],
              config: {
                ctx: {
                  autoprefixer: { browsers: 'last 10 versions' },
                  cssnano: { preset: 'default' },
                  ['postcss-preset-env']: {}
                }
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\global.s?css/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [autoprefixer(), cssnano()],
              config: {
                ctx: {
                  autoprefixer: { browsers: 'last 10 versions' },
                  cssnano: { preset: 'default' },
                  ['postcss-preset-env']: {}
                }
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
