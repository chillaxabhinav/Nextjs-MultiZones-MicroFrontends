const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const config = (phase, {defaultConfig}) =>  {
    
    // if(phase === PHASE_DEVELOPMENT_SERVER){
    //     return {
    //         ...defaultConfig,
    //         async rewrites(){
    //             return [
    //                 {
    //                     source : '/trains/*',
    //                     destination : 'localhost:3001/trains'
    //                 },
    //                 {
    //                     source : '/bus/*',
    //                     destination : 'localhost:3002/bus'
    //                 }
    //             ]
    //         }
    //     }
    // }
    
    return {
        ...defaultConfig,
        async rewrites(){
            return [
                {
                    source : '/trains',
                    destination : 'http://localhost:3001/trains'
                },
                {
                    source : '/bus',
                    destination : 'http://localhost:3002/bus'
                },
                {
                    source : '/trains/:path*',
                    destination : 'http://localhost:3001/trains/:path*'
                },
                {
                    source : '/bus/:path*',
                    destination : 'http://localhost:3002/bus/:path*'
                },
            ]
        }
    }
}

module.exports = config;