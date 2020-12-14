import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
    entry: {
        index: path.resolve(__dirname, "src", "index.tsx")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", 
                    { loader: "css-loader", options: { importLoaders: 1 } },
                    "postcss-loader"
                ]
            },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", "ts", "tsx"]
    },
    output: {
        path: path.resolve(__dirname, "build")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 3000,
        open: true
    }    
}

export default config;