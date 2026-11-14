import { getTranslations } from "next-intl/server";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { Product } from "@/types/product";

type Section = { title: string; text?: string; items?: string[] };

const BUTTON =
  "inline-flex items-center gap-2 rounded-xl px-6 py-3.5 font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#07384D] focus-visible:ring-offset-2";
const PRIMARY = `${BUTTON} bg-[#00A99D] text-white hover:bg-[#007D78]`;
const SECONDARY = `${BUTTON} border border-[#00A99D] bg-white text-[#07384D] hover:bg-[#00A99D] hover:text-white`;

function ActionLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default async function ProductPage({ product }: { product: Product }) {
  const t = await getTranslations("ProductPages");
  const c = await getTranslations("ProductPage");
  const key = product.messageKey;
  const sections = t.raw(`${key}.sections`) as Section[];
  const hasCta2 = Boolean(product.cta2Href);
  const soon = product.status === "coming-soon";

  return (
    <main className="overflow-hidden">
      <section className="bg-gradient-to-r from-[#59E7A6] via-[#DDF9EC] to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Link
            href="/#products"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#007D78] hover:underline"
          >
            <ArrowLeft size={16} className="rtl-flip" aria-hidden="true" />
            {c("back")}
          </Link>

          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#007D78]">
              {t(`${key}.eyebrow`)}
            </span>
            {soon && (
              <span className="rounded-full border border-[#00A99D] bg-white px-3 py-1 text-xs font-semibold text-[#007D78]">
                {c("soon")}
              </span>
            )}
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-[#07384D] md:text-5xl">
            {t(`${key}.title`)}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#496873]">
            {t(`${key}.intro`)}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ActionLink href={product.ctaHref} className={PRIMARY}>
              {t(`${key}.cta`)}
              <ArrowUpRight size={18} className="rtl-flip" aria-hidden="true" />
            </ActionLink>
            {hasCta2 && product.cta2Href && (
              <ActionLink href={product.cta2Href} className={SECONDARY}>
                {t(`${key}.cta2`)}
              </ActionLink>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-4xl flex-col gap-12 px-6 lg:px-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl font-bold text-[#07384D] md:text-3xl">
                {section.title}
              </h2>
              {section.text && (
                <p className="mt-4 text-lg leading-8 text-[#667085]">{section.text}</p>
              )}
              {section.items && (
                <ul className="mt-5 grid gap-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-[#DCE9E7] bg-[#F7FBFA] px-5 py-4 leading-7 text-[#07384D]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {t.has(`${key}.note`) && (
            <p className="rounded-2xl bg-[#EAF7F5] px-6 py-5 leading-7 text-[#07384D]">
              <strong>{c("noteLabel")}: </strong>
              {t(`${key}.note`)}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
