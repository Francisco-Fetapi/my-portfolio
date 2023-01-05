import useTranslation from "next-translate/useTranslation";
import AppScheme from "../components/AppScheme";
import { HeroTitle } from "../components/HeroTitle";
import NextSeoTemplate from "../components/NextSeoTemplate";

export default function IndexPage() {
  const { t } = useTranslation("home");
  const { t: tCommon } = useTranslation("common");

  return (
    <div>
      <NextSeoTemplate
        title={tCommon("main_page")}
        description={t("seo_description")}
      />
      <AppScheme>
        <HeroTitle />
      </AppScheme>
    </div>
  );
}
