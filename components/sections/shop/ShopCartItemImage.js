'use client';

import { useState } from 'react';
import { SHOP_FALLBACK_IMAGE } from '@/lib/resolvePayloadMediaUrl';
import { getShopProductImage } from '@/lib/shopProducts';

export default function ShopCartItemImage({ item, className }) {
  const staticJpg = `/assets/images/shop/${item.slug}.jpg`;
  const preferredImage = item.image || getShopProductImage(item);
  const [imageSrc, setImageSrc] = useState(preferredImage || staticJpg);

  const handleImageError = () => {
    if (imageSrc !== staticJpg) {
      setImageSrc(staticJpg);
      return;
    }

    if (imageSrc !== SHOP_FALLBACK_IMAGE) {
      setImageSrc(SHOP_FALLBACK_IMAGE);
    }
  };

  return (
    <img
      src={imageSrc}
      alt={item.imageAlt ?? item.name}
      className={className}
      onError={handleImageError}
    />
  );
}
