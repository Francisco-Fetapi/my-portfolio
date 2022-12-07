import Head from "next/head";
import AppScheme from "../components/AppScheme";
import MainTitle from "../components/MainTitle";
import { Box, Text } from "@mantine/core";
import { useStyles as useStylesHeroTitleComponent } from "../components/HeroTitle";

export default function IndexPage() {
  const { classes } = useStylesHeroTitleComponent();
  return (
    <div>
      <Head>
        <title>Contacto</title>
      </Head>
      <AppScheme>
        <Box mt={20}>
          <MainTitle>Contacto</MainTitle>
          {/* <br /> */}
          <Text color="dimmed" className={classes.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            sapiente perspiciatis aut. Ut, inventore cum! Ea perspiciatis harum
            laudantium distinctio ipsam, ut quod voluptatem obcaecati quia
            accusantium eaque. Odio, omnis.
          </Text>
          <br />
          <Text color="dimmed" className={classes.description}>
            Lorem ipsum dolor
          </Text>
        </Box>
      </AppScheme>
    </div>
  );
}
