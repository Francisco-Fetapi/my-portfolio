import Link from "next/link";
import { Anchor } from "@mantine/core";

interface CustomLinkProps {
  children?: React.ReactNode;
  href: string;
}

export default function CustomLink({ children, href }: CustomLinkProps) {
  return (
    <Link href={href} passHref>
      <Anchor>{children}</Anchor>
    </Link>
  );
}
