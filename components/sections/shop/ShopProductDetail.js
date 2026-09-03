import {
  formatShopPrice,
} from '@/lib/shopProducts';
import { formatShopProductDescription } from '@/lib/formatShopProductDescription';
import ShopProductAccordion from '@/components/sections/shop/ShopProductAccordion';
import ShopProductAvailability from '@/components/sections/shop/ShopProductAvailability';
import ShopProductBreadcrumb from '@/components/sections/shop/ShopProductBreadcrumb';
import ShopProductOrder from '@/components/sections/shop/ShopProductOrder';
import ShopProductSpecs from '@/components/sections/shop/ShopProductSpecs';
import ShopRelatedProducts from '@/components/sections/shop/ShopRelatedProducts';

export default function ShopProductDetail({ product, relatedProducts }) {
  const description = formatShopProductDescription(product.description, product.alcohol);

  return (
    <section className="shop-details p_relative shop-product-page">
      <div className="shop-details-content">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <figure className="image-box shop-product-page__image">
                <img src={product.image} alt={product.imageAlt ?? product.name} />
              </figure>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <ShopProductBreadcrumb category={product.category} />
                <h2>{product.name}</h2>
                <h4>{formatShopPrice(product.price)}</h4>
                <ShopProductAvailability availability={product.availability} />
                <div className="text">
                  <p>{product.shortDescription}</p>
                </div>

                <ShopProductSpecs specs={product.specs} />

                <ShopProductOrder product={product} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shop-product-accordion-section">
        <div className="auto-container">
          <ShopProductAccordion
            description={description}
            characteristics={product.characteristics}
            pairings={product.pairings}
          />
        </div>
      </div>

      <ShopRelatedProducts products={relatedProducts} />
    </section>
  );
}
