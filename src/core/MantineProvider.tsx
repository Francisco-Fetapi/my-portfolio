import React from "react";
import { MantineProvider as MMantineProvider } from "@mantine/core";
import { useSelector } from "react-redux";
import { selectTheme } from "../store/App.selectors";

interface MantineProviderInterface {
  Page: React.ReactNode;
}

export default function MantineProvider({ Page }: MantineProviderInterface) {
  const isDark = useSelector(selectTheme);

  return (
    <MMantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: isDark ? "dark" : "light",
      }}
    >
      {Page}
    </MMantineProvider>
  );
}
