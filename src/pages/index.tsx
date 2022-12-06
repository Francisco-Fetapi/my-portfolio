import { Center, useMantineColorScheme } from "@mantine/core";
import Head from "next/head";
import { HeaderMegaMenu } from "../components/HeaderMenu";
import { parseCookies } from "nookies";
import AppScheme from "../components/AppScheme";

export default function IndexPage() {
  const { colorScheme } = useMantineColorScheme();
  console.log("provide", colorScheme);
  console.log(parseCookies());
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <AppScheme>
        <h1>Ola Mundo</h1>
      </AppScheme>
    </div>
  );
}
