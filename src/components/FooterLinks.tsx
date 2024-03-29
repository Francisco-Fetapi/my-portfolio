import {
  createStyles,
  Anchor,
  Text,
  Container,
  ActionIcon,
  Group,
  Center,
} from "@mantine/core";

import { MantineLogo } from "@mantine/ds";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import useContacts from "../database/useContacts";
import useMe from "../database/useMe";
import ImageLogo from "./ImageLogo";

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    paddingTop: theme.spacing.xl * 2,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; href: string }[];
  }[];
}

export function FooterLinks({ data }: FooterLinksProps) {
  const { classes } = useStyles();
  const { me } = useMe();
  const { contacts } = useContacts();
  const { t } = useTranslation("common");

  const linksSocial = contacts.filter((contact) => {
    const linksToShow = ["Whatsapp", t("telephone"), "Calendly"];
    return linksToShow.includes(contact.label);
  });

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Link key={index} href={link.href} passHref>
        <Text<"a"> className={classes.link} component="a" href={link.href}>
          {link.label}
        </Text>
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <ImageLogo />
          <Text
            size="xs"
            mt={10}
            color="dimmed"
            className={classes.description}
          >
            {t("projected_by")} <i>{me.name}</i>
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © {new Date().getFullYear()} - {t("all_rights_reserved")}
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          {linksSocial.map(({ Icon, ...social }) => (
            <a href={social.href} target="__blank" key={social.href}>
              <ActionIcon size="lg">
                <Icon size={18} stroke={1.5} />
              </ActionIcon>
            </a>
          ))}
        </Group>
      </Container>
    </footer>
  );
}
