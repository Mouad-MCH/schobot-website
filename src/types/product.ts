export type ProductStatus = "live" | "concept" | "coming-soon";

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  url?: string;
  status?: ProductStatus;
  conceptBadge?: string;
};
