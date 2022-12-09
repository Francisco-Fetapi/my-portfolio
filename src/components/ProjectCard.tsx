import {
  Card,
  Image,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  createStyles,
} from "@mantine/core";
import { IProject } from "../database/me";

import {
  IconShare,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons";
import dateDistance from "../helpers/dateDistance";
import useCurrentLocale from "../hooks/useCurrentLocale";

const useStyles = createStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    width: "100%",
    maxWidth: 380,
    height: 480,
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
        <Image src={`/projects_img/${images[0]}`} height={250} alt={name} />
      </Card.Section>

      <Badge
        className={classes.status}
        variant="gradient"
        gradient={{ from: "blue", to: "cyan" }}
      >
        {status}
      </Badge>

      <Text
        className={classes.title}
        weight={500}
        component="a"
        {...githubLink}
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
            <ActionIcon className={classes.action}>
              <IconBrandGithub size={16} />
            </ActionIcon>
          </a>
          <a {...previewLink}>
            <ActionIcon className={classes.action}>
              <IconExternalLink size={16} />
            </ActionIcon>
          </a>
          <ActionIcon className={classes.action}>
            <IconShare size={16} />
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}
