import Head from "next/head";
import AppScheme from "../components/AppScheme";
import { Box, Button, Center, Text } from "@mantine/core";
import MainTitle from "../components/MainTitle";
import { useStyles as useStylesHeroTitleComponent } from "../components/HeroTitle";
import SectionText from "../components/SectionText";
import { ProjectCard } from "../components/ProjectCard";
import TecnologiesContainer from "../components/TecnologiesContainer";
import SecondTitle from "../components/SecondTitle";
import SlideProject from "../components/SlideProjects";
import useProjects from "../database/useProjects";
import useMe from "../database/useMe";
import RouterTransition from "../components/RouterTransition";
import { useRouter } from "next/router";
import { useMemo } from "react";
import Link from "next/link";

export default function IndexPage() {
  const { classes } = useStylesHeroTitleComponent();
  const { someProjects, getProjectsByTag } = useProjects();
  const { me } = useMe();
  const router = useRouter();
  const tagQuery = router.query.tag as string | null;
  const filteredProjects = useMemo(() => {
    if (!tagQuery) return null;
    return getProjectsByTag(tagQuery);
  }, [tagQuery]);

  return (
    <div>
      <Head>
        <title>Projetos</title>
      </Head>
      <AppScheme>
        <RouterTransition />
        {!filteredProjects ? (
          <>
            <Box mt={10}>
              <MainTitle>Projetos</MainTitle>
              <Box sx={{ zoom: 0.9 }}>
                <Text className={classes.description}>
                  Desde o momento que digitei a minha primeira{" "}
                  <i>linha de código</i> até agora desenvolvi vários projetos de
                  estudo para ganhar proeficiencia nas tecnologias que conheço,
                  além é claro de ter atendido as demandas de um ou outro
                  cliente.
                  <br />
                  <br />
                  Abaixo eis uma lista dos projetos que desenvolvi ao longo dos
                  anos.
                </Text>
              </Box>
            </Box>

            <SectionText>
              <SecondTitle>EM DESTAQUE</SecondTitle>
              <SectionText>
                <SlideProject />
              </SectionText>
            </SectionText>
            <SectionText>
              <SecondTitle>MAIS PROJETOS</SecondTitle>
              <TecnologiesContainer>
                {someProjects.map((project, key) => (
                  <ProjectCard
                    {...project}
                    // description={project.description?.toString().repeat(key + 2)}
                    key={project.name + key}
                  />
                ))}
              </TecnologiesContainer>
            </SectionText>

            <SectionText>
              <SecondTitle noOrnament>
                ALGUM PROJETO EM MENTE? VAMOS TRABALHAR JUNTOS
              </SecondTitle>
              <SectionText>
                <Center>
                  <Button
                    component="a"
                    size="lg"
                    // className={classes.control}
                    variant="gradient"
                    target="__blank"
                    href={me.calendly}
                    gradient={{ from: "blue", to: "cyan" }}
                    // leftIcon={<IconDownload size={20} />}
                  >
                    Vamos falar
                  </Button>
                </Center>
              </SectionText>
            </SectionText>
          </>
        ) : (
          <div>
            <SectionText>
              <SecondTitle>{tagQuery?.toUpperCase()}</SecondTitle>
              <TecnologiesContainer>
                {filteredProjects.map((project, key) => (
                  <ProjectCard
                    {...project}
                    // description={project.description?.toString().repeat(key + 2)}
                    key={project.name + key}
                  />
                ))}
              </TecnologiesContainer>
            </SectionText>
            <SectionText>
              <Center>
                <Link href="/projects" passHref>
                  <Button
                    component="a"
                    size="sm"
                    // className={classes.control}
                    variant="light"
                    color="blue"
                    // gradient={{ from: "blue", to: "cyan" }}
                    // leftIcon={<IconDownload size={20} />}
                  >
                    VER TODOS OS PROJETOS
                  </Button>
                </Link>
              </Center>
            </SectionText>
          </div>
        )}
      </AppScheme>
    </div>
  );
}
