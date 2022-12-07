import React from "react";
import { Group, Title, createStyles } from "@mantine/core";

interface MainTitleProps {
  children: React.ReactNode;
}

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "flex-end",
  },
  ornament: {
    width: "90%",
    maxWidth: 400,
    height: 2,
    background:
      theme.colorScheme === "dark" ? theme.colors.gray[6] : theme.black,
    marginLeft: 10,
  },
  title: {
    fontSize: 50,
    fontWeight: 700,
  },
}));

export default function MainTitle({ children }: MainTitleProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Title order={1} className={classes.title}>
        {children}
      </Title>
      <div className={classes.ornament} />
    </div>
  );
}
