const HtmlWebPackPlugin = require("html-webpack-plugin")

const HtmlWebPackPluginConfig = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
    inject: 'body'
})


module.exports = {
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
        },
        plugins:[
            HtmlWebPackPluginConfig
        ]
};