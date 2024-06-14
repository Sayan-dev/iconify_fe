import LandingRoot from "@/components/home";
import AppWrapper from "@/components/layouts/AppWrapper";
import { NextPageWithLayout } from "@/types";
import Head from "next/head";
import React from "react";

const Landing: NextPageWithLayout = () => (
    <>
        <Head>
            <title>Iconify</title>
            <meta name="description" content="Generated by Sayanta" />
        </Head>
        <LandingRoot />
    </>
);

Landing.getLayout = (page) => <AppWrapper>{page}</AppWrapper>;

export default Landing;