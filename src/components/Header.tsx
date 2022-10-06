import {
  Button,
  Box,
  useMantineColorScheme,
  Text,
  Center,
} from "@mantine/core";
import useTranslation from "next-translate/useTranslation";

export default function Header() {
  const { toggleColorScheme } = useMantineColorScheme();
  const { t } = useTranslation("common");

  return (
    <Center
      sx={{
        flexDirection: "column",
      }}
    >
      <Box mb={14}>
        <Text size={24}>NextJs + Mantine Boilerplate</Text>
      </Box>
      <Button size="xl" onClick={() => toggleColorScheme()}>
        {t("change_theme")}
      </Button>
    </Center>
  );
}
