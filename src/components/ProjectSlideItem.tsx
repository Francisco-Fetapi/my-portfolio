import { IProject } from "../database/me";
import { ActionIcon, createStyles, Space, Group, Text } from "@mantine/core";
import ProjectStatus from "./ProjectStatus";
import { IconShare, IconBrandGithub, IconExternalLink } from "@tabler/icons";

interface ProjectSlideItemProps extends IProject {}
interface ButtonActionsProps extends IProject {}

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
    // boxShadow: "inset 50px -230px 50px rgba(255,255,255,.90)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    paddingBottom: 30,
    position: "relative",
    "*": {
      color: theme.white,
      userSelect: "none",
    },
    "& > div": {
      padding: 10,
      maxWidth: 600,

      "h1,p": {
        margin: 0,
        padding: 0,
      },
      h1: {
        fontSize: theme.fontSizes.lg,
      },
      p: {
        opacity: 0.8,
        fontSize: theme.fontSizes.xs,
      },
    },
  },
  grid2Between: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actionIcon: {
    ":hover": {
      background: "transparent",
    },
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
      <div className={classes.container2}>
        <ButtonActions {...project} />
        <div>
          <div className={classes.grid2Between}>
            <h1>{project.name}</h1>
            <ProjectStatus status={project.status} />
          </div>
          <Text
            sx={{
              opacity: 0.7,
            }}
          >
            <Group>
              {project.tags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </Group>
          </Text>
          <Space mt="sm" />
          <Text component="p" lineClamp={3}>
            {project.description?.toString().repeat(10)}
          </Text>
        </div>
      </div>
    </div>
  );
}

function ButtonActions({ links }: ButtonActionsProps) {
  const { classes } = useStyles();
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
    <Group
      sx={{
        flexDirection: "column",
        position: "absolute",
        top: 5,
        left: -5,
      }}
      spacing={15}
      mr={0}
    >
      <a {...githubLink}>
        <ActionIcon size="sm" className={classes.actionIcon}>
          <IconBrandGithub size={12} />
        </ActionIcon>
      </a>
      <a {...previewLink}>
        <ActionIcon size="sm" className={classes.actionIcon}>
          <IconExternalLink size={12} />
        </ActionIcon>
      </a>
      <ActionIcon size="sm" className={classes.actionIcon}>
        <IconShare size={12} />
      </ActionIcon>
    </Group>
  );
}
