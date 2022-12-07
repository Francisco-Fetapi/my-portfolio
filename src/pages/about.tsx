import Head from "next/head";
import AppScheme from "../components/AppScheme";
import MainTitle from "../components/MainTitle";
import {
  Center,
  createStyles,
  Box,
  Grid,
  Group,
  Text,
  Button,
} from "@mantine/core";
import { useStyles as useStylesHeroTitleComponent } from "../components/HeroTitle";
import { me } from "../database/me";
import Link from "next/link";
import Image from "next/image";

const PHOTO_SIZE = 250;

const useStyles = createStyles((theme) => ({
  image: {
    borderRadius: theme.radius.md,
  },
}));

export default function IndexPage() {
  const { classes } = useStylesHeroTitleComponent();
  const { classes: classes2 } = useStyles();
  return (
    <div>
      <Head>
        <title>Sobre</title>
      </Head>
      <AppScheme>
        <Box mt={20}>
          <Grid gutter="lg" justify="flex-end">
            <Grid.Col md={8} xs={12}>
              <MainTitle>Sobre</MainTitle>
              <Box sx={{ zoom: 0.9, width: "100%", maxWidth: 600 }}>
                <Text color="dimmed" className={classes.description}>
                  Sou um cara apaixonado por desenvolvimento de software.
                  Atualmente com foco em Front-End.
                </Text>
              </Box>
              <Group mt={30}>
                <Link href="/contact" passHref>
                  <Button
                    component="a"
                    variant="gradient"
                    size="md"
                    gradient={{ from: "blue", to: "cyan" }}
                  >
                    Contactar
                  </Button>
                </Link>
                <Button
                  component="a"
                  size="md"
                  variant="subtle"
                  href={me.downloadCV}
                  target="__blank"
                  color="cyan"
                >
                  Baixar Curriculum
                </Button>
              </Group>
            </Grid.Col>
            <Grid.Col md={4} xs={12}>
              <Box
                sx={(theme) => ({
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  [theme.fn.smallerThan("md")]: {
                    marginTop: 30,
                  },
                })}
              >
                <Image
                  src="/my-photo1.jpg"
                  width={PHOTO_SIZE}
                  height={PHOTO_SIZE + 50}
                  alt="Minha foto"
                  className={classes2.image}
                />
                <Text mt={10} color="dimmed" size="xs" align="center">
                  {me.name}
                </Text>
              </Box>
            </Grid.Col>
          </Grid>

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
