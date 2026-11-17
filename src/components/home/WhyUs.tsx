import { getTranslations } from "next-intl/server";

export default async function WhyUs() {
  const t = await getTranslations("WhyUs");
  const items = t.raw("items") as string[][];

  return (
    <section className="section why-section" aria-labelledby="why-heading">
      <div className="wrap why-grid">
        <div className="why-intro">
          <p className="section-eyebrow">{t("eyebrow")}</p>
          <h2 id="why-heading" className="section-main-heading">
            {t("heading")}
          </h2>
        </div>
        <ul className="why-list">
          {items.map(([title, text]) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
