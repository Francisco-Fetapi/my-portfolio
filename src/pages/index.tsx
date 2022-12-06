import Head from "next/head";
import AppScheme from "../components/AppScheme";
import { HeroTitle } from "../components/HeroTitle";

export default function IndexPage() {
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
