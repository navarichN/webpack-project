const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const merge = require('webpack-merge');
//Constans
const { PROJECT_ROOT, BUILD_DIRECTORY, } = require('../constants');
// module.exports = {
//     mode: 'none',
//     devtool: false
// }
const getCommonConfig = require('./webpack.common');
// module.exports = Promise.resolve({
//     mode: 'none',
//     devtool: false
// });

const cleanOptions = {
    verbose: true,
    root: PROJECT_ROOT
}

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
    return merge(getCommonConfig(), {
        mode: 'none',
        devtool: false,
        plugins: [
            //Каждый плагин- это конструктор
            new CleanWebpackPlugin({
                cleanOptions
            }), 
        ]
    });
};