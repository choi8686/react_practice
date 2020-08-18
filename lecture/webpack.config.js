const path = require('path');

module.exports = {
  name: 'word-relay-setting',
  mode: 'development', //실서비스: production
  devtool: 'eval', // 빠르게
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: ['./client'],
  }, //입력

  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-syntax-class-properties',
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'), //현재 폴더 안 dist
    filename: 'app.js',
  }, //출력
};
