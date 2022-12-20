import {
  Card,
  Box,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  createStyles,
} from "@mantine/core";
import { IProject } from "../database/useProjects";

import { IconShare, IconBrandGithub, IconExternalLink } from "@tabler/icons";
import dateDistance from "../helpers/dateDistance";
import useCurrentLocale from "../hooks/useCurrentLocale";
import ProjectStatus from "./ProjectStatus";
import SlideProjectImage from "./SlideProjectImage";
import { Carousel } from "@mantine/carousel";

export const PROJECT_CARD_MAX_WIDTH = 380;
export const PROJECT_CARD_HEIGHT = 480;
export const PROJECT_IMAGE_CARD_IMAGE_HEIGHT = 250;

const useStyles = createStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    maxWidth: PROJECT_CARD_MAX_WIDTH,
    minHeight: PROJECT_CARD_HEIGHT,
    margin: "20px 10px",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  status: {
    position: "absolute",
    top: theme.spacing.xs,
    right: theme.spacing.xs + 2,
    pointerEvents: "none",
  },

  title: {
    display: "block",
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs / 2,
  },

  action: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));

interface ArticleCardProps extends IProject {}

export function ProjectCard({
  className,
  images,
  links,
  name,
  description,
  status,
  tags,
  createdAt,
  ...others
}: ArticleCardProps &
  Omit<React.ComponentPropsWithoutRef<"div">, keyof ArticleCardProps>) {
  const { classes, cx, theme } = useStyles();
  const { locale } = useCurrentLocale();

  const githubLink = {
    href: links.github,
    target: "_blank",
    rel: "noopener noreferrer",
  };
  const previewLink = {
    href: links.preview,
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <Card
      withBorder
      radius="md"
      className={cx(classes.card, className)}
      {...others}
    >
      <Card.Section>
        <SlideProjectImage>
          {images.map((image) => (
            <Carousel.Slide key={image}>
              <Image
                src={`/projects_img/${image}`}
                height={PROJECT_IMAGE_CARD_IMAGE_HEIGHT * 1.5}
                width="100%"
                alt={name}
                sx={{
                  objectFit: "cover",
                }}
              />
            </Carousel.Slide>
          ))}
        </SlideProjectImage>
      </Card.Section>

      <Box className={classes.status}>
        <ProjectStatus status={status} />
      </Box>

      <Text
        className={classes.title}
        weight={900}
        component="a"
        {...githubLink}
        transform="uppercase"
      >
        {name}
      </Text>
      <Group mt={1}>
        {tags.map((tag) => (
          <Text color="dimmed" size="xs" key={tag}>
            {tag}
          </Text>
        ))}
      </Group>
      <br />

      <Text size="sm" color="dimmed" lineClamp={3}>
        {description}
      </Text>

      <div style={{ flexGrow: 1 }} />
      <Group position="apart" className={classes.footer}>
        <Center>
          <Text size="xs" color="dimmed">
            {dateDistance(createdAt, locale)}
          </Text>
        </Center>

        <Group spacing={8} mr={0}>
          <a {...githubLink}>
            <ActionIcon className={classes.action} disabled={!links.github}>
              <IconBrandGithub size={16} />
            </ActionIcon>
          </a>
          <a {...previewLink}>
            <ActionIcon className={classes.action} disabled={!links.preview}>
              <IconExternalLink size={16} />
            </ActionIcon>
          </a>
          {/* <ActionIcon className={classes.action}>
            <IconShare size={16} />
          </ActionIcon> */}
        </Group>
      </Group>
    </Card>
  );
}
