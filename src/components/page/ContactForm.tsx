"use client";

import { useId, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import styles from "./form.module.css";

const TO = "info@schobot.com";

type Kind = "send" | "partner" | "support";

/** No backend: submitting opens the visitor's mail app with the fields filled in. */
export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [kind, setKind] = useState<Kind>("send");
  const roles = t.raw("roles") as string[];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const subject = `${t("mailSubject")}${get("subject") ? `: ${get("subject")}` : ""}`;
    const body = [
      `${t("name")}: ${get("name")}`,
      `${t("email")}: ${get("email")}`,
      `${t("country")}: ${get("country")}`,
      `${t("org")}: ${get("org")}`,
      `${t("role")}: ${get("role")}`,
      `${t("interest")}: ${get("interest")}`,
      `${t(kind)}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const id = (n: string) => `${uid}-${n}`;

  return (
    <section className={styles.section} aria-labelledby={id("h")}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <h2 id={id("h")} className={styles.heading}>{t("heading")}</h2>
            <p className={styles.hint}>{t("hint")}</p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor={id("name")}>{t("name")}</label>
              <input id={id("name")} name="name" autoComplete="name" required />
            </div>
            <div className={styles.field}>
              <label htmlFor={id("email")}>{t("email")}</label>
              <input id={id("email")} name="email" type="email" autoComplete="email" dir="ltr" required />
            </div>
            <div className={styles.field}>
              <label htmlFor={id("country")}>{t("country")}</label>
              <input id={id("country")} name="country" autoComplete="country-name" required />
            </div>
            <div className={styles.field}>
              <label htmlFor={id("org")}>{t("org")}</label>
              <input id={id("org")} name="org" autoComplete="organization" />
            </div>
            <div className={styles.field}>
              <label htmlFor={id("role")}>{t("role")}</label>
              <select id={id("role")} name="role" defaultValue={roles[0]}>
                {roles.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor={id("interest")}>{t("interest")}</label>
              <input id={id("interest")} name="interest" />
            </div>
            <div className={`${styles.field} ${styles.wide}`}>
              <label htmlFor={id("subject")}>{t("subject")}</label>
              <input id={id("subject")} name="subject" required />
            </div>
            <div className={`${styles.field} ${styles.wide}`}>
              <label htmlFor={id("message")}>{t("message")}</label>
              <textarea id={id("message")} name="message" rows={5} required />
            </div>
            <label className={`${styles.consent} ${styles.wide}`}>
              <input type="checkbox" name="consent" required />
              <span>{t("consent")}</span>
            </label>

            <div className={`${styles.buttons} ${styles.wide}`}>
              <button type="submit" className={styles.primary} onClick={() => setKind("send")}>
                {t("send")}
              </button>
              <button type="submit" className={styles.secondary} onClick={() => setKind("partner")}>
                {t("partner")}
              </button>
              <button type="submit" className={styles.secondary} onClick={() => setKind("support")}>
                {t("support")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
