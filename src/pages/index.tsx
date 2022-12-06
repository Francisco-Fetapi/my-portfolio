import { Center, useMantineColorScheme } from "@mantine/core";
import Head from "next/head";
import { HeaderMegaMenu } from "../components/HeaderMenu";
import { parseCookies } from "nookies";
import AppScheme from "../components/AppScheme";
import { HeroTitle } from "../components/HeroTitle";

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
        <HeroTitle />
      </AppScheme>
    </div>
  );
}
