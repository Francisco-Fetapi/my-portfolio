import { configureStore } from "@reduxjs/toolkit";
import { App, middlewares, sliceCreator } from "../store/App.store";

const initialState: App = {
  darkMode: false,
};

const app = sliceCreator(initialState);

export const store = configureStore({
  reducer: {
    app: app.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewares),
});

export default store;
