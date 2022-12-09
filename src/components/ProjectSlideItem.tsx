import { useState } from "react";
import { IProject } from "../database/me";
import { createStyles } from "@mantine/core";
import { CAROUSEL_HEIGHT, CAROUSEL_WIDTH } from "./SlideProjects";

interface ProjectSlideItemProps extends IProject {}

const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
  },
  container2: {
    width: "100%",
    height: "100%",
    // background: "linear-gradient(to top, rgba(0,0,0,.95) 60%,transparent)",
    // background: theme.fn.linearGradient(45, "black", "transparent"),
    boxShadow: "inset 50px -230px 50px rgba(0,0,0,.90)",
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
        backgroundImage: `url(/projects_img/${image})`,
      }}
    >
      <div className={classes.container2}></div>
    </div>
  );
}
