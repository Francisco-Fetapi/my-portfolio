import { Box, Text } from "@mantine/core";
import useTranslation from "next-translate/useTranslation";
import useMe from "../database/useMe";
import useTimeline from "../database/useTimeline";
import useMenuLinks from "../hooks/useMenuLinks";

import { FooterLinks, FooterLinksProps } from "./FooterLinks";

export default function Footer() {
  const { me } = useMe();
  const { years } = useTimeline();
  const { t } = useTranslation("commom");
  const { links } = useMenuLinks();

  const footer: FooterLinksProps["data"] = [
    { title: t("navigation"), links },
    {
      title: t("tecnolgies"),
      links: me.tecnologies.slice(0, 5).map((tec) => ({
        href: "/projects?tag=" + tec.toLowerCase(),
        label: tec,
      })),
    },
    {
      title: t("journey"),
      links: years
        .reverse()
        .slice(0, 5)
        .map((year) => ({
          href: `/journey?year=${year}`,
          label: year,
        })),
    },
  ];

  return (
    <Box>
      <FooterLinks data={footer} />
      <br />
    </Box>
  );
}
