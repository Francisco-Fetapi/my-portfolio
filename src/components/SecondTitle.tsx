import React from "react";
import { Group, Title, createStyles } from "@mantine/core";

interface SecondTitleProps {
  children: React.ReactNode;
}

const useStyles = createStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr",
    alignItems: "center",
    // justifyContent: "space-between",
  },
  ornament: {
    width: "100%",
    height: 2,
    background:
      theme.colorScheme === "dark" ? theme.colors.gray[6] : theme.black,
    // marginLeft: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    margin: 0,
    padding: "0px 50px",
  },
}));

export default function SecondTitle({ children }: SecondTitleProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.ornament} />
      <Title order={2} className={classes.title} align="center">
        {children}
      </Title>
      <div className={classes.ornament} />
    </div>
  );
}
