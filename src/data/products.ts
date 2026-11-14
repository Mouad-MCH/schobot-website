import type { Product } from "@/types/product";

// Order matters: the homepage shows the first three initially.
export const products: Product[] = [
  {
    id: "quran-app",
    messageKey: "quran",
    image: "",
    status: "coming-soon",
    conceptBadge: "QURAN",
  },
  {
    id: "schobot",
    messageKey: "schobot",
    image: "/images/products/schobot.webp",
    url: "https://schobot.com",
    status: "live",
  },
  {
    id: "baz-kids",
    messageKey: "bazKids",
    image: "/images/products/baz-academy.webp",
    url: "https://bazacademy.com",
    status: "live",
  },
  {
    id: "baz-academy",
    messageKey: "bazAdults",
    image: "/images/products/baz-academy.webp",
    url: "https://bazacademy.com",
    status: "live",
  },
  {
    id: "ocr",
    messageKey: "ocr",
    image: "",
    conceptBadge: "OCR",
  },
  {
    id: "publishing",
    messageKey: "publishing",
    image: "",
    conceptBadge: "PUB",
  },
];
