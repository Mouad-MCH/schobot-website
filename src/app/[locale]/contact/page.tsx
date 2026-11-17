import type { Metadata } from "next";
import { locale } from "next/root-params";
import { getTranslations } from "next-intl/server";
import PageHero from "@/components/page/PageHero";
import ContactChannels from "@/components/home/ContactChannels";
import ContactForm from "@/components/page/ContactForm";

export async function generateMetadata(): Promise<Metadata> {
  const loc = await locale();
  const t = await getTranslations({ locale: loc, namespace: "Pages.contact" });
  return { title: t("seoTitle"), description: t("intro") };
}

export default async function Page() {
  const t = await getTranslations("Pages.contact");
  return (
    <main>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} intro={t("intro")} />
      <ContactChannels hideHeading />
      <ContactForm />
    </main>
  );
}
