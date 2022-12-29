import { setCookie } from "nookies";
import { ILocales } from "./dateDistance";

export function persistLocaleCookie(locale: ILocales) {
  if (locale) {
    setCookie(null, "NEXT_LOCALE", locale, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  }
}
