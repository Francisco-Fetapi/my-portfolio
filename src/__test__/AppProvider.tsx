import store from "./App.store";
import { Provider, useDispatch } from "react-redux";
import { ReactNode, useEffect } from "react";
import { resetAllState } from "../store/App.store";

interface AppSetupProps {
  children: ReactNode;
}

// for testing
export function AppSetup({ children }: AppSetupProps) {
  return (
    <Provider store={store}>
      <ComponentWrapper>{children}</ComponentWrapper>
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
  }, [children]);
  return <div>{children}</div>;
}
