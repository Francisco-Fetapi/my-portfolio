import React from "react";
import {
  Text,
  Box,
  createStyles,
  Paper,
  PaperProps,
  Popover,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

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
  const [opened, { close, open, toggle }] = useDisclosure(false);

  return (
    <Popover
      width={300}
      // position="bottom"
      withArrow
      shadow="lg"
      opened={opened}
    >
      <Popover.Target>
        <Paper
          shadow={"0 6px 14px 1px rgb(0 0 0 / 10%);"}
          className={classes.container}
          {...paperProps}
          onMouseEnter={open}
          onMouseLeave={close}
          onClick={toggle}
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
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
          This popover is shown when user hovers the target element
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
