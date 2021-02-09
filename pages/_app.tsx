import React, { FC } from "react";
import type { AppProps } from "next/app";
import "../styles/global.css";

const App: FC<AppProps> = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
