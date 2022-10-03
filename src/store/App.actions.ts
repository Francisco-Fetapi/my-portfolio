import {
  PayloadAction,
  SliceCaseReducers,
  ValidateSliceCaseReducers,
} from "@reduxjs/toolkit";
import useStatePersist from "../hooks/useStatePersist";
import { stateReseted } from "./utils";
import { initialState, THEME_KEY_IN_LOCALSTORAGE, App } from "./App.store";

export const reducers: ValidateSliceCaseReducers<
  App,
  SliceCaseReducers<App>
> = {
  toggleTheme(state) {
    state.darkMode = !state.darkMode;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { save } = useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE);
    save(state.darkMode);
  },
  setTheme(state, action: PayloadAction<boolean>) {
    state.darkMode = action.payload;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { save } = useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE);
    save(state.darkMode);
  },
  resetAllState(state, action: PayloadAction<boolean>) {
    if (action.payload) {
      Object.assign(state, initialState);
      return;
    }
    Object.assign(state, stateReseted(initialState));
  },
};
