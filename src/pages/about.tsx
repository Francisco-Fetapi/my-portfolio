import Head from "next/head";
import AppScheme from "../components/AppScheme";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Sobre</title>
      </Head>
      <AppScheme>
        <h1>Sobre</h1>
      </AppScheme>
    </div>
  );
}
