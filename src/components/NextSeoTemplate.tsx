import { useMantineColorScheme } from "@mantine/core";
import { DefaultSeo, DefaultSeoProps } from "next-seo";
import { useRouter } from "next/router";
import SEO from "../../next-seo.config";
import { ILinksMenuPath } from "../hooks/useMenuLinks";

interface NextSeoTemplateProps {
  pageName: ILinksMenuPath;
}

export default function NextSeoTemplate({
  pageName,
  ...props
}: DefaultSeoProps & NextSeoTemplateProps) {
  const { locales, defaultLocale, locale: currentLocale } = useRouter();
  const { APP_URL } = process.env;
  const { colorScheme } = useMantineColorScheme();

  const alternativeLocales = locales?.filter(
    (locale) => locale !== currentLocale
  );

  return (
    <DefaultSeo
      languageAlternates={alternativeLocales?.map((locale) => ({
        hrefLang: locale,
        href:
          defaultLocale === locale
            ? `${APP_URL}${pageName}`
            : `${APP_URL}/${locale}${pageName}`,
      }))}
      additionalLinkTags={[
        // {
        //   rel: "shortcut icon",
        //   href: "/favicon.svg",
        // },
        {
          rel: "viewport",
          href: "minimum-scale=1, initial-scale=1, width=device-width",
        },
      ]}
      themeColor={colorScheme === "dark" ? "black" : "white"}
      twitter={{
        site: "@franciscofetapi",
        cardType: "summary_large_image",
        handle: "@franciscofetapi",
      }}
      {...SEO}
      {...props}
    />
  );
}
