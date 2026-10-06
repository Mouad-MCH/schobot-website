import { getTranslations } from "next-intl/server";

const ICONS = ["⌕", "✎", "◫", "★"] as const;
const KEYS = ["researchers", "students", "educators", "youngLearners"] as const;

export default async function Audience() {
  const t = await getTranslations("Audience");

  return (
    <section
      aria-labelledby="audience-heading"
      className="section audience-section"
      id="industries"
    >
      <div className="wrap">
        <div className="section-center-title">
          <p className="section-eyebrow">{t("eyebrow")}</p>
          <h2 id="audience-heading" className="section-main-heading">
            {t("heading")}
          </h2>
        </div>

        <div className="audience-grid">
          {KEYS.map((key, i) => (
            <article key={key} className="audience-card">
              <span className="audience-icon" aria-hidden="true">
                {ICONS[i]}
              </span>
              <h3 className="audience-title">{t(key)}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
