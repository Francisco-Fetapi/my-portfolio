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
import { useRouter } from "next/router";
import { useMemo } from "react";
import Link from "next/link";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import useTranslationComponents from "../hooks/useTranslationComponents";
import NextSeoTemplate from "../components/NextSeoTemplate";
import { CarouselJsonLd } from "next-seo";

export default function IndexPage() {
  const { classes } = useStylesHeroTitleComponent();
  const { someProjects, recentProjects, getProjectsByTag } = useProjects();
  const { me } = useMe();
  const router = useRouter();
  const tagQuery = router.query.tag as string | null;
  const filteredProjects = useMemo(() => {
    if (!tagQuery) return null;
    return getProjectsByTag(tagQuery);
  }, [tagQuery]);

  const { t: t2 } = useTranslation("common");
  const { t } = useTranslation("projects");
  const { componentsForTranslation } = useTranslationComponents();

  return (
    <div>
      <NextSeoTemplate
        title={t2("projects")}
        description={t("seo_description")}
        pageName="/projects"
      />
      <CarouselJsonLd
        ofType="default"
        data={recentProjects.map((project) => ({
          name: project.name,
          url: project.links.preview || project.links.preview,
          images: project.images,
          authorName: me.name,
          description: project.description,
          datePublished: project.createdAt.toString(),
          keywords: [me.name, project.tags].toString(),
        }))}
        type="project"
      />
      <AppScheme>
        {!filteredProjects ? (
          <>
            <Box mt={10}>
              <MainTitle>{t2("projects")}</MainTitle>
              <Box
                sx={{ zoom: 0.9 }}
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <Text className={classes.description}>
                  <Trans
                    i18nKey="projects:intro"
                    components={componentsForTranslation}
                  />
                </Text>
              </Box>
            </Box>

            <SectionText>
              <SecondTitle>{t("top_projects")}</SecondTitle>
              <SectionText>
                <SlideProject />
              </SectionText>
            </SectionText>
            <SectionText>
              <SecondTitle>{t("more_projects")}</SecondTitle>
              <TecnologiesContainer>
                {someProjects.map((project, key) => (
                  <ProjectCard
                    {...project}
                    key={project.name + key}
                    position={key}
                  />
                ))}
              </TecnologiesContainer>
            </SectionText>

            <SectionText data-aos="fade-up" data-aos-duration="2000">
              <SecondTitle noOrnament>
                {t("have_a_project_in_mind")}
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
                    {t("lets_talk")}
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
                    key={project.name + key}
                    position={key}
                  />
                ))}
              </TecnologiesContainer>
            </SectionText>

            <SectionText data-aos="fade-up">
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
                    {t("take_a_look_at_all_projects")}
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
