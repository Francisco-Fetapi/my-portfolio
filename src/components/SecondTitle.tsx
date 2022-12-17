import React from "react";
import { Title, createStyles } from "@mantine/core";

interface SecondTitleProps {
  children: React.ReactNode;
  noOrnament?: boolean;
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
    [theme.fn.smallerThan("sm")]: {
      fontSize: 20,
      padding: "0px 25px",
    },
    fontWeight: 900,
    fontFamily: "Roboto,sans-serif",
    margin: 0,
    padding: "0px 50px",
  },
}));

export default function SecondTitle({
  children,
  noOrnament,
}: SecondTitleProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      {noOrnament ? <div /> : <div className={classes.ornament} />}
      <Title order={2} className={classes.title} align="center">
        {children}
      </Title>
      {noOrnament ? <div /> : <div className={classes.ornament} />}
    </div>
  );
}
