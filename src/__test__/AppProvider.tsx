import { Provider, useDispatch } from "react-redux";
import { ReactNode, useEffect } from "react";
import store from "./App.store";
import { resetAllState } from "../store/App.store";
import { ColorSchemeProvider } from "@mantine/core";

interface AppSetupProps {
  children: ReactNode;
}

// for testing
export function AppProvider({ children }: AppSetupProps) {
  return (
    <Provider store={store}>
      <ColorSchemeProvider colorScheme="dark" toggleColorScheme={() => null}>
        <ComponentWrapper>{children}</ComponentWrapper>
      </ColorSchemeProvider>
    </Provider>
  );
}

interface ComponentWrapperProps {
  children: ReactNode;
}

function ComponentWrapper({ children }: ComponentWrapperProps) {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(resetAllState(true));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children]);
  return <div>{children}</div>;
}
