import useStatePersist from "../hooks/useStatePersist";
import { App, THEME_KEY_IN_LOCALSTORAGE } from "./App.store";

export function stateReseted(initialState: App): App {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const darkMode = useStatePersist<boolean>(THEME_KEY_IN_LOCALSTORAGE).get();
  return { ...initialState, darkMode };
}
