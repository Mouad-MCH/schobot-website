import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function About() {
  const t = await getTranslations("About");

  return (
    <section aria-labelledby="about-heading" className="section about-section">
      <div className="wrap two-col-grid">
        {/* Left: illustration */}
        <div className="about-art" aria-hidden="true">
          <div className="about-platform" />
          <div className="about-stack">
            <div className="about-stack-item" />
            <div className="about-stack-item" />
            <div className="about-stack-item" />
          </div>
          <div className="about-card about-card-bars">
            <i /><i /><i /><i />
          </div>
          <div className="about-card about-card-lines">
            <i /><i /><i />
          </div>
          <div className="about-human about-h1" />
          <div className="about-human about-h2" />
          <div className="about-gear" />
        </div>

        {/* Right: copy */}
        <div className="about-copy">
          <p className="section-eyebrow about-eyebrow">{t("eyebrow")}</p>
          <h2 id="about-heading" className="about-heading">
            {t("heading")}
          </h2>
          <p className="about-body">{t("body1")}</p>
          <p className="about-body">{t("body2")}</p>
          <Link href="/about" className="arrow-link">
            {t("learnMore")}
            <span className="rtl-flip" aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
