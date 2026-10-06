"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export default function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = locale === "en" ? "ar" : "en";
  const label = locale === "en" ? "العربية" : "English";

  function handleSwitch() {
    router.replace(pathname, { locale: switchTo });
  }

  return (
    <button
      onClick={handleSwitch}
      lang={switchTo}
      aria-label={`Switch to ${switchTo === "ar" ? "Arabic" : "English"}`}
      className="nav-lang-btn"
    >
      {label}
    </button>
  );
}
