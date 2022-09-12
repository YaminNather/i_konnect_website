import { FC } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

const Document: FC = (props) => {
  return (
    <Html style={{scrollBehavior: "smooth"}}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;