import { ILocales } from "./dateDistance";

export default function getMonth(date: Date, locale: ILocales = "en") {
  const weekDay = date.toLocaleString(locale, { month: "long" });

  return weekDay;
}
