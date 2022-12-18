import { Carousel } from "@mantine/carousel";
import React from "react";
import {
  PROJECT_CARD_MAX_WIDTH,
  PROJECT_IMAGE_CARD_IMAGE_HEIGHT,
} from "./ProjectCard";
import { SLIDE_STYLES } from "./SlideProjects";

// const CAROUSEL_WIDTH = PROJECT_CARD_MAX_WIDTH;
// const CAROUSEL_HEIGHT = PROJECT_IMAGE_CARD_IMAGE_HEIGHT;

export default function SlideProjectImage({ children }: any) {
  return (
    <Carousel
      sx={{
        maxWidth: PROJECT_CARD_MAX_WIDTH,
        height: PROJECT_IMAGE_CARD_IMAGE_HEIGHT,
      }}
      mx="auto"
      withIndicators
      height={PROJECT_IMAGE_CARD_IMAGE_HEIGHT}
      styles={SLIDE_STYLES}
    >
      {children}
    </Carousel>
  );
}
