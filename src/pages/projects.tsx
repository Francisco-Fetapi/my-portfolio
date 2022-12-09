import Head from "next/head";
import AppScheme from "../components/AppScheme";
import { Box, Text } from "@mantine/core";
import MainTitle from "../components/MainTitle";
import { useStyles as useStylesHeroTitleComponent } from "../components/HeroTitle";
import SectionText from "../components/SectionText";
import { someProjects } from "../database/me";
import { ProjectCard } from "../components/ProjectCard";
import TecnologiesContainer from "../components/TecnologiesContainer";

export default function IndexPage() {
  const { classes } = useStylesHeroTitleComponent();
  return (
    <div>
      <Head>
        <title>Projetos</title>
      </Head>
      <AppScheme>
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
          <TecnologiesContainer>
            {someProjects.map((project, key) => (
              <ProjectCard
                {...project}
                description={project.description?.toString().repeat(key + 1)}
                key={project.name + key}
              />
            ))}
          </TecnologiesContainer>
        </SectionText>
      </AppScheme>
    </div>
  );
}
