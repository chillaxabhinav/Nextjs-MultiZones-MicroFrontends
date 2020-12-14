import React from 'react';
import Layout from '../Components/Layout';

export default function App({Component, pageProps}){
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}