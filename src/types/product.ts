export type ProductStatus = "live" | "concept" | "coming-soon";

/** Language-neutral product data. Name, category and description live in
 *  messages under `ProductItems.<messageKey>`. */
export type Product = {
  id: string;
  messageKey: string;
  image: string;
  url?: string;
  status?: ProductStatus;
  conceptBadge?: string;
};
