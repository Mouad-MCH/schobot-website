import { getRequestConfig } from "next-intl/server";
import { locale } from "next/root-params";
import { routing } from "./routing";

export default getRequestConfig(async () => {
  const loc = await locale();

  const resolvedLocale = routing.locales.includes(
    loc as (typeof routing.locales)[number]
  )
    ? loc
    : routing.defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../../messages/${resolvedLocale}.json`)).default,
  };
});
