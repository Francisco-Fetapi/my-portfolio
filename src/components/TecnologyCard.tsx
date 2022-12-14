import React from "react";
import {
  Text,
  Box,
  createStyles,
  Paper,
  PaperProps,
  Popover,
  Grid,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconInfoCircle } from "@tabler/icons";
import getShortText from "../helpers/getShortText";
import { ListTecnologyName } from "../database/useTecnologies";

export interface ITecnology {
  name: ListTecnologyName;
  image: string;
  startedAt: Date;
  description: React.ReactNode;
}

interface TecnologyCardProps extends PaperProps {
  tecnology: ITecnology;
  position: number;
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
      transition: "all .2s linear",
      transform: "scale(1.02)",
    },
    cursor: "pointer",
  },
  img: {
    objectFit: "contain",
  },
}));

export default function TecnologyCard({
  tecnology,
  position,
  ...paperProps
}: TecnologyCardProps) {
  const { classes } = useStyles();
  const [opened, { close, open, toggle }] = useDisclosure(false);
  const animations = ["up", "down", "left", "right"];
  let selectedAnimation =
    animations[Math.round(Math.random() * animations.length)];
  if (!selectedAnimation) {
    selectedAnimation = animations[0];
  }

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
          data-aos={`flip-${selectedAnimation}`}
          data-aos-delay={String(position * 300)}
          data-aos-duration="500"
          data-aos-once="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tecnology.image}
            alt={tecnology.name}
            width={45}
            height={45}
            className={classes.img}
          />
          <Text
            mt={15}
            align="center"
            size="sm"
            weight={500}
            title={tecnology.name}
          >
            {getShortText(tecnology.name, 2)}
          </Text>
        </Paper>
      </Popover.Target>
      <Popover.Dropdown>
        <Grid>
          <Grid.Col span={1}>
            <IconInfoCircle size={20} />
          </Grid.Col>
          <Grid.Col span={11}>
            <Box ml={5}>
              <Text size="sm">{tecnology.description}</Text>
            </Box>
          </Grid.Col>
        </Grid>
      </Popover.Dropdown>
    </Popover>
  );
}
