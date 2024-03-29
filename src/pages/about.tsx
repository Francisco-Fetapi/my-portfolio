import AppScheme from "../components/AppScheme";
import MainTitle from "../components/MainTitle";
import { MediaQuery, Box, Grid, Group, Text, Button } from "@mantine/core";
import { useStyles as useStylesHeroTitleComponent } from "../components/HeroTitle";

import Link from "next/link";
import SecondTitle from "../components/SecondTitle";
import SectionText from "../components/SectionText";
import TecnologyCard from "../components/TecnologyCard";
import TecnologiesContainer from "../components/TecnologiesContainer";
import useMe from "../database/useMe";
import useTecnologies from "../database/useTecnologies";

import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import useTranslationComponents from "../hooks/useTranslationComponents";
import { IconPhone, IconDownload } from "@tabler/icons";
import NextSeoTemplate from "../components/NextSeoTemplate";
import MyPhoto from "../components/MyPhoto";
import { ImageJsonLd } from "next-seo";

export default function IndexPage() {
  const { classes } = useStylesHeroTitleComponent();

  const { me } = useMe();
  const { frontEndTecnologies, backEndTecnologies, otherTecnologies } =
    useTecnologies();

  const { componentsForTranslation } = useTranslationComponents();

  const { t } = useTranslation("about");
  const { t: t2 } = useTranslation("common");

  function TextAboutMe() {
    return (
      <div>
        <Text className={classes.description}>
          <Trans
            i18nKey="about:auto_biography"
            components={componentsForTranslation}
            values={{
              myName: me.name,
              myProfessional: me.professional,
            }}
          />
        </Text>
        <Text className={classes.description}>
          <Trans
            i18nKey="about:auto_biography_2"
            components={componentsForTranslation}
            values={{
              birthday: me.birthday.toLocaleDateString(),
              years: me.getMyAge(),
            }}
          />
        </Text>
        <Text className={classes.description}>{t("auto_biography_3")}</Text>
        <Text className={classes.description}>{t("auto_biography_4")}</Text>
      </div>
    );
  }

  return (
    <div>
      <NextSeoTemplate
        title={t("about_me")}
        description={t("seo_description")}
        pageName="/about"
      />
      <ImageJsonLd
        images={[
          {
            contentUrl: me.photo,
            creator: {
              "@type": "Person",
              name: me.name,
            },
            creditText: me.name,
            copyrightNotice: "© " + me.name,
          },
        ]}
      />
      <AppScheme>
        <Box mt={20}>
          <Grid gutter="lg" justify="flex-end">
            <Grid.Col md={8} xs={12}>
              <MainTitle align="flex-start">{t("about_me")}</MainTitle>
              <Box
                sx={{ zoom: 0.9, width: "100%", maxWidth: 600 }}
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <Text color="dimmed" className={classes.description}>
                  <Trans
                    i18nKey="about:intro_biography"
                    components={componentsForTranslation}
                  />
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
                    leftIcon={<IconPhone size={20} />}
                  >
                    {t("to_contact")}
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
                  leftIcon={<IconDownload size={20} />}
                >
                  {t2("download_cv")}
                </Button>
              </Group>
            </Grid.Col>
            <Grid.Col md={4} xs={12}>
              <MyPhoto />
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
          <SecondTitle>{t2("other_tecnologies")}</SecondTitle>
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
