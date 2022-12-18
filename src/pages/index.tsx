import Head from "next/head";
import AppScheme from "../components/AppScheme";
import { HeroTitle } from "../components/HeroTitle";
import RouterTransition from "../components/RouterTransition";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <AppScheme>
        <RouterTransition />
        <HeroTitle />
      </AppScheme>
    </div>
  );
}
