import Head from "next/head";
import React from "react";

import "../styles/globals.css";

import { AppPropsWithLayout } from "../types";

const Iconify = ({ Component, pageProps }: AppPropsWithLayout) => {
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <link rel="icon" href="/favicon.ico" />
                <meta name="msapplication-TileColor" content="#050505" />
                <meta name="theme-color" content="#050505" />
            </Head>
            {getLayout(<Component {...pageProps} />)}
        </>
    );
};

export default Iconify;
