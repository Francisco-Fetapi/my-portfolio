import { Carousel } from "@mantine/carousel";
import { recentProjects } from "../database/me";
import ProjectSlideItem from "./ProjectSlideItem";

export const CAROUSEL_HEIGHT = 400;
export const CAROUSEL_WIDTH = 920;

export default function SlideProject() {
  return (
    <Carousel
      sx={{ maxWidth: CAROUSEL_WIDTH, height: CAROUSEL_HEIGHT }}
      mx="auto"
      withIndicators
      height={CAROUSEL_HEIGHT}
    >
      {recentProjects.map((project, key) => (
        <Carousel.Slide key={key}>
          <ProjectSlideItem {...project} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
