import React from "react";
import { Badge, MantineGradient } from "@mantine/core";
import { IProjectStatus } from "../database/useProjects";
import useTranslation from "next-translate/useTranslation";

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
  const { t } = useTranslation("common");

  return (
    <Badge variant="gradient" gradient={statusChoosed}>
      {t(status)}
    </Badge>
  );
}
