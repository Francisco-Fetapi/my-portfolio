import Head from "next/head";
import AppScheme from "../components/AppScheme";
import { Box, Text } from "@mantine/core";
import MainTitle from "../components/MainTitle";
import { useStyles as useStylesHeroTitleComponent } from "../components/HeroTitle";
import SectionText from "../components/SectionText";
import MyTimeline from "../components/MyTimeline";
import { timeline } from "../database/me";

export default function IndexPage() {
  const { classes } = useStylesHeroTitleComponent();
  return (
    <div>
      <Head>
        <title>Jornada</title>
      </Head>
      <AppScheme>
        <Box mt={10}>
          <MainTitle>Jornada</MainTitle>
          <Box sx={{ zoom: 0.9, width: "100%", maxWidth: 800 }}>
            <Text color="dimmed" className={classes.description}>
              @Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
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
