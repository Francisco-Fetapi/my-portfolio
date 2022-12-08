import React from "react";
import { Group, Title, createStyles } from "@mantine/core";

interface TecnologiesContainerProps {
  children: React.ReactNode;
}

const useStyles = createStyles((theme) => ({
  container: {},
}));

export default function TecnologiesContainer({
  children,
}: TecnologiesContainerProps) {
  const { classes } = useStyles();

  return <div className={classes.container}>{children}</div>;
}
