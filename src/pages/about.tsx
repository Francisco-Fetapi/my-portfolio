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
import {
  TextWithGradient,
  useStyles as useStylesHeroTitleComponent,
} from "../components/HeroTitle";

import Link from "next/link";
import Image from "next/image";
import SecondTitle from "../components/SecondTitle";
import SectionText from "../components/SectionText";
import TecnologyCard from "../components/TecnologyCard";
import TecnologiesContainer from "../components/TecnologiesContainer";
import useMe from "../database/useMe";
import useTecnologies from "../database/useTecnologies";
import RouterTransition from "../components/RouterTransition";
import ExternalLink from "../components/ExternalLink";

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
  return (
    <div>
      <Head>
        <title>Sobre</title>
      </Head>
      <AppScheme>
        <RouterTransition />
        <Box mt={20}>
          <Grid gutter="lg" justify="flex-end">
            <Grid.Col md={8} xs={12}>
              <MainTitle>Sobre</MainTitle>
              <Box sx={{ zoom: 0.9, width: "100%", maxWidth: 600 }}>
                <Text color="dimmed" className={classes.description}>
                  Sou um cara apaixonado por desenvolvimento de software.
                  Atualmente com foco em{" "}
                  <ExternalLink href="#">
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
                  src={me.photo}
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
              Meu nome é <b>{me.name}</b>, sou{" "}
              <ExternalLink href="#">{me.professional}</ExternalLink> que atua
              essencialmente com tecnologias do ecossistema{" "}
              <ExternalLink href="#">JavaScript</ExternalLink>. O meu primeiro
              contato com programação foi em 2018 durante o <b>Ensino Médio</b>,
              nessa fase aprendi{" "}
              <ExternalLink href="#">Lógica de Programação</ExternalLink> usando
              o <ExternalLink href="#">Visual G</ExternalLink>. Depois de criar{" "}
              <ExternalLink href="#"> algoritmos</ExternalLink> que eram
              executados no <ExternalLink href="#">terminal</ExternalLink> me vi
              curioso em criar uma interface amigavél para os meus
              mini-programas, e foi assim que me deparei com{" "}
              <ExternalLink href="#">HTML5</ExternalLink>,{" "}
              <ExternalLink href="#">CSS3</ExternalLink> e{" "}
              <ExternalLink href="#">JavaScript</ExternalLink>, e desde ai
              continuei estudando sem parar.
            </Text>
            <Text className={classes.description}>
              Nasci aos{" "}
              <b>
                {me.birthday.toLocaleDateString()} ({me.getMyAge()} anos)
              </b>
              , falo Português (minha língua materna) e tenho um Inglês
              intermediário. Atualmente vivo em{" "}
              <ExternalLink href="#">Angola, Benguela, Lobito</ExternalLink>.
            </Text>
            <Text className={classes.description}>
              Comecei a trabalhar profissionalmente com programação atendendo
              demandas de clientes da minha localidade, antes disso apenas
              criava projetos de estudo.
            </Text>
            <Text className={classes.description}>
              As minhas paixões são: Programação, Cinema (Filmes, Séries e
              Animes), Música e Literatura.
            </Text>
          </SectionText>
        </Box>

        <SectionText>
          <SecondTitle>FRONT-END</SecondTitle>
          <TecnologiesContainer>
            {frontEndTecnologies.map((tecnology) => (
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
        <SectionText>
          <SecondTitle>OUTRAS TECNOLOGIAS</SecondTitle>
          <TecnologiesContainer>
            {otherTecnologies.map((tecnology) => (
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
