const config = (phase, {defaultConfig}) => {
    return {
        ...defaultConfig,
        basePath : '/bus'
    }
}

module.exports = config;