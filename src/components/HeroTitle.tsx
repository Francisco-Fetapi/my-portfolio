import { createStyles, Container, Text, Button, Group } from "@mantine/core";
import { GithubIcon } from "@mantine/ds";
import { IconDownload } from "@tabler/icons";
import useMe from "../database/useMe";

const BREAKPOINT = "@media (max-width: 755px)";

export const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    // backgroundColor:
    //   theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: "relative",
    paddingTop: 50,
    // paddingBottom: 80,

    [BREAKPOINT]: {
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 48,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
}));

export function HeroTitle() {
  const { classes } = useStyles();
  const { me } = useMe();

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <Text color="dimmed" size="md" mb={20} italic weight={300}>
          Olá, meu nome é
        </Text>
        <h1 className={classes.title}>
          <TextWithGradient>{me.name}</TextWithGradient> <br />
          {me.professional}
        </h1>

        <Text className={classes.description} color="dimmed">
          Apaixonado por desenvolvimento de software. Atualmente Crio sistemas
          para a internet atuando como desenvolvedor{" "}
          <TextWithGradient>full-stack</TextWithGradient>. A minha stack é
          principalmente voltada à{" "}
          <TextWithGradient> JavaScript/TypeScript</TextWithGradient>
        </Text>

        <Group className={classes.controls}>
          <Button
            component="a"
            size="lg"
            className={classes.control}
            variant="gradient"
            href={me.downloadCV}
            target="__blank"
            gradient={{ from: "blue", to: "cyan" }}
            leftIcon={<IconDownload size={20} />}
          >
            Baixar CV
          </Button>

          <Button
            component="a"
            href={me.github}
            target="__blank"
            size="lg"
            variant="default"
            className={classes.control}
            leftIcon={<GithubIcon size={20} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}

export function TextWithGradient({ children }: any) {
  return (
    <Text
      component="span"
      variant="gradient"
      gradient={{ from: "blue", to: "cyan" }}
      inherit
    >
      {children}
    </Text>
  );
}
