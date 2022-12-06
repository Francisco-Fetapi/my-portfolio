import Head from "next/head";
import AppStore from "../core/AppStore";
import AppProvider from "../core/AppProvider";
import { ColorSchemeProvider } from "@mantine/core";
import { useState } from "react";
import nookies, { setCookie } from "nookies";
import { AppProps } from "next/app";

interface WithColorScheme {
  preferredColorScheme: "light" | "dark";
}
const THEME_COOKIE = "theme_mantine_portfolio";
export default function App(props: AppProps & WithColorScheme) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState(props.preferredColorScheme);

  console.log("props server color", props.preferredColorScheme);

  function toggleColorScheme(value: "light" | "dark") {
    const nextColorScheme =
      value || (colorScheme === "light" ? "dark" : "light");
    setColorScheme(nextColorScheme);
    setCookie(null, THEME_COOKIE, nextColorScheme, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  }

  return (
    <>
      <Head>
        <title>Francisco Fetapi - Portfolio</title>
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

// App.getInitialProps = ({ ctx }: { ctx: any }) => {
//   const cookies = nookies.get(ctx);
//   console.log("server cookies", cookies);
//   return {
//     preferredColorScheme: cookies[THEME_COOKIE] || "light",
//   };
// };
