import { createStyles, Container, Text, Button, Group } from "@mantine/core";
import { GithubIcon } from "@mantine/ds";
import { IconDownload } from "@tabler/icons";
import useTranslation from "next-translate/useTranslation";
import useMe from "../database/useMe";
import ExternalLink from "./ExternalLink";

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
    // fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 40,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 35,
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
  const { t } = useTranslation("home");

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <Text
          color="dimmed"
          size="md"
          mb={20}
          italic
          weight={300}
          data-aos="fade-down"
        >
          {t("hello_my_name_is")}
        </Text>
        <h1
          className={classes.title}
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <TextWithGradient>{me.name}</TextWithGradient> <br />
          {me.professional}
        </h1>

        <Text
          className={classes.description}
          color="dimmed"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="700"
        >
          Apaixonado por desenvolvimento de software. Atualmente crio sistemas
          para a internet atuando como desenvolvedor{" "}
          <ExternalLink reference="fullStack">full-stack</ExternalLink>. A minha
          stack é principalmente voltada à{" "}
          <span>
            <ExternalLink reference="javascript">JavaScript</ExternalLink>/
            <ExternalLink reference="typescript">TypeScript</ExternalLink>
          </span>
          .
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
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1000"
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
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="1000"
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
