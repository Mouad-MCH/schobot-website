import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default async function Footer() {
  const t = await getTranslations("Footer");

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <Link href="/" aria-label="Schobot home" className="footer-logo">
              <Image
                src="/images/icons/schobot-mark.svg"
                alt=""
                width={34}
                height={26}
                className="footer-logo-mark"
              />
              <span className="footer-logo-word">schobot</span>
            </Link>
            <p className="footer-tagline">{t("tagline")}</p>
          </div>

          {/* Products column */}
          <div>
            <h4 className="footer-col-heading">{t("productsHeading")}</h4>
            <ul className="footer-links">
              <li>
                <a href="https://schobot.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Schobot
                </a>
              </li>
              <li>
                <a href="https://bazacademy.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  BAZ Academy
                </a>
              </li>
            </ul>
          </div>

          {/* Academic Tools column */}
          <div>
            <h4 className="footer-col-heading">{t("toolsHeading")}</h4>
            <ul className="footer-links">
              <li>
                <a href="https://schobot.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  {t("toolAcademicSearch")}
                </a>
              </li>
              <li>
                <a href="https://schobot.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  {t("toolTranslation")}
                </a>
              </li>
              <li>
                <a href="https://bazacademy.com" target="_blank" rel="noopener noreferrer" className="footer-link">
                  {t("toolCourses")}
                </a>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="footer-col-heading">{t("companyHeading")}</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about" className="footer-link">{t("companyAbout")}</Link>
              </li>
              <li>
                <Link href="/" className="footer-link">{t("companyProducts")}</Link>
              </li>
              <li>
                <a href="#contact" className="footer-link">{t("companyContact")}</a>
              </li>
              <li>
                <a href="#contact" className="footer-link">{t("companyCareers")}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>{t("copyright", { year })}</span>
          <span>schobot.com · bazacademy.com</span>
        </div>
      </div>
    </footer>
  );
}
