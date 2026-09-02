import Link from 'next/link';
import { formatShopPrice, getShopCategoryLabel } from '@/lib/shopProducts';

export default function ShopProductCard({ product, buttonLabel = 'Scopri' }) {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
      <div className="shop-block-one shop-product-card">
        <div className="inner-box">
          <div className="image-box shop-product-card__image-box">
            <figure className="image">
              <img src={product.image} alt={product.imageAlt ?? product.name} />
            </figure>
            <div className="btn-box">
              <Link href={`/shop/${product.slug}`} className="theme-btn-one">
                {buttonLabel}
              </Link>
            </div>
          </div>
          <div className="lower-content">
            <p className="shop-product-card__category">{getShopCategoryLabel(product.category)}</p>
            <h5>
              <Link href={`/shop/${product.slug}`}>{product.name}</Link>
            </h5>
            <span className="price">{formatShopPrice(product.price)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
