import { Anchor } from "@mantine/core";

interface ExternalLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function ExternalLink({ href, children }: ExternalLinkProps) {
  return (
    <Anchor href={href} target="__blank">
      {children}
    </Anchor>
  );
}
