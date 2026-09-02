import Link from 'next/link';
import { formatShopPrice } from '@/lib/shopProducts';

export default function ShopRelatedProducts({ products }) {
  if (!products.length) return null;

  return (
    <div className="related-product sec-pad shop-related-products">
      <div className="auto-container">
        <div className="title-box centred">
          <h2>Altri prodotti</h2>
        </div>
        <div className="row clearfix">
          {products.map((product) => (
            <div key={product.slug} className="col-lg-4 col-md-6 col-sm-12 shop-block">
              <div className="shop-block-one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <img src={product.image} alt={product.imageAlt ?? product.name} />
                    </figure>
                    <div className="btn-box">
                      <Link href={`/shop/${product.slug}`} className="theme-btn-one">
                        Scopri
                      </Link>
                    </div>
                  </div>
                  <div className="lower-content">
                    <h5>
                      <Link href={`/shop/${product.slug}`}>{product.name}</Link>
                    </h5>
                    <span className="price">{formatShopPrice(product.price)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
