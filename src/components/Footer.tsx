import { Box, Text } from "@mantine/core";
import { me } from "../database/me";
import { FooterLinks, FooterLinksProps } from "./FooterLinks";
import { links as MenuLinks } from "./HeaderMenu";

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

export default function Footer() {
  return (
    <Box>
      <FooterLinks data={footer} />
      <br />
    </Box>
  );
}
