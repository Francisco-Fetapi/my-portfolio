import {
  Card,
  Anchor,
  Box,
  // Image,
  Text,
  ActionIcon,
  Group,
  Center,
  createStyles,
} from "@mantine/core";
import { IProject } from "../database/useProjects";

import { IconBrandGithub, IconExternalLink } from "@tabler/icons";
import dateDistance from "../helpers/dateDistance";
import useCurrentLocale from "../hooks/useCurrentLocale";
import ProjectStatus from "./ProjectStatus";
import SlideProjectImage from "./SlideProjectImage";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

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
  const router = useRouter();
  const tagQuery = router.query.tag as string | null;

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
                height={PROJECT_IMAGE_CARD_IMAGE_HEIGHT * 1.7}
                width={PROJECT_CARD_MAX_WIDTH}
                placeholder="blur"
                blurDataURL={`/projects_img/${image}`}
                quality={80}
                layout="responsive"
                alt={name}
                className="image"
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
        {tags.map((tag) => {
          const currentTag = tag.toLowerCase();

          if (currentTag === tagQuery) {
            return (
              <Text size="xs" underline>
                {tag}
              </Text>
            );
          }

          return (
            <Link href={`/projects/?tag=${currentTag}`} key={tag} passHref>
              <Anchor color="dimmed" size="xs">
                {tag}
              </Anchor>
            </Link>
          );
        })}
      </Group>
      <br />

      <Text size="sm" lineClamp={3}>
        {description}
      </Text>

      <div style={{ flexGrow: 1 }} />
      <Group position="apart" className={classes.footer}>
        <Center>
          <Text size="xs" color="dimmed">
            De {dateDistance(createdAt, locale)}
          </Text>
          {/* <Text size="xs" color="dimmed">
            Desenvolvido aos <b>{createdAt.toLocaleDateString()}</b>
          </Text> */}
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
        </Group>
      </Group>
    </Card>
  );
}
