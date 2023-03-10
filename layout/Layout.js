import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import Header from "./Header";
const Layout = (props) => {
    return (
        <div>
            <Head><link
                async
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
            /></Head>
            <Container>
                <Header />
                {props.children}
            </Container>
        </div>
    )
}

export default Layout