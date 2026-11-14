import type { Product } from "@/types/product";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface ProductCardProps {
  product: Product;
  name: string;
  category: string;
  description: string;
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
  if (product.id.startsWith("baz")) {
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
  name,
  category,
  description,
  visitLabel,
  conceptLabel,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="prod-image">
        <ProductArt product={product} />
      </div>

      <div className="prod-info">
        <span className="prod-category">{category}</span>
        <h3 className="prod-name">{name}</h3>
        <p className="prod-desc">{description}</p>

        {(product.status === "concept" || product.status === "coming-soon") && (
          <span className="status-badge status-concept">{conceptLabel}</span>
        )}
        <Link href={`/products/${product.slug}`} className="product-link">
          {visitLabel}
          <ArrowUpRight size={13} aria-hidden="true" className="rtl-flip" />
        </Link>
      </div>
    </article>
  );
}
