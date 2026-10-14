"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";

const localeLabels: Record<string, string> = {
  en: "English",
  ar: "العربية",
  fr: "Français",
};

export default function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    router.replace(pathname, { locale: e.target.value });
  }

  return (
    <div className="flex items-center">
      <ChevronDown size={16} />

    <select
      value={locale}
      onChange={handleChange}
      aria-label="Select language"
      className="nav-lang-select"
    >
      {routing.locales.map((l) => (
        <option key={l} value={l} lang={l}>
          {localeLabels[l] ?? l}
        </option>
      ))}
    </select>
    </div>
  );
}
