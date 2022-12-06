import Head from "next/head";
import AppScheme from "../components/AppScheme";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Jornada</title>
      </Head>
      <AppScheme>
        <h1>Jornada</h1>
      </AppScheme>
    </div>
  );
}
