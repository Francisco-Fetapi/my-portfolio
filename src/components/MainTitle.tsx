import React, { CSSProperties } from "react";
import { Group, Title, createStyles } from "@mantine/core";

interface MainTitleProps {
  children: React.ReactNode;
  align?: CSSProperties["alignItems"];
}

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginBottom: 30,
  },
  ornament: {
    width: 50,
    height: 2,
    background:
      theme.colorScheme === "dark" ? theme.colors.gray[6] : theme.black,
    marginLeft: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

export default function MainTitle({ children, align }: MainTitleProps) {
  const { classes } = useStyles();

  return (
    <div
      className={classes.container}
      style={{
        alignItems: align || "center",
      }}
    >
      <Title order={1} className={classes.title}>
        {children}
      </Title>
      <div className={classes.ornament} />
    </div>
  );
}
