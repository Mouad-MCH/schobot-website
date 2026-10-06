import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { locale } from "next/root-params";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-cairo" });

export const metadata: Metadata = {
  title: "Schobot — Academic Technology for Research & Learning",
  description:
    "Schobot builds academic technology for research, learning and training.",
};

export function generateStaticParams() {
  return routing.locales.map((loc) => ({ locale: loc }));
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loc = await locale();

  if (!routing.locales.includes(loc as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={loc}
      dir={loc === "ar" ? "rtl" : "ltr"}
      className={`${inter.variable} ${cairo.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
