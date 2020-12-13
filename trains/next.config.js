const config = (phase, {defaultConfig}) =>  {    
    return {
        ...defaultConfig,
        basePath : '/trains'
    }
}

module.exports = config;