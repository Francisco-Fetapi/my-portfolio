import React from "react";
import { MantineProvider } from "@mantine/core";
import { useSelector } from "react-redux";
import { selectTheme } from "../store/App.selectors";
import { GlobalStyles } from "../styles/GlobalStyles";

interface MantineProviderInterface {
  Page: React.ReactNode;
}

export default function AppProvider({ Page }: MantineProviderInterface) {
  const isDark = useSelector(selectTheme);
  const mode = isDark ? "dark" : "light";

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: mode,
      }}
    >
      <GlobalStyles mode={mode} />
      {Page}
    </MantineProvider>
  );
}
