/** Language-neutral config for content pages. Copy lives in messages under `Pages.<key>`. */
export type ContentPageKey =
  | "partnerships"
  | "initiative"
  | "impact"
  | "knowledge"
  | "news";

export type ContentPageConfig = {
  /** One href per CTA label in `Pages.<key>.ctas` (first is the primary action). */
  ctaHrefs: string[];
};

export const contentPages: Record<ContentPageKey, ContentPageConfig> = {
  partnerships: { ctaHrefs: ["/contact", "#paths"] },
  initiative: {
    ctaHrefs: ["https://forms.gle/q4v3qXj7vcNoKBzu6", "https://wa.me/201055428293"],
  },
  impact: { ctaHrefs: ["/contact"] },
  knowledge: { ctaHrefs: ["/contact"] },
  news: { ctaHrefs: ["https://youtube.com/@schobotofficialchannel"] },
};
