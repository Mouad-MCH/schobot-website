import { getTranslations } from "next-intl/server";

export default async function Partners() {
  const t = await getTranslations("Partners");

  const caps = [
    t("cap1"),
    t("cap2"),
    t("cap3"),
    t("cap4"),
    t("cap5"),
    t("cap6"),
  ];

  return (
    <div className="partners-strip" aria-label="Capabilities">
      <div className="wrap partners-row">
        {caps.map((cap) => (
          <span key={cap}>{cap}</span>
        ))}
      </div>
    </div>
  );
}
