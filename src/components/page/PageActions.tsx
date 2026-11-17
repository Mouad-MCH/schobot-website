import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import styles from "./page.module.css";

export function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

type Props = {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

/** Internal routes use the locale-aware Link; anything else is a plain anchor. */
export default function ActionLink({ href, variant = "primary", children }: Props) {
  const className = variant === "primary" ? styles.primary : styles.secondary;
  const icon = <ArrowUpRight size={18} className="rtl-flip" aria-hidden="true" />;

  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  if (isExternal(href)) {
    const web = href.startsWith("http");
    return (
      <a
        href={href}
        className={className}
        {...(web ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {web && icon}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
      {icon}
    </Link>
  );
}
