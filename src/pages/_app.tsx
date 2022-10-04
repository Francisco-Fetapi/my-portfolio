import { AppProps } from "next/app";
import Head from "next/head";
import AppStore from "../core/AppStore";
import AppProvider from "../core/AppProvider";
import { ColorScheme, ColorSchemeProvider } from "@mantine/core";
import { useState } from "react";
import nookies, { setCookie, parseCookies } from "nookies";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const cookiesServer = nookies.get();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    (cookiesServer.theme || "light") as ColorScheme
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    setCookie(null, "theme", nextColorScheme, {
      maxAge: 12 * 30 * 24 * 60 * 60,
    });

    console.log("client cookies", parseCookies());
  };

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
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <AppProvider Page={<Component {...pageProps} />} />
        </ColorSchemeProvider>
      </AppStore>
    </>
  );
}
