import { Box, Button, Text } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";

export default function Footer() {
  const { locales } = useRouter();
  const { t } = useTranslation("common");
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      component="footer"
    >
      <Box mb={2}>
        <Text variant="text" size="lg" align="center">
          {t("change_language")}
        </Text>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {locales?.map((locale) => (
          <li key={locale} style={{ display: "inline-block", padding: "10px" }}>
            <Link href="/" locale={locale} style={{ color: "inherit" }}>
              <Button variant="default">{t(locale)}</Button>
            </Link>
          </li>
        ))}
      </Box>
    </Box>
  );
}
