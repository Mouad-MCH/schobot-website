import type { Metadata } from "next";
import { locale } from "next/root-params";
import { getTranslations } from "next-intl/server";
import AboutPage from "@/components/about/AboutPage";

export async function generateMetadata(): Promise<Metadata> {
  const loc = await locale();
  const t = await getTranslations({ locale: loc, namespace: "Meta" });
  return { title: t("aboutTitle"), description: t("aboutDescription") };
}

export default function Page() {
  return <AboutPage />;
}
