import Head from "next/head";
import AppScheme from "../components/AppScheme";
import MainTitle from "../components/MainTitle";
import {
  createStyles,
  MediaQuery,
  Box,
  Grid,
  Group,
  Text,
  Button,
} from "@mantine/core";
import { useStyles as useStylesHeroTitleComponent } from "../components/HeroTitle";

import Link from "next/link";
import Image from "next/image";
import SecondTitle from "../components/SecondTitle";
import SectionText from "../components/SectionText";
import TecnologyCard from "../components/TecnologyCard";
import TecnologiesContainer from "../components/TecnologiesContainer";
import useMe from "../database/useMe";
import useTecnologies from "../database/useTecnologies";
import ExternalLink from "../components/ExternalLink";
import CustomLink from "../components/CustomLink";
import Trans from "next-translate/Trans";

const PHOTO_SIZE = 250;

const useStyles = createStyles((theme) => ({
  image: {
    borderRadius: theme.radius.md,
  },
}));

export default function IndexPage() {
  const { classes } = useStylesHeroTitleComponent();
  const { classes: classes2 } = useStyles();
  const { me } = useMe();
  const { frontEndTecnologies, backEndTecnologies, otherTecnologies } =
    useTecnologies();

  function TextAboutMe() {
    return (
      <div>
        <Text className={classes.description}>
          <Trans
            i18nKey="about:auto_biography"
            components={{
              b: <b />,
              linkFullStack: <ExternalLink reference="fullStack" />,
              linkJs: <ExternalLink reference="javascript" />,
              link2018: <CustomLink href="/journey?year=2018" />,
              linkLogic: <ExternalLink reference="programmingLogic" />,
              linkVisualG: <ExternalLink reference="visualg" />,
              linkAlgorithms: <ExternalLink reference="algorithms" />,
              linkTerminal: <ExternalLink reference="prompt" />,
              linkHTML: <ExternalLink reference="html5" />,
              linkCSS: <ExternalLink reference="css3" />,
            }}
            values={{
              myName: me.name,
              myProfessional: me.professional,
            }}
          />
        </Text>
        <Text className={classes.description}>
          Nasci aos{" "}
          <b>
            {me.birthday.toLocaleDateString()} ({me.getMyAge()} anos)
          </b>
          , falo Português (minha língua materna) e tenho um Inglês
          intermediário. Atualmente vivo em{" "}
          <ExternalLink reference="lobito">
            Angola, Benguela, Lobito
          </ExternalLink>
          .
        </Text>
        <Text className={classes.description}>
          Comecei a trabalhar profissionalmente com programação atendendo
          demandas de clientes da minha localidade, antes disso apenas criava
          projetos de estudo.
        </Text>
        <Text className={classes.description}>
          As minhas paixões são: Programação, Cinema (Filmes, Séries e Animes),
          Música e Literatura.
        </Text>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Sobre</title>
      </Head>
      <AppScheme>
        <Box mt={20}>
          <Grid gutter="lg" justify="flex-end">
            <Grid.Col md={8} xs={12}>
              <MainTitle align="flex-start">Sobre Mim</MainTitle>
              <Box
                sx={{ zoom: 0.9, width: "100%", maxWidth: 600 }}
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <Text color="dimmed" className={classes.description}>
                  Sou um cara apaixonado por desenvolvimento de software.
                  Atualmente com foco em{" "}
                  <ExternalLink reference="fullStack">
                    Desenvolvimento Web full-stack
                  </ExternalLink>
                  .
                </Text>
              </Box>
              <Group mt={30}>
                <Link href="/contact" passHref>
                  <Button
                    component="a"
                    variant="gradient"
                    size="md"
                    gradient={{ from: "blue", to: "cyan" }}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
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
                  color="blue"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
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
                data-aos="flip-left"
                data-aos-delay="1500"
                data-aos-duration="1000"
              >
                <Image
                  src={me.photo}
                  width={PHOTO_SIZE}
                  height={PHOTO_SIZE + 50}
                  alt="Minha foto"
                  className={classes2.image}
                  quality={100}
                  placeholder="blur"
                  blurDataURL={me.photo}
                  // layout="responsive"
                />
                <Text mt={10} color="dimmed" size="xs" align="center">
                  {me.name}
                </Text>
              </Box>
            </Grid.Col>
          </Grid>

          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <SectionText
              sx={{ zoom: 0.8 }}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="-150"
              data-aos-delay="2300"
              data-aos-once="true"
            >
              <TextAboutMe />
            </SectionText>
          </MediaQuery>

          <MediaQuery largerThan="md" styles={{ display: "none" }}>
            <SectionText
              sx={{ zoom: 0.8 }}
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="-150"
              data-aos-once="true"
            >
              <TextAboutMe />
            </SectionText>
          </MediaQuery>
        </Box>

        <SectionText>
          <SecondTitle>FRONT-END</SecondTitle>
          <TecnologiesContainer>
            {frontEndTecnologies.map((tecnology, key) => (
              <TecnologyCard
                tecnology={tecnology}
                key={tecnology.name}
                position={key}
              />
            ))}
          </TecnologiesContainer>
        </SectionText>
        <SectionText>
          <SecondTitle>BACK-END</SecondTitle>
          <TecnologiesContainer>
            {backEndTecnologies.map((tecnology, key) => (
              <TecnologyCard
                tecnology={tecnology}
                key={tecnology.name}
                position={key}
              />
            ))}
          </TecnologiesContainer>
        </SectionText>
        <SectionText>
          <SecondTitle>OUTRAS TECNOLOGIAS</SecondTitle>
          <TecnologiesContainer>
            {otherTecnologies.map((tecnology, key) => (
              <TecnologyCard
                tecnology={tecnology}
                key={tecnology.name}
                position={key}
              />
            ))}
          </TecnologiesContainer>
        </SectionText>
      </AppScheme>
    </div>
  );
}
