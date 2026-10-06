"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";

export default function ContactModal() {
  const t = useTranslations("Modal");
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleOpen() {
      setOpen(true);
      setStatus("");
    }
    window.addEventListener("openContactModal", handleOpen);
    return () => window.removeEventListener("openContactModal", handleOpen);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      firstInputRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(t("success"));
  }

  if (!open) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-heading">
      {/* Backdrop */}
      <div className="modal-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />

      {/* Card */}
      <div className="modal-card">
        <button
          className="modal-close"
          onClick={() => setOpen(false)}
          aria-label={t("close")}
        >
          <X size={22} />
        </button>

        <div className="modal-head">
          <p className="section-eyebrow modal-eyebrow">{t("eyebrow")}</p>
          <h2 id="modal-heading" className="modal-heading">{t("heading")}</h2>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="modal-form-grid">
            <label className="modal-label">
              <span>{t("firstName")}</span>
              <input ref={firstInputRef} required type="text" className="modal-input" />
            </label>
            <label className="modal-label">
              <span>{t("lastName")}</span>
              <input required type="text" className="modal-input" />
            </label>
            <label className="modal-label">
              <span>{t("email")}</span>
              <input required type="email" className="modal-input" />
            </label>
            <label className="modal-label">
              <span>{t("company")}</span>
              <input type="text" className="modal-input" />
            </label>
            <label className="modal-label">
              <span>{t("phone")}</span>
              <input type="tel" className="modal-input" />
            </label>
            <label className="modal-label">
              <span>{t("interest")}</span>
              <select className="modal-input">
                <option>{t("interestSpeech")}</option>
                <option>{t("interestOCR")}</option>
                <option>{t("interestNLP")}</option>
                <option>{t("interestCustom")}</option>
              </select>
            </label>
          </div>

          <label className="modal-label modal-full">
            <span>{t("message")}</span>
            <textarea rows={5} className="modal-input modal-textarea" />
          </label>

          <button type="submit" className="modal-submit-btn">{t("submit")}</button>

          {status && <p className="modal-status">{status}</p>}
        </form>
      </div>
    </div>
  );
}
