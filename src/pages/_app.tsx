import { AppProps } from "next/app";
import Head from "next/head";
import AppStore from "../core/AppStore";
import MantineProvider from "../core/MantineProvider";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <AppStore>
        <MantineProvider Page={<Component {...pageProps} />} />
      </AppStore>
    </>
  );
}
