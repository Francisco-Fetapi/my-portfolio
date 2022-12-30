import { Anchor } from "@mantine/core";
import useExternalLink, { IExternalLinks } from "../hooks/useExternalLink";

interface ExternalLinkProps {
  children?: React.ReactNode;
  reference?: keyof IExternalLinks;
  href?: string;
}

export default function ExternalLink({
  href,
  reference,
  children,
}: ExternalLinkProps) {
  const links = useExternalLink();
  const link = reference ? links[reference] : href;
  return (
    <Anchor href={link} target="__blank">
      {children}
    </Anchor>
  );
}
