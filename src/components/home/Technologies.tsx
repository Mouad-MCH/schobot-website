import { getTranslations } from "next-intl/server";

function VisualSpeech() {
  return (
    <>
      <div className="tech-pod" />
      <div className="tech-laptop" />
      <div className="tech-phone" />
      <div className="tech-console">
        <i /><i /><i />
      </div>
      <div className="tech-wave" />
    </>
  );
}

function VisualOCR() {
  return (
    <>
      <div className="tech-glass-cylinder" />
      <div className="tech-paper tech-pa">
        <i /><i /><i />
      </div>
      <div className="tech-paper tech-pb">
        <i /><i />
      </div>
      <div className="tech-ocr-machine" />
      <div className="tech-search-glass" />
    </>
  );
}

function VisualNLP() {
  return (
    <>
      <div className="tech-robot-head" />
      <div className="tech-data-bars tech-b1" />
      <div className="tech-data-bars tech-b2" />
      <div className="tech-nlp-card tech-c1" />
      <div className="tech-nlp-card tech-c2" />
      <div className="tech-nlp-chip" />
    </>
  );
}

export default async function Technologies() {
  const t = await getTranslations("Technologies");

  return (
    <section className="section tech-section" id="technologies" aria-labelledby="tech-heading">
      <div className="wrap">
        {/* Center title */}
        <div className="tech-center-title">
          <p className="section-eyebrow">{t("eyebrow")}</p>
          <h2 id="tech-heading" className="tech-main-heading">{t("heading")}</h2>
          <p className="tech-main-body">{t("body")}</p>
        </div>

        {/* Row 1 — Speech (visual left, copy right) */}
        <article className="tech-row" id="speech">
          <div className="tech-visual visual-speech" aria-hidden="true">
            <VisualSpeech />
          </div>
          <div className="tech-copy">
            <span className="tech-number" aria-hidden="true">01</span>
            <h3 className="tech-row-heading">{t("t1heading")}</h3>
            <h4 className="tech-row-subheading">{t("t1subheading")}</h4>
            <p className="tech-row-body">{t("t1body")}</p>
            <a href="#products" className="arrow-link">
              {t("t1cta")}
              <span className="rtl-flip" aria-hidden="true">↗</span>
            </a>
          </div>
        </article>

        {/* Row 2 — OCR (copy left, visual right) */}
        <article className="tech-row tech-row-reverse" id="ocr">
          <div className="tech-visual visual-ocr" aria-hidden="true">
            <VisualOCR />
          </div>
          <div className="tech-copy">
            <span className="tech-number" aria-hidden="true">02</span>
            <h3 className="tech-row-heading">{t("t2heading")}</h3>
            <h4 className="tech-row-subheading">{t("t2subheading")}</h4>
            <p className="tech-row-body">{t("t2body")}</p>
            <a href="#products" className="arrow-link">
              {t("t2cta")}
              <span className="rtl-flip" aria-hidden="true">↗</span>
            </a>
          </div>
        </article>

        {/* Row 3 — NLP (visual left, copy right) */}
        <article className="tech-row" id="nlp">
          <div className="tech-visual visual-nlp" aria-hidden="true">
            <VisualNLP />
          </div>
          <div className="tech-copy">
            <span className="tech-number" aria-hidden="true">03</span>
            <h3 className="tech-row-heading">{t("t3heading")}</h3>
            <h4 className="tech-row-subheading">{t("t3subheading")}</h4>
            <p className="tech-row-body">{t("t3body")}</p>
            <a href="#products" className="arrow-link">
              {t("t3cta")}
              <span className="rtl-flip" aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
