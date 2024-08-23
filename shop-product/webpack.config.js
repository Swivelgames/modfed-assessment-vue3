const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");
const Dotenv = require("dotenv-webpack");
const { DefinePlugin } = require("webpack");

const printCompilationMessage = require("./compilation.config.js");

const modfeds = require("../modfeds.js").default;

module.exports = (_, argv) => ({
  output: {
    publicPath: `https://${modfeds.shop_product.host}/`,
  },

  resolve: {
    extensions: [".tsx", ".ts", ".vue", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: modfeds.shop_product.internalPort,
    historyApiFallback: true,
    allowedHosts: "all",
    watchFiles: [path.resolve(__dirname, "src")],
    onListening: function (devServer) {
      const port = devServer.server.address().port;

      printCompilationMessage("compiling", port);

      devServer.compiler.hooks.done.tap("OutputMessagePlugin", (stats) => {
        setImmediate(() => {
          if (stats.hasErrors()) {
            printCompilationMessage("failure", port);
          } else {
            printCompilationMessage("success", port);
          }
        });
      });
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ["\\.vue$"],
              happyPackMode: true,
            },
          },
        ],
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    new ModuleFederationPlugin({
      name: "shop_product",
      filename: "remoteEntry.js",
      remotes: {
        shop_global_ui: `shop_global_ui@https://${modfeds.shop_global_ui.host}/remoteEntry.js`,
        shop_cart: `shop_cart@https://${modfeds.shop_cart.host}/remoteEntry.js`,
      },
      exposes: {
        "./ProductCard": "./src/components/product-card.vue",
        "./ProductListItem": "./src/components/product-list-item.vue",
        "./useProductStore": "./src/stores/ProductStore.ts",
      },
      shared: require("./package.json").dependencies,
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv(),
		new DefinePlugin({
			modfeds: JSON.stringify(modfeds),
		}),
  ],
});
