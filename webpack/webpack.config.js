const path = require('path');
const fs = require('fs');


module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        include: path.resolve(fs.realpathSync(process.cwd()), '.'), // CRL
        loader: require.resolve('babel-loader'),
        options: {
          // Save disk space when time isn't as important
          cacheCompression: true,
          cacheDirectory: true,
          compact: true,
          envName: 'development',
          presets: [
            ['@babel/preset-env',
            {
              corejs: 3,
              exclude: ['transform-typeof-symbol'],
              forceAllTransforms: true,
              modules: false,
              useBuiltIns: 'entry',
            }],
            [
              '@babel/preset-react',
              {
                development: true,
                runtime: 'automatic',
                useBuiltIns: true,
              },
            ],
          ],
          plugins:[
            'babel-plugin-macros',
            '@babel/plugin-transform-destructuring',
            [
              '@babel/plugin-proposal-class-properties',
              {
                loose: true,
              },
            ],
            ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
            [
              '@babel/plugin-proposal-object-rest-spread',
              {
                useBuiltIns: true,
              },
            ],
            [
              '@babel/plugin-transform-runtime',
              {
                corejs: false,
                helpers: false, // Needed to support IE/Edge
                regenerator: true,
              },
            ],
            [
              '@babel/plugin-transform-regenerator',
              {
                async: false,
              },
            ],
            ['transform-react-remove-prop-types',
              {
                ignoreFilenames: ['node_modules'],
                removeImport: true,
              },
            ],
            ['lodash', {
              id: [
                'lodash',
              ],
            },
            ],
          ],
        },
        test: /\.(js|mjs|jsx)$/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/',
  },
  mode: 'development',
  resolve: {

    extensions: ['.js'],
  },
};
