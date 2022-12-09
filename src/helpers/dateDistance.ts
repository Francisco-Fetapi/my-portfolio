import ptLocale from "date-fns/locale/pt";
import enLocale from "date-fns/locale/en-US";
import { formatDistance } from "date-fns";

interface ILanguages<T = any> {
  pt: T;
  en: T;
}

export type ILocales = keyof ILanguages;

const languages: ILanguages<Locale> = {
  pt: ptLocale,
  en: enLocale,
};

const prefixes: ILanguages<string> = {
  pt: "Há",
  en: "About",
};

export default function dateDistance(date: Date, language: ILocales) {
  try {
    const distance = formatDistance(new Date(), date, {
      locale: languages[language],
    });
    return `${prefixes[language]} ${distance}`;
  } catch (e: any) {
    return "";
  }
}
