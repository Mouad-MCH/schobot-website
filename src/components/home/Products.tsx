"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const INITIAL_COUNT = 3;

export default function Products() {
  const t = useTranslations("Products");
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, INITIAL_COUNT);

  return (
    <section
      aria-labelledby="products-heading"
      className="section"
      id="products"
      style={{ background: "#fff" }}
    >
      <div className="wrap">
        {/* Section header */}
        <div className="products-title-row">
          <div>
            <p className="section-eyebrow products-eyebrow">{t("eyebrow")}</p>
            <h2 id="products-heading" className="products-heading">
              {t("heading")}
            </h2>
            <span className="academic-badge">{t("badge")}</span>
          </div>
          {products.length > INITIAL_COUNT && (
            <button
              onClick={() => {
                setShowAll((v) => !v);
                if (showAll) {
                  document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="products-toggle-btn"
              aria-expanded={showAll}
            >
              {showAll ? t("less") : t("more")}
            </button>
          )}
        </div>

        {/* Product grid */}
        <div className="product-grid">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              visitLabel={t("visitWebsite")}
              conceptLabel={t("concept")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
