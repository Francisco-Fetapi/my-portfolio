import React from "react";
import { Text, createStyles, Paper, PaperProps } from "@mantine/core";

interface TecnologyCardProps extends PaperProps {
  children: React.ReactNode;
  tecnology: {
    name: string;
    image: string;
  };
}

const useStyles = createStyles((theme) => ({
  container: {
    ":hover": {
      boxShadow: "0 6px 14px 1px rgb(0 0 0 / 28%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: 130,
      width: 130,
      margin: "20px 10px",
    },
    // justifyContent: "space-between",
  },
}));

export default function TecnologyCard({
  tecnology,
  ...paperProps
}: TecnologyCardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow={"0 6px 14px 1px rgb(0 0 0 / 10%);"}
      className={classes.container}
      {...paperProps}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={tecnology.image} alt={tecnology.name} width={50} height={50} />
      <Text align="center" color="dimmed" size="xs">
        {tecnology.name}
      </Text>
    </Paper>
  );
}
