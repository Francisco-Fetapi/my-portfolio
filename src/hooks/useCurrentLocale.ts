import { useRouter } from "next/router";
import { ILocales } from "../helpers/dateDistance";

export default function useCurrentLocale() {
  const router = useRouter();
  const locale = router.locale as ILocales;
  return { locale };
}
