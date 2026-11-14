import type { Product } from "@/types/product";

// Order matters: the homepage shows the first three initially.
export const products: Product[] = [
  {
    id: "quran-app",
    slug: "quran",
    ctaHref: "/#channels",
    messageKey: "quran",
    image: "",
    status: "coming-soon",
    conceptBadge: "QURAN",
  },
  {
    id: "schobot",
    slug: "researchers",
    ctaHref: "https://schobot.com",
    cta2Href: "https://app.schobot.com",
    messageKey: "schobot",
    image: "/images/products/schobot.webp",
    url: "https://schobot.com",
    status: "live",
  },
  {
    id: "baz-kids",
    slug: "kids",
    ctaHref: "https://bazacademy.com",
    messageKey: "bazKids",
    image: "/images/products/baz-academy.webp",
    url: "https://bazacademy.com",
    status: "live",
  },
  {
    id: "baz-academy",
    slug: "adults",
    ctaHref: "https://bazacademy.com",
    cta2Href: "/#channels",
    messageKey: "bazAdults",
    image: "/images/products/baz-academy.webp",
    url: "https://bazacademy.com",
    status: "live",
  },
  {
    id: "ocr",
    slug: "ocr",
    ctaHref: "/#channels",
    messageKey: "ocr",
    image: "",
    conceptBadge: "OCR",
  },
  {
    id: "publishing",
    slug: "publishing",
    ctaHref: "/#channels",
    messageKey: "publishing",
    image: "",
    conceptBadge: "PUB",
  },
];
