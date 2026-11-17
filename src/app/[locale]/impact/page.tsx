import type { Metadata } from "next";
import { locale } from "next/root-params";
import { getTranslations } from "next-intl/server";
import ContentPage from "@/components/page/ContentPage";

export async function generateMetadata(): Promise<Metadata> {
  const loc = await locale();
  const t = await getTranslations({ locale: loc, namespace: "Pages.impact" });
  return { title: t("seoTitle"), description: t("intro") };
}

export default function Page() {
  return <ContentPage pageKey="impact" />;
}
