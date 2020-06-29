const webpack = require('webpack');
const DevServer = require('webpack-dev-server');
const hot = require('webpack-hot-middleware');
const chalk = require('chalk');

const getDevConfig = require('./config/webpack.dev');

//утилита
const { choosePort } = require('./utils');

//достать константы
const { HOST, PORT } = require('./constants');

const compiler = webpack(getDevConfig());

//создаем сервер

(async() => {
    try {
    const choosenPort = await choosePort(PORT);
    if(!choosenPort) {
        console.log(
            chalk.yellowBright('-> It\'s impossible to run the app :(')
        );
        return null;
    }
    const server = new DevServer(compiler, {
                host: HOST,
                port: PORT,
                historyApiFallback: true,
                overlay: true,
                quiet: false,
                clientLogLevel: 'none',
                noInfo: true,
                after: (app) => {
                    app.use(
                        hot(compiler, {
                            log: false,
                        }),
                    )
                }
    });
    
            server.listen(PORT, HOST, () => {
                console.log(
                    `${chalk.greenBright('-> Server listening on')} ${chalk.blueBright(
                        `http://${HOST}:${PORT}`,
                    )}`,
                );
            });
    } catch(error) {
        console.log(chalk.redBright('-> Error!'));
        console.error(error.message || error);
    }
})()




