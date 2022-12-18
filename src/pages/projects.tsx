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

export default function IndexPage() {
  const { classes } = useStylesHeroTitleComponent();
  const { someProjects } = useProjects();
  const { me } = useMe();
  return (
    <div>
      <Head>
        <title>Projetos</title>
      </Head>
      <AppScheme>
        <RouterTransition />
        <Box mt={10}>
          <MainTitle>Projetos</MainTitle>
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
          <SecondTitle>ÚLTIMOS 5 PROJETOS</SecondTitle>
          <SectionText>
            <SlideProject />
          </SectionText>
        </SectionText>
        <SectionText>
          <SecondTitle>ALGUNS PROJETOS</SecondTitle>
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
      </AppScheme>
    </div>
  );
}
