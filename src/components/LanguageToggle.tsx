import { createStyles, Button, Menu, Group } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import setLanguage from "next-translate/setLanguage";
import { persistLocaleCookie } from "../helpers/persistLocaleCookie";
import { ILocales } from "../helpers/dateDistance";

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
}));

function ImgLanguage({ locale }: { locale?: string }) {
  const { defaultLocale } = useRouter();
  const extensions = {
    pt: "svg",
    en: "jpg",
  };
  return (
    <Image
      src={`/${locale || defaultLocale}-language.${
        extensions[locale as keyof typeof extensions]
      }`}
      alt="Language"
      width={20}
      height={15}
    />
  );
}

export function LanguageToggle() {
  const { classes } = useStyles();

  const router = useRouter();
  const { locales, locale: currentLocale, defaultLocale } = router;
  const { t } = useTranslation("common");

  async function changeLanguage(locale: ILocales) {
    await setLanguage(locale);
    persistLocaleCookie(locale);
  }

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
              icon={<ImgLanguage locale={locale} />}
              disabled={locale === currentLocale}
              onClick={() => changeLanguage(locale as ILocales)}
              key={locale}
            >
              {t(locale)}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
}
