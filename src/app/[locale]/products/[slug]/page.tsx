import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locale } from "next/root-params";
import { getTranslations } from "next-intl/server";
import { products } from "@/data/products";
import ProductPage from "@/components/products/ProductPage";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};
  const loc = await locale();
  const t = await getTranslations({ locale: loc, namespace: "ProductPages" });
  return {
    title: t(`${product.messageKey}.seoTitle`),
    description: t(`${product.messageKey}.description`),
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();
  return <ProductPage product={product} />;
}
