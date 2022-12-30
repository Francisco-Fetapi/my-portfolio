import useTranslation from "next-translate/useTranslation";

export default function useMenuLinks() {
  const { t } = useTranslation("common");

  const links = [
    { label: t("main_page"), href: "/" },
    { label: t("about"), href: "/about" },
    { label: t("journey"), href: "/journey" },
    { label: t("projects"), href: "/projects" },
    { label: t("contact"), href: "/contact" },
  ];

  return { links };
}
