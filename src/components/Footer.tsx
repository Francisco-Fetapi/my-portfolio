import { Box, Text } from "@mantine/core";
import useMe from "../database/useMe";
import useTimeline from "../database/useTimeline";

import { FooterLinks, FooterLinksProps } from "./FooterLinks";
import { links as MenuLinks } from "./HeaderMenu";

export default function Footer() {
  const { me } = useMe();
  const { years } = useTimeline();

  const footer: FooterLinksProps["data"] = [
    { title: "Navegação", links: MenuLinks },
    {
      title: "Tecnologias",
      links: me.tecnologies.slice(0, 5).map((tec) => ({
        href: "/projects?language=" + tec.toLowerCase(),
        label: tec,
      })),
    },
    {
      title: "Jornada",
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
