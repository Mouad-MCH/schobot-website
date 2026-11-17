import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";

export default async function PartnershipPaths() {
  const t = await getTranslations("Paths");
  const items = t.raw("items") as string[];

  return (
    <section className="section paths-section" aria-labelledby="paths-heading">
      <div className="wrap paths-inner">
        <div>
          <p className="section-eyebrow">{t("eyebrow")}</p>
          <h2 id="paths-heading" className="section-main-heading">
            {t("heading")}
          </h2>
          <p className="paths-body">{t("body")}</p>
          <Link href="/partnerships#paths" className="btn-outline paths-cta">
            {t("cta")}
            <ArrowUpRight size={18} className="rtl-flip" aria-hidden="true" />
          </Link>
        </div>
        <ul className="paths-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
