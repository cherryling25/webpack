
module.exports={
    entry:'./src/js/show.js',
    output:{
        path:__dirname+'/dist',
        filename:'main.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    }
}