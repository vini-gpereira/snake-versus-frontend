import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/globals.css';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Snake Versus</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
