import { createStyles, Button, Menu, Group, ActionIcon } from "@mantine/core";
import {
  IconTrash,
  IconBookmark,
  IconCalendar,
  IconChevronDown,
} from "@tabler/icons";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  button: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    background: "transparent !important",
    border:
      "1px solid " + theme.colorScheme === "light"
        ? theme.colors.dark[7]
        : theme.white,
    color: theme.colorScheme === "light" ? theme.colors.dark[7] : theme.white,
  },

  menuControl: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    border: 0,
    borderLeft: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }`,
  },
}));

function ImgLanguage({ locale }: { locale?: string }) {
  const { defaultLocale } = useRouter();
  return (
    <Image
      src={`/${locale || defaultLocale}-language.png`}
      alt="Language"
      width={20}
      height={15}
    />
  );
}

export function LanguageToggle() {
  const { classes, theme } = useStyles();
  const { locales, locale: currentLocale, defaultLocale } = useRouter();
  const { t } = useTranslation("common");
  const menuIconColor =
    theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 5 : 6];

  return (
    <Group noWrap spacing={0}>
      <Menu transition="pop" position="bottom-end">
        <Menu.Target>
          <Button
            leftIcon={<ImgLanguage locale={currentLocale} />}
            rightIcon={<IconChevronDown size={16} stroke={1.5} />}
            className={classes.button}
          >
            {t(currentLocale || defaultLocale!)}
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          {locales?.map((locale) => (
            <Menu.Item
              key={locale}
              icon={<ImgLanguage locale={locale} />}
              disabled={locale === currentLocale}
            >
              {t(locale)}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
