import { Box, Text } from "@mantine/core";
import useMe from "../database/useMe";

import { FooterLinks, FooterLinksProps } from "./FooterLinks";
import { links as MenuLinks } from "./HeaderMenu";

export default function Footer() {
  const { me } = useMe();

  const footer: FooterLinksProps["data"] = [
    { title: "Navegação", links: MenuLinks },
    {
      title: "Tecnologias",
      links: me.tecnologies.slice(0, 5).map((tec) => ({
        href: "/projects?language=" + tec.toLowerCase(),
        label: tec,
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
