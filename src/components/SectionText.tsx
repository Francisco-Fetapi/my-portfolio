import { BoxProps, Box } from "@mantine/core";
import React from "react";

interface SectionTextProps extends BoxProps {}

export default function SectionText({ children, ...props }: SectionTextProps) {
  return (
    <Box mt={50} {...props}>
      {children}
    </Box>
  );
}
