import Head from "next/head";
import AppScheme from "../components/AppScheme";
import { Box, Text, Anchor } from "@mantine/core";
import MainTitle from "../components/MainTitle";
import { useStyles as useStylesHeroTitleComponent } from "../components/HeroTitle";
import SectionText from "../components/SectionText";
import MyTimeline from "../components/MyTimeline";
import useTimeline from "../database/useTimeline";
import CustomLink from "../components/CustomLink";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import useTranslationComponents from "../hooks/useTranslationComponents";

export default function IndexPage() {
  const { classes } = useStylesHeroTitleComponent();
  const { timeline } = useTimeline();
  const { t } = useTranslation("common");
  const { componentsForTranslation } = useTranslationComponents();

  return (
    <div>
      <Head>
        <title>{t("journey")}</title>
      </Head>
      <AppScheme>
        <Box mt={10}>
          <MainTitle>{t("journey")}</MainTitle>
          <Box
            sx={{ zoom: 0.9 }}
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <Text className={classes.description}>
              <Trans
                i18nKey="journey:intro"
                components={componentsForTranslation}
              />
            </Text>
          </Box>
        </Box>
        <SectionText
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1200"
          data-aos-once="true"
        >
          <MyTimeline timelines={timeline} />
        </SectionText>
      </AppScheme>
    </div>
  );
}
