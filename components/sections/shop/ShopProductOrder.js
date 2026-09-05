'use client';

import { useState } from 'react';
import ShopCartAddedModal from '@/components/sections/shop/ShopCartAddedModal';
import { useShopCart } from '@/components/providers/ShopCartProvider';

export default function ShopProductOrder({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [isAddedModalOpen, setIsAddedModalOpen] = useState(false);
  const { addItem } = useShopCart();

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const handleQuantityChange = (event) => {
    const parsed = Number.parseInt(event.target.value.replace(/\D/g, ''), 10);
    setQuantity(Number.isFinite(parsed) && parsed > 0 ? parsed : 1);
  };

  const handleAddToCart = () => {
    addItem(product, quantity);
    setIsAddedModalOpen(true);
  };

  return (
    <>
      <div className="shop-product-order">
        <div className="shop-product-order__actions">
          <div className="shop-quantity" role="group" aria-label="Quantità">
            <button
              type="button"
              className="shop-quantity__btn"
              onClick={decreaseQuantity}
              disabled={quantity <= 1}
              aria-label="Diminuisci quantità"
            >
              −
            </button>
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              className="shop-quantity__input"
              value={quantity}
              onChange={handleQuantityChange}
              aria-label="Quantità"
            />
            <button
              type="button"
              className="shop-quantity__btn"
              onClick={increaseQuantity}
              aria-label="Aumenta quantità"
            >
              +
            </button>
          </div>

          <button type="button" className="theme-btn-one shop-product-order__cart-btn" onClick={handleAddToCart}>
            <span>Aggiungi al Carrello</span>
          </button>
        </div>
      </div>

      <ShopCartAddedModal
        isOpen={isAddedModalOpen}
        onClose={() => setIsAddedModalOpen(false)}
        product={product}
        quantity={quantity}
      />
    </>
  );
}
