const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.tsx',
  target: "web",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', ".tsx"],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    hot: true,
    liveReload: true,
    compress: true,
    port: 3333,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    client: {
      logging: 'none',
    },
    devMiddleware: {
      stats: 'minimal', 
    },
  },
};
