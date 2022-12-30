import Head from "next/head";
import AppScheme from "../components/AppScheme";
import { Box, Text, Anchor } from "@mantine/core";
import MainTitle from "../components/MainTitle";
import { useStyles as useStylesHeroTitleComponent } from "../components/HeroTitle";
import SectionText from "../components/SectionText";
import MyTimeline from "../components/MyTimeline";
import useTimeline from "../database/useTimeline";
import Link from "next/link";

export default function IndexPage() {
  const { classes } = useStylesHeroTitleComponent();
  const { timeline } = useTimeline();
  return (
    <div>
      <Head>
        <title>Jornada</title>
      </Head>
      <AppScheme>
        <Box mt={10}>
          <MainTitle>Jornada</MainTitle>
          <Box
            sx={{ zoom: 0.9 }}
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <Text className={classes.description}>
              A minha jornada como desenvolvedor começou em{" "}
              <Link href="/journey?year=2018" passHref>
                <Anchor>2018</Anchor>
              </Link>
              , de lá pra cá passei por um tanto de experiências que me tornaram
              um desenvolvedor mais tecnicamente capacitado.
              <br />
              <br />
              Darei o meu máximo para descrever algumas etapas do meu processo
              de crescimento ao longo dos anos logo abaixo:
            </Text>
          </Box>
        </Box>
        <SectionText
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1200"
        >
          <MyTimeline timelines={timeline} />
        </SectionText>
      </AppScheme>
    </div>
  );
}
