const webpack = require('webpack');
const chalk = require('chalk');//Раскрашивает консоль

// console.log('-->', chalk.bgRed.white('START')); // Демонстрация как работает chalk

//Config
const getProdConfig = require('./config/webpack.prod');

const compiler = webpack(getProdConfig());

// compiler.hooks.beforeRun.tap({name: 'start'},() => {
//    console.log('--> compilation started'); 
// });

// compiler.hooks.done.tap({name: 'done'},() => {
//     console.log('--> compilation completed'); 
// });

compiler.run((error, stats) => {
    if(error) {
        //error - только ошибка конфигурации
        console.error(error.stack || error);

        if(error.details) {
            console.error(error.details);
        }

        return null;
    }

    const info = stats.toString({
        hash: true,
        colors: true, 
        version: true,
        env: true,
        modules: false,
        entrypoints: false
    })

    console.log(chalk.greenBright('+ Build completed'));
    console.log(info);

    if(stats.hasErrors()) { // ошибка во время компиляции (битый импортб ошибка синтаксиса, etc)
        // console.log(chalk.redBrigth('--> Error!'));
        console.error(info);
    }

    if(stats.hasWarnings()) {// ворниг во время компиляции
        // console.log(chalk.yellowBrigth('--> Warning'));
        console.warn(info);
    }

});