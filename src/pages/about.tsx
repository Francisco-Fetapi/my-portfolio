import Head from "next/head";
import AppScheme from "../components/AppScheme";
import MainTitle from "../components/MainTitle";
import {
  Center,
  createStyles,
  Title,
  Box,
  Grid,
  Group,
  Text,
  Button,
} from "@mantine/core";
import { useStyles as useStylesHeroTitleComponent } from "../components/HeroTitle";
import { backEndTecnologies, fontEndTecnologies, me } from "../database/me";
import Link from "next/link";
import Image from "next/image";
import SecondTitle from "../components/SecondTitle";
import SectionText from "../components/SectionText";
import TecnologyCard from "../components/TecnologyCard";
import TecnologiesContainer from "../components/TecnologiesContainer";

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

          <SectionText sx={{ zoom: 0.8 }}>
            <Text className={classes.description}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi quidem qui explicabo officia at et possimus nesciunt
              fuga unde, laborum adipisci vel a deserunt dignissimos laudantium
              labore?
            </Text>
            <Text className={classes.description}>
              Qui, dolor. Obcaecati odio libero dolor! Consequatur ea doloribus
              voluptatum laudantium. Impedit optio dolorem sequi qui, et quis in
              consequuntur, autem dolore nobis magni, sapiente unde alias atque
              natus veritatis eius voluptates. Deserunt.
            </Text>
            <Text className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
              inventore doloribus harum et cum voluptatibus incidunt! Eligendi
              hic deleniti dolorum aliquam quod, in blanditiis illum voluptatem
              tempore sint repudiandae ex.
            </Text>
          </SectionText>
        </Box>

        <SectionText>
          <SecondTitle>FRONT-END</SecondTitle>
          <TecnologiesContainer>
            {fontEndTecnologies.map((tecnology) => (
              <TecnologyCard tecnology={tecnology} key={tecnology.name} />
            ))}
          </TecnologiesContainer>
        </SectionText>
        <SectionText>
          <SecondTitle>BACK-END</SecondTitle>
          <TecnologiesContainer>
            {backEndTecnologies.map((tecnology) => (
              <TecnologyCard tecnology={tecnology} key={tecnology.name} />
            ))}
          </TecnologiesContainer>
        </SectionText>

        <SectionText mt={100} sx={{ zoom: 0.8 }}>
          <Title order={1}>Algumas Considerações</Title>
          <Text className={classes.description}>
            Algumas consideracoes sobre as tecnologias que voce conhece. Citar
            rapidamente algumas tecnologias que fazem parte do ecossistema
            Front-End e Back-End que voce conhece, mas que nao fizeste questao
            de destacar na lista acima. Tambem fala sobre o que estas estudando
            (mais conceitos, tipo clean archicture no front e back...)
          </Text>
        </SectionText>
      </AppScheme>
    </div>
  );
}
