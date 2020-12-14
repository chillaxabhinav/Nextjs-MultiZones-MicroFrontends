import React from 'react';
import {ThemeProvider} from 'theme-ui';
import theme from '../theme';
import Layout from '../Components/Layout';

export default function App({Component, pageProps}){
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </ThemeProvider>
    )
}