module.exports = (api) => {
    const env = api.env();
    // api.cache.using(() => env === 'development'); //TODO

    api.cache.never();

    const plugins = ['@babel/proposal-class-properties'];

    // if(env === 'development') {
    //     plugins.push('react-hot-loader/babel');
    // }

    return {
        presets: [
            '@babel/react',
            [
                '@babel/env', 
                {
                    debug: false,
                    spec: true, // specification, делает код более медленным, но более надежным
                    loose: false // делает код более быстрым, но отходит от стандарта(убираются проверки на соответствие стандарту)
                     //cjs- common js. Webpack хорошо работает только с ES2015 модулями 
                },
            ],
        ],
        plugins,
        //dev (react-hot-loader нужен)
        //или
        //prod (react-hot-loader не нужен)
    };
};