import { Box, Text } from "@mantine/core";
import { FooterLinks, FooterLinksProps } from "./FooterLinks";

const footer: FooterLinksProps["data"] = [
  { title: "Portfolio", links: [{ label: "Pagina Incial", link: "/" }] },
];

export default function Footer() {
  return (
    <Box>
      <FooterLinks data={footer} />
    </Box>
  );
}
