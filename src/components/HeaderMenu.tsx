import { useMemo } from "react";
import {
  createStyles,
  Text,
  Header,
  ActionIcon,
  Group,
  useMantineColorScheme,
  Divider,
  Center,
  Drawer,
  Burger,
  Box,
  Collapse,
  ScrollArea,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import {
  // IconNotification,
  // IconCode,
  // IconBook,
  // IconChartPie3,
  // IconFingerprint,
  // IconCoin,
  // IconChevronDown,
  IconSun,
  IconMoonStars,
} from "@tabler/icons";
import { useRouter } from "next/router";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("sm")]: {
      height: 42,
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },
  linkActive: {
    [theme.fn.largerThan("sm")]: {
      // backgroundImage: theme.fn.gradient({ from: "blue", to: "cyan" }),
      borderBottom: "1px solid " + theme.colors.blue[6],
    },
    [theme.fn.smallerThan("sm")]: {
      borderLeft: "3px solid " + theme.colors.blue[6],
    },
    pointerEvents: "none",
    userSelect: "none",
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
  header: {
    zIndex: 105,
  },
  theme: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.yellow[4]
        : theme.colors.blue[6],
  },
}));

interface HeaderMegaMenuProps {
  drawerOpened: boolean;
  toggleDrawer: () => void;
}

export const links = [
  { label: "Página Inicial", href: "/" },
  { label: "Sobre", href: "/about" },
  { label: "Jornada", href: "/journey" },
  { label: "Projetos", href: "/projects" },
  { label: "Contacto", href: "/contact" },
];

export function HeaderMegaMenu({}: HeaderMegaMenuProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { classes, theme } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const router = useRouter();

  const Links = useMemo(() => {
    return links.map((link) => {
      const isActive = router.pathname === link.href;
      return (
        <Link href={link.href} key={link.href}>
          <a
            className={classes.link + ` ${isActive ? classes.linkActive : ""}`}
          >
            {link.label}
          </a>
        </Link>
      );
    });
  }, [router.pathname, classes]);

  console.log(router);

  return (
    <Box>
      <Header height={60} px="md" className={classes.header}>
        <Group position="apart" sx={{ height: "100%" }}>
          {/* <Image
            src={`/logo-${logoType}.png`}
            alt="logo"
            width={40}
            height={40}
            style={{ zoom: 1.3 }}
          /> */}
          <div />

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            {Links}
          </Group>

          <Group className={classes.hiddenMobile}>
            <LanguageToggle />
            <ActionIcon
              onClick={() => toggleColorScheme()}
              size="lg"
              className={classes.theme}
            >
              {colorScheme === "dark" ? (
                <IconSun size={20} />
              ) : (
                <IconMoonStars size={20} />
              )}
            </ActionIcon>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        // title={<Logo />}
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          {Links}

          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
            }}
            pb="xl"
            px="md"
          >
            <ThemeToggle />
            <LanguageToggle />
          </Box>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
