export type ProductStatus = "live" | "concept" | "coming-soon";

/** Language-neutral product data. Name, category and description live in
 *  messages under `ProductItems.<messageKey>`. */
export type Product = {
  id: string;
  messageKey: string;
  /** URL segment of the product page: /products/<slug> */
  slug: string;
  /** Primary / secondary buttons on the product page. */
  ctaHref: string;
  cta2Href?: string;
  image: string;
  url?: string;
  status?: ProductStatus;
  conceptBadge?: string;
};
