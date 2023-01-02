import { Carousel } from "@mantine/carousel";
import useProjects from "../database/useProjects";
import ProjectSlideItem from "./ProjectSlideItem";

export const CAROUSEL_HEIGHT = 400;
export const CAROUSEL_WIDTH = 920;

export const SLIDE_STYLES = {
  indicator: {
    width: 12,
    height: 4,
    transition: "width 250ms ease",

    "&[data-active]": {
      width: 40,
    },
  },
  control: {
    background: "transparent !important",
    border: "none",
    color: "#FFF",
  },
  root: {
    svg: {
      width: 30,
      height: 30,
    },
  },
};

export default function SlideProject() {
  const { recentProjects } = useProjects();

  return (
    <Carousel
      sx={{ maxWidth: CAROUSEL_WIDTH, height: CAROUSEL_HEIGHT }}
      mx="auto"
      withIndicators
      height={CAROUSEL_HEIGHT}
      styles={SLIDE_STYLES}
    >
      {recentProjects.map((project, key) => (
        <Carousel.Slide key={key}>
          <ProjectSlideItem {...project} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
