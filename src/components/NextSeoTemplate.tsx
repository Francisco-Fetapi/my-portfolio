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
  const { locales, defaultLocale } = useRouter();
  const { APP_URL } = process.env;
  return (
    <DefaultSeo
      languageAlternates={locales?.map((locale) => ({
        hrefLang: locale,
        href:
          defaultLocale === locale
            ? `${APP_URL}${pageName}`
            : `${APP_URL}/${locale}${pageName}`,
      }))}
      {...SEO}
      {...props}
    />
  );
}
