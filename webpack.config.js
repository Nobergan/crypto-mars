const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ExtractSCSS = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const fs = require('fs');

module.exports = env => {
  if (!env || !env.LANDING) {
    console.error('You should use start and build commands from landings/#landing_name# directory');
    process.exit(1);
  }

  const landingConfig = JSON.parse(fs.readFileSync(__dirname + '/landings/' + env.LANDING + '/config.json', 'utf8'));

  return {
    entry: path.resolve(__dirname, './src/core/index.js'),
    resolve: {
      alias: {
        LandingCSS: path.resolve(__dirname + '/landings/', env.LANDING)
      }
    },
    output: {
      path: path.resolve(__dirname + '/dist/' + env.LANDING),
      filename: 'bundle.js',
      publicPath: ''
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: [
            {
              loader: 'pug-loader',
            },
            {
              loader: 'pug-html-loader',
              options: {
                data: {
                  config: landingConfig,
                }
              }
            }
          ],
        },
        {
          test: /\.json$/,
          use: {
            loader: 'json',
          }
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: ExtractSCSS.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
              },
              {
                loader: 'postcss-loader',
              },
              {
                loader: 'sass-loader',
              },
            ],
          }),
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'img/',
                name: '[name].[ext]',
                esModule: false,
              },
            },
            {
              loader: 'image-webpack-loader',
            },
          ],
        },
        {
          test: /\.(ttf|otf|eot|ico|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts/',
                name: '[path][name].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: './src/core/index.pug',
        filename: './index.html',
        inject: false
      }),
      new ExtractSCSS({
        filename: '[name].css',
      }),
      new CopyWebpackPlugin([
        {
          from: path.join(__dirname, 'src', 'img/favicon'),
          to: 'img/favicon',
        },
        {
          from: path.join(__dirname, 'src', 'img/logo'),
          to: 'img/logo'
        },
        {
          from: path.join(__dirname, 'src', 'img/main'),
          to: 'img/main'
        }
      ]),
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new OptimizeCssAssetsPlugin({
          cssProcessorOptions: {
            discardDuplicates: {
              removeAll: true,
            },
            discardComments: {
              removeAll: true,
            },
          },
        }),
        new TerserPlugin({
          cache: true,
          parallel: true,
          extractComments: false,
          terserOptions: {
            ecma: undefined,
            compress: true,
            warnings: false,
            output: {
              comments: false,
              beautify: false,
            },
          },
        }),
      ],
    },
  };
};
