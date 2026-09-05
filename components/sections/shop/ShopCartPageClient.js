'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useShopCart } from '@/components/providers/ShopCartProvider';
import ShopCartItemImage from '@/components/sections/shop/ShopCartItemImage';
import ShopCartEmailForm from '@/components/sections/shop/ShopCartEmailForm';
import { buildShopCartWhatsAppHref } from '@/lib/shopOrder';
import { formatShopPrice } from '@/lib/shopProducts';
import { getCartSubtotal } from '@/lib/shopCart';

function CartPageTitle() {
  return (
    <header className="shop-cart-page__header centred">
      <h1 className="shop-cart-page__title">Carrello</h1>
    </header>
  );
}

function CartItemQuantity({ item, setItemQuantity }) {
  return (
    <div className="shop-cart-page__quantity">
      <div className="shop-quantity" role="group" aria-label={`Quantità ${item.name}`}>
        <button
          type="button"
          className="shop-quantity__btn"
          onClick={() => setItemQuantity(item.slug, Math.max(1, item.quantity - 1))}
          disabled={item.quantity <= 1}
          aria-label="Diminuisci quantità"
        >
          −
        </button>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          className="shop-quantity__input"
          value={item.quantity}
          onChange={(event) => {
            const parsed = Number.parseInt(event.target.value.replace(/\D/g, ''), 10);
            setItemQuantity(item.slug, Number.isFinite(parsed) && parsed > 0 ? parsed : 1);
          }}
          aria-label="Quantità"
        />
        <button
          type="button"
          className="shop-quantity__btn"
          onClick={() => setItemQuantity(item.slug, item.quantity + 1)}
          aria-label="Aumenta quantità"
        >
          +
        </button>
      </div>
    </div>
  );
}

function CartItemRemoveButton({ item, removeItem }) {
  return (
    <button
      type="button"
      className="remove-btn shop-cart-page__remove"
      onClick={() => removeItem(item.slug)}
      aria-label={`Rimuovi ${item.name}`}
    >
      <i className="icon-36"></i>
    </button>
  );
}

function CartOrderSummary({ subtotal, whatsappHref, orderItems, isEmailFormOpen, onEmailClick }) {
  return (
    <div className="cart-total shop-cart-page__summary">
      <div className="row clearfix">
        <div className="col-xl-5 col-lg-12 col-md-12 offset-xl-7 cart-column">
          <div className="total-cart-box clearfix shop-cart-page__checkout-box">
            <h3 className="fs_20 fw_bold lh_30 d_block pb_20">Riepilogo ordine</h3>
            <ul className="list clearfix mb_30">
              <li>
                Totale indicativo:<span>{formatShopPrice(subtotal)}</span>
              </li>
            </ul>
            <p className="shop-cart-page__note">
              Scegli come inviarci l&apos;ordine: completeremo insieme disponibilità, consegna o ritiro. I prezzi
              sono indicativi.
            </p>
            <div className="shop-cart-page__order-actions">
              <Link
                href={whatsappHref}
                className="theme-btn-one shop-cart-page__order-action shop-cart-page__order-action--whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <i className="fab fa-whatsapp" aria-hidden="true" /> Ordina su WhatsApp
                </span>
              </Link>
              <button
                type="button"
                className={`theme-btn-one shop-cart-page__order-action shop-cart-page__order-action--email${isEmailFormOpen ? ' shop-cart-page__order-action--active' : ''}`}
                onClick={onEmailClick}
                aria-expanded={isEmailFormOpen}
                aria-controls="shop-cart-email-form"
              >
                <span>
                  <i className="far fa-envelope" aria-hidden="true" /> Ordina per email
                </span>
              </button>
            </div>

            <ShopCartEmailForm isOpen={isEmailFormOpen} orderItems={orderItems} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShopCartPageClient() {
  const { items, isHydrated, setItemQuantity, removeItem } = useShopCart();
  const [isEmailFormOpen, setIsEmailFormOpen] = useState(false);

  const subtotal = getCartSubtotal(items);
  const orderItems = items.map((item) => ({
    product: item,
    quantity: item.quantity,
  }));
  const whatsappHref = buildShopCartWhatsAppHref(orderItems);

  if (!isHydrated) {
    return (
      <section className="cart-section shop-cart-page">
        <div className="auto-container">
          <CartPageTitle />
          <p className="shop-cart-page__loading">Caricamento carrello…</p>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="cart-section shop-cart-page">
        <div className="auto-container">
          <CartPageTitle />
          <div className="shop-cart-page__empty">
            <h3>Il carrello è vuoto</h3>
            <p>Aggiungi i prodotti dallo shop e invia la richiesta quando sei pronto.</p>
            <Link href="/shop" className="theme-btn-one">
              Vai allo Shop
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-section shop-cart-page">
      <div className="auto-container">
        <CartPageTitle />

        <div className="shop-cart-page__desktop-table">
          <div className="row clearfix">
            <div className="col-lg-12 col-md-12 col-sm-12 table-column">
              <div className="table-outer">
                <table className="cart-table">
                  <thead className="cart-header">
                    <tr>
                      <th>&nbsp;</th>
                      <th className="prod-column">Prodotto</th>
                      <th>&nbsp;</th>
                      <th>&nbsp;</th>
                      <th className="price">Prezzo</th>
                      <th className="quantity">Quantità</th>
                      <th>Subtotale</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.slug}>
                        <td colSpan="4" className="prod-column">
                          <div className="column-box">
                            <CartItemRemoveButton item={item} removeItem={removeItem} />
                            <div className="prod-thumb">
                              <ShopCartItemImage item={item} />
                            </div>
                            <div className="prod-title">
                              <Link href={`/shop/${item.slug}`}>{item.name}</Link>
                            </div>
                          </div>
                        </td>
                        <td className="price">{formatShopPrice(item.price)}</td>
                        <td className="qty">
                          <CartItemQuantity item={item} setItemQuantity={setItemQuantity} />
                        </td>
                        <td className="sub-total">{formatShopPrice(item.price * item.quantity)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="shop-cart-page__mobile-list">
          {items.map((item) => (
            <article key={item.slug} className="shop-cart-page__mobile-item">
              <div className="shop-cart-page__mobile-head">
                <div className="shop-cart-page__mobile-thumb">
                  <ShopCartItemImage item={item} />
                </div>
                <div className="shop-cart-page__mobile-title-wrap">
                  <Link href={`/shop/${item.slug}`} className="shop-cart-page__mobile-title">
                    {item.name}
                  </Link>
                  <CartItemRemoveButton item={item} removeItem={removeItem} />
                </div>
              </div>

              <div className="shop-cart-page__mobile-row">
                <span className="shop-cart-page__mobile-label">Prezzo</span>
                <span className="shop-cart-page__mobile-value">{formatShopPrice(item.price)}</span>
              </div>

              <div className="shop-cart-page__mobile-row">
                <span className="shop-cart-page__mobile-label">Quantità</span>
                <CartItemQuantity item={item} setItemQuantity={setItemQuantity} />
              </div>

              <div className="shop-cart-page__mobile-row">
                <span className="shop-cart-page__mobile-label">Subtotale</span>
                <span className="shop-cart-page__mobile-value shop-cart-page__mobile-value--total">
                  {formatShopPrice(item.price * item.quantity)}
                </span>
              </div>
            </article>
          ))}
        </div>

        <CartOrderSummary
          subtotal={subtotal}
          whatsappHref={whatsappHref}
          orderItems={orderItems}
          isEmailFormOpen={isEmailFormOpen}
          onEmailClick={() => setIsEmailFormOpen((current) => !current)}
        />
      </div>
    </section>
  );
}
