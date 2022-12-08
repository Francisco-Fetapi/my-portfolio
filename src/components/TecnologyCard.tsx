import React from "react";
import { Text, Box, createStyles, Paper, PaperProps } from "@mantine/core";

export interface ITecnology {
  name: string;
  image: string;
}

interface TecnologyCardProps extends PaperProps {
  tecnology: ITecnology;
}

const useStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: theme.radius.md,
    height: 130,
    width: 130,
    margin: "20px 10px",
    ":hover": {
      boxShadow: "0 6px 14px 1px rgb(0 0 0 / 28%)",
    },
  },
  img: {
    objectFit: "contain",
  },
}));

export default function TecnologyCard({
  tecnology,
  ...paperProps
}: TecnologyCardProps) {
  const { classes } = useStyles();

  return (
    <Box
      sx={{
        display: "inline-block",
        textAlign: "center",
      }}
    >
      <Paper
        shadow={"0 6px 14px 1px rgb(0 0 0 / 10%);"}
        className={classes.container}
        {...paperProps}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tecnology.image}
          alt={tecnology.name}
          width={45}
          height={45}
          className={classes.img}
        />
        <Text mt={15} align="center" size="sm" weight={500}>
          {tecnology.name}
        </Text>
      </Paper>
    </Box>
  );
}
