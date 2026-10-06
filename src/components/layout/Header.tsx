"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import LanguageSwitch from "@/components/ui/LanguageSwitch";

export default function Header() {
  const t = useTranslations("Navigation");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  function closeAll() {
    setMenuOpen(false);
    setDropOpen(false);
  }

  return (
    <>
      {/* Mini bar – scrolls away */}
      <div className="nav-mini-bar">
        <div className="wrap nav-mini-inner">
          <span className="nav-mini-tagline">{t("miniTagline")}</span>
          <div className="nav-mini-links">
            <a
              href="https://schobot.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              schobot.com
            </a>
            <a
              href="https://bazacademy.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              bazacademy.com
            </a>
          </div>
        </div>
      </div>

      {/* Sticky nav */}
      <header className="nav-wrap">
        <div className="wrap nav-inner">
          {/* Logo */}
          <Link href="/" className="nav-logo" aria-label="Schobot home">
            <Image
              src="/images/icons/schobot-mark.svg"
              alt=""
              width={38}
              height={29}
              priority
            />
            <span className="nav-logo-word">schobot</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="nav-desktop" aria-label="Main navigation">
            <Link href="/" className="nav-link">
              {t("home")}
            </Link>

            {/* Products dropdown */}
            <div className="nav-dropdown">
              <button className="nav-link nav-dropdown-trigger">
                {t("products")}
                <ChevronDown size={12} aria-hidden="true" />
              </button>
              <div className="nav-dropdown-panel">
                <a
                  href="https://schobot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-dropdown-link"
                >
                  {t("dropSchobot")}
                </a>
                <a
                  href="https://bazacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-dropdown-link"
                >
                  {t("dropBazAcademy")}
                </a>
              </div>
            </div>

            <a href="#products" className="nav-link">
              {t("whatWeBuild")}
            </a>
            <a href="#industries" className="nav-link">
              {t("forLearners")}
            </a>
            <Link href="/about" className="nav-link">
              {t("about")}
            </Link>
          </nav>

          {/* Desktop right actions */}
          <div className="nav-actions">
            <LanguageSwitch />
            <button
              type="button"
              className="nav-cta-btn"
              onClick={() => window.dispatchEvent(new CustomEvent("openContactModal"))}
            >
              {t("getStarted")}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="nav-mobile-toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-mobile-menu"
            aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
            onClick={() => {
              setMenuOpen((v) => !v);
              setDropOpen(false);
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu – inside sticky header so it follows on scroll */}
        {menuOpen && (
          <nav
            id="nav-mobile-menu"
            className="nav-mobile-menu"
            aria-label="Mobile navigation"
          >
            <Link href="/" className="nav-mobile-link" onClick={closeAll}>
              {t("home")}
            </Link>

            {/* Products dropdown (mobile) */}
            <div>
              <button
                className="nav-mobile-link nav-mobile-drop-trigger"
                aria-expanded={dropOpen}
                onClick={() => setDropOpen((v) => !v)}
              >
                {t("products")}
                <ChevronDown
                  size={13}
                  aria-hidden="true"
                  className={dropOpen ? "chevron-open" : ""}
                />
              </button>
              {dropOpen && (
                <div className="nav-mobile-drop-panel">
                  <a
                    href="https://schobot.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-mobile-drop-link"
                    onClick={closeAll}
                  >
                    {t("dropSchobot")}
                  </a>
                  <a
                    href="https://bazacademy.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-mobile-drop-link"
                    onClick={closeAll}
                  >
                    {t("dropBazAcademy")}
                  </a>
                </div>
              )}
            </div>

            <a
              href="#products"
              className="nav-mobile-link"
              onClick={closeAll}
            >
              {t("whatWeBuild")}
            </a>
            <a
              href="#industries"
              className="nav-mobile-link"
              onClick={closeAll}
            >
              {t("forLearners")}
            </a>
            <Link
              href="/about"
              className="nav-mobile-link"
              onClick={closeAll}
            >
              {t("about")}
            </Link>

            <div className="nav-mobile-actions">
              <LanguageSwitch />
              <button
                type="button"
                className="nav-cta-btn"
                onClick={() => {
                  closeAll();
                  window.dispatchEvent(new CustomEvent("openContactModal"));
                }}
              >
                {t("getStarted")}
              </button>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
