import { useState, useEffect } from "react";
import Head from "next/head";
import AppStore from "../core/AppStore";
import AppProvider from "../core/AppProvider";
import { ColorSchemeProvider } from "@mantine/core";
import nookies, { parseCookies, setCookie } from "nookies";
import { AppProps } from "next/app";

type IColor = "light" | "dark";
interface WithColorScheme {
  preferredColorScheme: IColor;
}
const THEME_COOKIE = "theme_mantine_portfolio";
export default function App(props: AppProps & WithColorScheme) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<IColor>("light");

  function toggleColorScheme(value: "light" | "dark") {
    const nextColorScheme =
      value || (colorScheme === "light" ? "dark" : "light");
    setColorScheme(nextColorScheme);
    setCookie(null, THEME_COOKIE, nextColorScheme, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  }

  useEffect(() => {
    const cookies = parseCookies();
    const nextColor = (cookies[THEME_COOKIE] || colorScheme) as IColor;
    toggleColorScheme(nextColor);
  }, []);

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
