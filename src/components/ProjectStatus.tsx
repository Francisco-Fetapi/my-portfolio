import React from "react";
import { Badge, MantineGradient } from "@mantine/core";
import { IProjectStatus } from "../database/useProjects";

interface ProjectStatusProps {
  status: keyof IProjectStatus;
}

const listStatus: IProjectStatus<MantineGradient> = {
  finished: {
    from: "green",
    to: "cyan",
  },
  building: {
    from: "blue",
    to: "cyan",
  },
  death: {
    from: "red",
    to: "red",
  },
};

export default function ProjectStatus({ status }: ProjectStatusProps) {
  const statusChoosed = listStatus[status];

  return (
    <Badge variant="gradient" gradient={statusChoosed}>
      {status}
    </Badge>
  );
}
