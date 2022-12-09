import { useState } from "react";
import { IProject } from "../database/me";
import { createStyles } from "@mantine/core";
import { CAROUSEL_HEIGHT, CAROUSEL_WIDTH } from "./SlideProjects";

interface ProjectSlideItemProps extends IProject {}

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    backgroundSize: "contain",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  },
}));

export default function ProjectSlideItem({
  ...project
}: ProjectSlideItemProps) {
  const { classes } = useStyles();
  const image = project.images[0];

  return (
    <div
      className={classes.container}
      style={{
        background: `url(/projects_img/${image})`,
      }}
    ></div>
  );
}
