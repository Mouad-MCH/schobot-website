import { ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import ActionLink from "./PageActions";
import styles from "./page.module.css";

export type HeroAction = { href: string; label: string };

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  badge?: string;
  back?: { href: string; label: string };
  actions?: HeroAction[];
};

export default function PageHero({ eyebrow, title, intro, badge, back, actions = [] }: Props) {
  return (
    <section className={styles.hero}>
      <div className={`wrap ${styles.heroInner}`}>
        {back && (
          <Link href={back.href} className={styles.back}>
            <ArrowLeft size={16} className="rtl-flip" aria-hidden="true" />
            {back.label}
          </Link>
        )}
        <p className={styles.eyebrow}>
          {eyebrow}
          {badge && <span className={styles.badge}>{badge}</span>}
        </p>
        <h1 className={styles.title}>{title}</h1>
        {intro && <p className={styles.intro}>{intro}</p>}
        {actions.length > 0 && (
          <div className={styles.actions}>
            {actions.map((a, i) => (
              <ActionLink key={a.href + a.label} href={a.href} variant={i === 0 ? "primary" : "secondary"}>
                {a.label}
              </ActionLink>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
