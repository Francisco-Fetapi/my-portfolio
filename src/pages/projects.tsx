import Head from "next/head";
import AppScheme from "../components/AppScheme";
import { Box, Text } from "@mantine/core";
import MainTitle from "../components/MainTitle";
import { useStyles as useStylesHeroTitleComponent } from "../components/HeroTitle";

export default function IndexPage() {
  const { classes } = useStylesHeroTitleComponent();
  return (
    <div>
      <Head>
        <title>Projetos</title>
      </Head>
      <AppScheme>
        <Box mt={10}>
          <MainTitle>Projetos</MainTitle>
          <Box sx={{ zoom: 0.9 }}>
            <Text className={classes.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              odio itaque enim tempora suscipit omnis quibusdam veniam amet
              alias culpa error nemo numquam eveniet libero, perspiciatis, ex
              aspernatur praesentium. At!
            </Text>
          </Box>
        </Box>
      </AppScheme>
    </div>
  );
}
