import Head from "next/head";
import AppScheme from "../components/AppScheme";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Projetos</title>
      </Head>
      <AppScheme>
        <h1>Projetos</h1>
      </AppScheme>
    </div>
  );
}
