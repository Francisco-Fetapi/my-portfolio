import React, { useEffect } from "react";
import { MantineProvider } from "@mantine/core";
import { useSelector } from "react-redux";
import { selectTheme } from "../store/App.selectors";
import { GlobalStyles } from "../styles/GlobalStyles";
import useStatePersist from "../hooks/useStatePersist";
import { setTheme, THEME_KEY_IN_LOCALSTORAGE } from "../store/App.store";
import { useDispatch } from "react-redux";

interface MantineProviderInterface {
  Page: React.ReactNode;
}

export default function AppProvider({ Page }: MantineProviderInterface) {
  const isDarkOnLocalStorage = useStatePersist<boolean>(
    THEME_KEY_IN_LOCALSTORAGE
  );
  const isDark = useSelector(selectTheme);
  const dispatch = useDispatch();
  const mode = isDark ? "dark" : "light";

  useEffect(() => {
    dispatch(setTheme(isDarkOnLocalStorage.get()));
  }, []);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        fontFamily: "Roboto, sans-serif",
        colorScheme: mode,
      }}
    >
      <GlobalStyles mode={mode} />
      {Page}
    </MantineProvider>
  );
}
