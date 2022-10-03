import React from "react";
import { Provider } from "react-redux";
import store from "../store/App.store";

interface AppStoreProps {
  children: React.ReactNode;
}

export default function AppStore({ children }: AppStoreProps) {
  return <Provider store={store}>{children}</Provider>;
}
