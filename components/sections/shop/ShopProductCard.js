'use client';

import Link from 'next/link';
import { useState } from 'react';
import { formatShopPrice, getShopCategoryLabel, getShopProductImage } from '@/lib/shopProducts';

export default function ShopProductCard({ product, buttonLabel = 'Scopri', variant = 'grid' }) {
  const productHref = `/shop/${product.slug}`;
  const isCarousel = variant === 'carousel';
  const preferredImage = getShopProductImage(product, variant);
  const [imageSrc, setImageSrc] = useState(preferredImage);

  const handleImageError = () => {
    if (isCarousel && imageSrc !== product.image) {
      setImageSrc(product.image);
    }
  };

  const card = (
    <div className={`shop-block-one shop-product-card${isCarousel ? ' shop-product-card--overlay' : ''}`}>
      <div className="inner-box">
        <div className="image-box shop-product-card__image-box">
          {isCarousel ? (
            <Link href={productHref} className="shop-product-card__image-link">
              <figure className="image">
                <img
                  src={imageSrc}
                  alt={product.imageAlt ?? product.name}
                  onError={handleImageError}
                />
              </figure>
            </Link>
          ) : (
            <>
              <figure className="image">
                <img
                  src={imageSrc}
                  alt={product.imageAlt ?? product.name}
                  onError={handleImageError}
                />
              </figure>
              <div className="btn-box">
                <Link href={productHref} className="theme-btn-one">
                  {buttonLabel}
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="lower-content">
          <p className="shop-product-card__category">{getShopCategoryLabel(product.category)}</p>
          <h5>
            <Link href={productHref}>{product.name}</Link>
          </h5>
          <span className="price">{formatShopPrice(product.price)}</span>
        </div>
      </div>
    </div>
  );

  if (isCarousel) return card;

  return (
    <div className="col-lg-3 col-md-6 col-sm-12 shop-block">
      {card}
    </div>
  );
}
