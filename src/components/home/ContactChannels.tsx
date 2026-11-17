import { getTranslations } from "next-intl/server";

const LTR = { dir: "ltr" as const, className: "channel-value channel-ltr" };

export default async function ContactChannels({ hideHeading = false }: { hideHeading?: boolean }) {
  const t = await getTranslations("ContactChannels");

  return (
    <section
      className="section channels-section"
      {...(hideHeading ? { "aria-label": t("eyebrow") } : { "aria-labelledby": "channels-heading" })}
      id="channels"
    >
      <div className="wrap">
        {!hideHeading && (
          <div className="section-center-title">
            <p className="section-eyebrow">{t("eyebrow")}</p>
            <h2 id="channels-heading" className="section-main-heading">
              {t("heading")}
            </h2>
          </div>
        )}

        <div className="channels-grid">
          <article className="channel-card">
            <h3 className="channel-title">{t("email")}</h3>
            <a href="mailto:info@schobot.com" {...LTR}>info@schobot.com</a>
          </article>

          <article className="channel-card">
            <h3 className="channel-title">{t("egypt")}</h3>
            <a href="tel:+201064134598" {...LTR}>+20 106 413 4598</a>
            <a href="tel:+201014176726" {...LTR}>+20 101 417 6726</a>
          </article>

          <article className="channel-card">
            <h3 className="channel-title">{t("uae")}</h3>
            <a href="tel:+971565633649" {...LTR}>+971 56 563 3649</a>
          </article>

          <article className="channel-card">
            <h3 className="channel-title">{t("initiative")}</h3>
            <a
              href="https://wa.me/201055428293"
              target="_blank"
              rel="noopener noreferrer"
              {...LTR}
            >
              +20 105 542 8293
            </a>
          </article>

          <article className="channel-card">
            <h3 className="channel-title">{t("address")}</h3>
            <p className="channel-value">{t("addressValue")}</p>
          </article>

          <article className="channel-card">
            <h3 className="channel-title">{t("websites")}</h3>
            <a href="https://www.schobot.com" target="_blank" rel="noopener noreferrer" {...LTR}>www.schobot.com</a>
            <a href="https://www.bazacademy.com" target="_blank" rel="noopener noreferrer" {...LTR}>www.bazacademy.com</a>
          </article>
        </div>
      </div>
    </section>
  );
}
