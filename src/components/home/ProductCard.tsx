import type { Product } from "@/types/product";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  visitLabel: string;
  conceptLabel: string;
}

function ProductArt({ product }: { product: Product }) {
  if (product.id === "schobot") {
    return (
      <div className="prod-img-schobot" aria-hidden="true">
        <div className="schobot-browser">
          <div className="schobot-search" />
          <div className="schobot-lines">
            <i /><i /><i />
          </div>
        </div>
        <div className="schobot-ai-badge">AI</div>
      </div>
    );
  }
  if (product.id === "baz-academy") {
    return (
      <div className="prod-img-baz" aria-hidden="true">
        <div className="baz-board" />
        <div className="baz-course baz-c1" />
        <div className="baz-course baz-c2" />
      </div>
    );
  }
  return (
    <div className="prod-img-concept" aria-hidden="true">
      <div className="concept-ui" />
      {product.conceptBadge && (
        <div className="concept-badge">{product.conceptBadge}</div>
      )}
    </div>
  );
}

export default function ProductCard({
  product,
  visitLabel,
  conceptLabel,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="prod-image">
        <ProductArt product={product} />
      </div>

      <div className="prod-info">
        <span className="prod-category">{product.category}</span>
        <h3 className="prod-name">{product.name}</h3>
        <p className="prod-desc">{product.description}</p>

        {product.status !== "live" && (
          <span className="status-badge status-concept">{conceptLabel}</span>
        )}
        {product.url && product.status === "live" && (
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="product-link"
          >
            {visitLabel}
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
