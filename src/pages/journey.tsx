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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              odio itaque enim tempora suscipit omnis quibusdam veniam amet
              alias culpa error nemo numquam eveniet libero, perspiciatis, ex
              aspernatur praesentium. At!
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
