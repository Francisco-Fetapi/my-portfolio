import Head from "next/head";
import AppScheme from "../components/AppScheme";
import { Box, Text } from "@mantine/core";
import MainTitle from "../components/MainTitle";
import { useStyles as useStylesHeroTitleComponent } from "../components/HeroTitle";
import SectionText from "../components/SectionText";
import MyTimeline from "../components/MyTimeline";
import useTimeline from "../database/useTimeline";
import RouterTransition from "../components/RouterTransition";

export default function IndexPage() {
  const { classes } = useStylesHeroTitleComponent();
  const { timeline } = useTimeline();
  return (
    <div>
      <Head>
        <title>Jornada</title>
      </Head>
      <AppScheme>
        <RouterTransition />
        <Box mt={10}>
          <MainTitle>Jornada</MainTitle>
          <Box sx={{ zoom: 0.9 }}>
            <Text className={classes.description}>
              A minha jornada como desenvolvedor &nbsp;
              <u>
                <i>começou em 2018</i>
              </u>
              , de lá pra cá passei por um tanto de experiências que me tornaram
              um desenvolvedor mais tecnicamente capacitado.
              <br />
              <br />
              Darei o meu máximo para descrever TODAS as etapas do meu processo
              de crescimento ao longo dos anos logo abaixo.
            </Text>
          </Box>
        </Box>
        <SectionText>
          <MyTimeline timelines={timeline} />
        </SectionText>
      </AppScheme>
    </div>
  );
}
