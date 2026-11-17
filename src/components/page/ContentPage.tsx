import { getTranslations } from "next-intl/server";
import PageHero from "./PageHero";
import PageSections, { type PageSection } from "./PageSections";
import { contentPages, type ContentPageKey } from "@/data/pages";

export default async function ContentPage({ pageKey }: { pageKey: ContentPageKey }) {
  const t = await getTranslations(`Pages.${pageKey}`);
  const common = await getTranslations("PageCommon");
  const labels = t.raw("ctas") as string[];
  const { ctaHrefs } = contentPages[pageKey];
  const actions = labels.map((label, i) => ({ label, href: ctaHrefs[i] }));

  return (
    <main>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        intro={t("intro")}
        badge={t.has("soon") ? common("soon") : undefined}
        actions={actions}
      />
      <PageSections sections={t.raw("sections") as PageSection[]} />
    </main>
  );
}
