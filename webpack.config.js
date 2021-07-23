const path = require('path')
const RefreshwebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack')
const mode = 'production'
const devtool = 'hidden-source-map'
// const mode = 'development'
// const devtool = 'eval'
const isDevelopment = mode === 'production';
const refresh = isDevelopment ? [] : ['react-refresh/babel']

module.exports = {
    name:'ingoo',
    mode:mode,
    devtool:devtool,

    resolve:{
        extensions:['.js', '.jsx']
    },

    entry:{
        app:['./index.jsx']
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                loader:'babel-loader',
                options:{
                    presets:[
                        ['@babel/preset-env',{
                            targets:{browsers:['last 2 chrome versions']}
                        }],
                        '@babel/preset-react'
                    ],
                    plugins:refresh
                },
            },
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            }
        ],
    },

    plugins:[
        new RefreshwebpackPlugin(),
        new webpack.LoaderOptionsPlugin({debug:true}),
        new MiniCssExtractPlugin({ filename: 'app.css' })
    ],
    output:{
        path:path.join(__dirname,'dist'), //파일을
        filename:'app.js',
        publicPath:'/dist',
    },

    devServer:{
        publicPath:'/dist', //폴더를 읽고 index.html 가져와서 라이브서버처럼 열어준다? 자동으로 build해서 실행시켜준다. 
        hot:true,
        proxy: {
            '/api': 'http://localhost:3000',
        },
        host: '0.0.0.0',
    }
}