import React, { useEffect } from "react";
import { MantineProvider, useMantineColorScheme } from "@mantine/core";
import { GlobalStyles } from "../styles/GlobalStyles";

interface MantineProviderInterface {
  Page: React.ReactNode;
}

export default function AppProvider({ Page }: MantineProviderInterface) {
  const mantine = useMantineColorScheme();
  const colorScheme = mantine.colorScheme;

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        fontFamily: "Roboto, sans-serif",
        colorScheme,
        black: "#333",
        // white: "#F4F4F4",
      }}
    >
      <GlobalStyles mode={colorScheme} />
      {Page}
    </MantineProvider>
  );
}
