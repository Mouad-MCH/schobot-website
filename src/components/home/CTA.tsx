import { getTranslations } from "next-intl/server";
import GetStartedButton from "@/components/ui/GetStartedButton";

export default async function CTA() {
  const t = await getTranslations("CTA");

  return (
    <section
      aria-labelledby="cta-heading"
      id="contact"
      className="cta-section"
    >
      <div className="wrap cta-inner">
        <div className="cta-copy">
          <p className="section-eyebrow cta-eyebrow">{t("eyebrow")}</p>
          <h2 id="cta-heading" className="cta-heading">{t("heading")}</h2>
          <p className="cta-body">{t("body")}</p>
        </div>
        <GetStartedButton label={t("cta")} />
      </div>
    </section>
  );
}
