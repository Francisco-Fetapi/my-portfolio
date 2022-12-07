import Head from "next/head";
import AppScheme from "../components/AppScheme";
import MainTitle from "../components/MainTitle";
import { Box } from "@mantine/core";

export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Sobre</title>
      </Head>
      <AppScheme>
        <Box mt={20}>
          <MainTitle>Sobre</MainTitle>
        </Box>
      </AppScheme>
    </div>
  );
}
