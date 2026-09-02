import ShopProductCard from '@/components/sections/shop/ShopProductCard';

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
            <ShopProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
