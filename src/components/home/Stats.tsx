import { getTranslations } from "next-intl/server";

const STATS = [
  { key: "n1", value: "200K+" },
  { key: "n2", value: "20" },
  { key: "n3", value: "190" },
  { key: "n4", value: "84K+" },
] as const;

export default async function Stats() {
  const t = await getTranslations("Stats");

  return (
    <section className="stats-section" aria-label={t("label")}>
      <div className="wrap">
        <div className="stats-grid">
          {STATS.map(({ key, value }) => (
            <div key={key}>
              <span className="stats-value">{value}</span>
              <span className="stats-label">{t(key)}</span>
            </div>
          ))}
        </div>
        <p className="stats-source">{t("source")}</p>
      </div>
    </section>
  );
}
