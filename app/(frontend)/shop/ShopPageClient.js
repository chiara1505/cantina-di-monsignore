'use client';

import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import ShopProductCard from '@/components/sections/shop/ShopProductCard';
import { PAGE_TITLE_IMAGES } from '@/lib/pageTitleImages';
import { SHOP_CATEGORIES } from '@/lib/shopProducts';

export default function ShopPageClient({ products }) {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const categoryParam = searchParams.get('categoria');
    if (!categoryParam) return;

    const isValidCategory = Object.prototype.hasOwnProperty.call(SHOP_CATEGORIES, categoryParam);
    if (isValidCategory) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory, products]);

  const categoryFilters = [
    { id: 'all', label: 'Tutti' },
    ...Object.entries(SHOP_CATEGORIES).map(([id, category]) => ({
      id,
      label: category.label,
    })),
  ];

  return (
    <Layout
      headerStyle={1}
      footerStyle={1}
      breadcrumbTitle="Shop"
      breadcrumbPath="/shop"
      breadcrumbImage={PAGE_TITLE_IMAGES.shop}
    >
      <section className="shop-page-section shop-catalog">
        <div className="auto-container">
          <div className="shop-catalog__toolbar item-shorting clearfix">
            <div className="left-column pull-left clearfix">
              <div className="text">
                <p>
                  {filteredProducts.length}{' '}
                  {filteredProducts.length === 1 ? 'prodotto' : 'prodotti'}
                </p>
              </div>
            </div>
          </div>

          <div className="shop-catalog__filters">
            {categoryFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className={`shop-catalog__filter${activeCategory === filter.id ? ' shop-catalog__filter--active' : ''}`}
                onClick={() => setActiveCategory(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="shop-grid-content">
            <div className="row clearfix">
              {filteredProducts.map((product) => (
                <ShopProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>

          {!filteredProducts.length ? (
            <div className="shop-catalog__empty centred">
              <p>Nessun prodotto in questa categoria.</p>
              <button
                type="button"
                className="theme-btn-one"
                onClick={() => setActiveCategory('all')}
              >
                <span>Vedi tutti i prodotti</span>
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </Layout>
  );
}
