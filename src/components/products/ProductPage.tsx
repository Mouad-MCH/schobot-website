import { getTranslations } from "next-intl/server";
import PageHero from "@/components/page/PageHero";
import PageSections, { type PageSection } from "@/components/page/PageSections";
import type { Product } from "@/types/product";

export default async function ProductPage({ product }: { product: Product }) {
  const t = await getTranslations("ProductPages");
  const c = await getTranslations("ProductPage");
  const key = product.messageKey;

  const actions = [{ href: product.ctaHref, label: t(`${key}.cta`) }];
  if (product.cta2Href) actions.push({ href: product.cta2Href, label: t(`${key}.cta2`) });

  return (
    <main>
      <PageHero
        back={{ href: "/#products", label: c("back") }}
        eyebrow={t(`${key}.eyebrow`)}
        title={t(`${key}.title`)}
        intro={t(`${key}.intro`)}
        badge={product.status === "coming-soon" ? c("soon") : undefined}
        actions={actions}
      />
      <PageSections
        sections={t.raw(`${key}.sections`) as PageSection[]}
        note={t.has(`${key}.note`) ? { label: c("noteLabel"), text: t(`${key}.note`) } : undefined}
      />
    </main>
  );
}
