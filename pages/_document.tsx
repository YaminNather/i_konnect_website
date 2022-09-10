import { Html, Main, NextScript, Head } from "next/document"
import { FC } from "react";

const Document: FC = () => {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/zfi2yeg.css" />
            </Head>

            <body>
                <Main />

                <NextScript />
            </body>
        </Html>
    );
};

export default Document;

// Random Change