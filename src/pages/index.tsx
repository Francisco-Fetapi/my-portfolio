import { Button, Group, Text, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function IndexPage() {
  const { toggleColorScheme } = useMantineColorScheme();
  const { locales } = useRouter();
  const { t } = useTranslation();

  return (
    <Group mt={50} position="center">
      <Text variant="gradient" color="green">
        {t("common:greeting")}
      </Text>
      <Button size="xl" onClick={() => toggleColorScheme()}>
        {t("common:change_theme")}
      </Button>
      <ul>
        {locales?.map((locale) => (
          <li key={locale}>
            <Link href="/" locale={locale}>
              {locale}
            </Link>
          </li>
        ))}
      </ul>
    </Group>
  );
}
