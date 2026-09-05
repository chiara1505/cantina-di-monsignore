'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  getCartItemCount,
  mergeCartItem,
  readShopCartFromStorage,
  removeCartItem,
  updateCartItemQuantity,
  writeShopCartToStorage,
} from '@/lib/shopCart';

const ShopCartContext = createContext(null);

export function ShopCartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setItems(readShopCartFromStorage());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    writeShopCartToStorage(items);
  }, [items, isHydrated]);

  const addItem = useCallback((product, quantity = 1) => {
    setItems((current) => mergeCartItem(current, product, quantity));
  }, []);

  const setItemQuantity = useCallback((slug, quantity) => {
    setItems((current) => updateCartItemQuantity(current, slug, quantity));
  }, []);

  const removeItem = useCallback((slug) => {
    setItems((current) => removeCartItem(current, slug));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const value = useMemo(
    () => ({
      items,
      itemCount: getCartItemCount(items),
      isHydrated,
      addItem,
      setItemQuantity,
      removeItem,
      clearCart,
    }),
    [items, isHydrated, addItem, setItemQuantity, removeItem, clearCart],
  );

  return (
    <ShopCartContext.Provider value={value}>
      {children}
    </ShopCartContext.Provider>
  );
}

export function useShopCart() {
  const context = useContext(ShopCartContext);

  if (!context) {
    throw new Error('useShopCart must be used within ShopCartProvider');
  }

  return context;
}
