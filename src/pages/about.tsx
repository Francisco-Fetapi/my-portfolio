import Head from "next/head";
import AppScheme from "../components/AppScheme";
import MainTitle from "../components/MainTitle";
import { Box, Group, Text, Button } from "@mantine/core";
import { useStyles as useStylesHeroTitleComponent } from "../components/HeroTitle";
import { me } from "../database/me";
import Link from "next/link";

export default function IndexPage() {
  const { classes } = useStylesHeroTitleComponent();
  return (
    <div>
      <Head>
        <title>Sobre</title>
      </Head>
      <AppScheme>
        <Box mt={20}>
          <MainTitle>Sobre</MainTitle>
          <Text color="dimmed" className={classes.description}>
            Melhorando a cada dia em Desenvolvimento Front-End e Back-End.
          </Text>
          <Group mt={30}>
            <Link href="/contact" passHref>
              <Button
                component="a"
                variant="gradient"
                size="md"
                gradient={{ from: "blue", to: "cyan" }}
                // className={classes.control}
                // leftIcon={<GithubIcon size={20} />}
              >
                Contactar
              </Button>
            </Link>
            <Button
              component="a"
              size="md"
              // className={classes.control}
              variant="subtle"
              href={me.downloadCV}
              target="__blank"
              color="cyan"
              // leftIcon={<IconDownload size={20} />}
            >
              Baixar Curriculum
            </Button>
          </Group>
          <Box mt={50} sx={{ zoom: 0.8 }}>
            <Text className={classes.description}>
              My name is Marcos Meneghetti, I am a Front-End JavaScript and
              React Developer. I discovered HTML in july 2020 and now it&apos;s
              &quot;my precious&quot;. I have a bachelor degree in publicity,
              certified in Front-End development and I am certified in Game
              Designer. I speak portuguese (maternal language), french and
              english.
            </Text>
            <Text className={classes.description}>
              I lived in Canada during 2 years (2019-2021) and now I live again
              in France. I have worked in the industry as 3D animator for 15
              years in short and feature films, TV shows and for various
              animation studios like Blue Spirit Canada, Bullit Studio, TeamTo,
              Citron Vache and Otto Desenhos Animados.
            </Text>
            <Text className={classes.description}>
              My passions are: web development, 3D animation, take pictures,
              cinema, miniatures, listen to music, hockey, martial arts and
              magic tricks.
            </Text>
          </Box>
        </Box>
      </AppScheme>
    </div>
  );
}
