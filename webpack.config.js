let path = require('path');
let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH,'app/');
let BUILD_PATH = path.resolve(ROOT_PATH,'public/');
let HtmlWebpackPlugin = require('html-webpack-plugin');

console.log(APP_PATH);
console.log(__dirname + "/app/main.js")
console.log(BUILD_PATH);
console.log(__dirname + "/public")

module.exports = {
    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
      path: __dirname + "/public",//打包后的文件存放的地方
      filename: "bundle.js"//打包后输出文件的文件名
    },
    
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    },
    resolve:{
        //当从 npm 包中导入模块时（例如，import * as D3 from "d3"），此选项将决定在 package.json 中使用哪个字段导入模块
        mainFiles: ["index.web","index"],// 这里哦
        modules: [path.resolve(__dirname, "app"), "node_modules"],
        extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json','.css','.less'],
    },
    module:{
        rules:[
            {
                //test:/\.jsx?$/
                test:/\.(js|jsx)$/,
                use:['babel-loader'],
                exclude:/node-modules/,
                include: APP_PATH
            },
            {
                test:/\.(css|less)$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test: /\.(svg)$/i,
                loader: 'svg-sprite-loader',
                include:  [
                    require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
                    // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
                  ]
            }
        ]
    },

    plugins: [
        // new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.html"//new 一个这个插件的实例，并传入相关的参数
        })
    ],
    
  }