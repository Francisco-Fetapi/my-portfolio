import { createSlice } from "@reduxjs/toolkit";
import useStatePersist from "../hooks/useStatePersist";
import { reducers } from "./App.actions";
import { App, THEME_KEY_IN_LOCALSTORAGE } from "./App.store";

export const middlewares = {
  serializableCheck: {
    // Ignore these paths in the state
    ignoredPaths: [],
  },
};

export function stateReseted(initialState: App): App {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const darkMode = useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE).get();
  return { ...initialState, darkMode };
}

export function sliceCreator(initialState: App) {
  return createSlice({
    name: "app",
    initialState,
    reducers,
  });
}
