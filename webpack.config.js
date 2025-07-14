const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: [
      path.join(__dirname, "dist"),
      path.join(__dirname, "public"),
    ],
    historyApiFallback: true,
    port: 3000,
    open: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      // ⚛️ SVGs como Componentes React e como imagem
      {
        test: /\.svg$/,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: { exportType: 'named' },
          },
          {
            loader: 'file-loader',
            options: {
              name: 'imgs/[name].[hash].[ext]',
              esModule: false,
            },
          },
        ],
      },
      // 🖼️ Imagens estáticas (exceto SVG)
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'imgs/[name].[hash].[ext]',
              esModule: false,
            },
          },
        ],
      },
      // 🔥 JS / JSX
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      // 🎨 Sass Modules (.module.sass)
      {
        test: /\.module\.sass$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              esModule: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                indentedSyntax: true,
              },
            },
          },
        ],
      },
      // 🎨 Sass Global (.sass)
      {
        test: /\.sass$/i,
        exclude: /\.module\.sass$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                indentedSyntax: true,
              },
            },
          },
        ],
      },
      // 🎨 CSS
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: ["**/index.html"],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
};