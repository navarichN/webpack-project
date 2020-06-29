const {HotModuleReplacementPlugin} = require('webpack');
const merge = require('webpack-merge');

// module.exports = {
//     mode: 'none',
//     devtool: false
// }
// module.exports = Promise.resolve({
//     mode: 'none',
//     devtool: false
// });



//Configurations
const getCommonConfig = require('./webpack.common')

// module.exports = async () => {
//     console.log('>1')
//     //pause 1000 ms
//     await delay();
//     //continue
//     console.log('>2')
//     return {
//         mode: 'none',
//         devtool: false,
//     };
// }
    

module.exports = () => {
    return merge(getCommonConfig(),{
        mode: 'none',
        devtool: false,//TODO: настроить source maps
        entry: ['webpack-hot-middleware/client?reload=true&quiet=true'],
        plugins: [
            //Каждый плагин- это конструктор
            new HotModuleReplacementPlugin(),
        ]
    });
};