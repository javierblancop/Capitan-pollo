/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { LiveStatusBanner } from './components/LiveStatusBanner';
import { Hero } from './components/Hero';
import { ChristmasSection } from './components/ChristmasSection';
import { SnowEffect } from './components/SnowEffect';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { GallerySection } from './components/GallerySection';
import { MenuSection } from './components/MenuSection';
import { AboutAndStory } from './components/AboutAndStory';
import { LocationAndHours } from './components/LocationAndHours';
import { ReviewsSection } from './components/ReviewsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ItemCustomizeModal } from './components/ItemCustomizeModal';
import { OrderDrawer } from './components/OrderDrawer';
import { CartItem, MenuItem, RESTAURANT_INFO } from './data/menuData';
import { MessageCircle, ShoppingBag, Phone } from 'lucide-react';

const CART_STORAGE_KEY = 'capitan_pollo_cart';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customizingItem, setCustomizingItem] = useState<MenuItem | null>(null);
  const [addedItemToastId, setAddedItemToastId] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Ignore storage errors
    }
  }, [cart]);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (
    item: MenuItem,
    quantity: number,
    options: { [key: string]: string },
    instructions: string
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (ci) =>
          ci.item.id === item.id &&
          JSON.stringify(ci.selectedOptions || {}) === JSON.stringify(options || {}) &&
          (ci.specialInstructions || '') === instructions
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      }

      return [
        ...prev,
        {
          item,
          quantity,
          selectedOptions: options,
          specialInstructions: instructions,
        },
      ];
    });

    triggerAddedFeedback(item.id);
  };

  const handleDirectAddToCart = (item: MenuItem) => {
    handleAddToCart(item, 1, {}, '');
  };

  const triggerAddedFeedback = (id: string) => {
    setAddedItemToastId(id);
    setTimeout(() => {
      setAddedItemToastId((current) => (current === id ? null : current));
    }, 1800);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCart((prev) => {
      const next = [...prev];
      next[index].quantity = newQty;
      return next;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-sans selection:bg-amber-500 selection:text-white w-full overflow-x-hidden relative">
      {/* Gentle holiday falling snow */}
      <SnowEffect />

      {/* Live availability banner */}
      <LiveStatusBanner />

      {/* Primary Navigation */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main content with padding bottom on mobile */}
      <main className="flex-1 pb-24 sm:pb-0">
        {/* Eye-catching Hero */}
        <Hero onOpenOrder={() => setIsCartOpen(true)} />

        {/* Dedicated Christmas Holidays Section */}
        <ChristmasSection
          onDirectAddToCart={handleDirectAddToCart}
          onSelectItemForCustomize={(item) => setCustomizingItem(item)}
          addedItemToastId={addedItemToastId}
        />

        {/* 3 Core Specialties */}
        <SpecialtiesSection
          onSelectItem={(item) => setCustomizingItem(item)}
        />

        {/* Complete Menu with Photos on every dish */}
        <MenuSection
          onSelectItemForCustomize={(item) => setCustomizingItem(item)}
          onDirectAddToCart={handleDirectAddToCart}
          addedItemToastId={addedItemToastId}
        />

        {/* Visual Food Gallery: Directo del Horno a tu Mesa */}
        <div id="galeria">
          <GallerySection
            onDirectAddToCart={handleDirectAddToCart}
            onSelectItemForCustomize={(item) => setCustomizingItem(item)}
          />
        </div>

        {/* Authentic Story & Torremolinos Heritage */}
        <AboutAndStory />

        {/* Location, Google Map & Schedule */}
        <LocationAndHours />

        {/* Real Customer Reviews (4.8★ Google) */}
        <ReviewsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Item Customization Modal */}
      <ItemCustomizeModal
        item={customizingItem}
        onClose={() => setCustomizingItem(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Interactive Takeaway & WhatsApp Order Drawer */}
      <OrderDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Bottom Quick Action Bar for Mobile (< 640px) */}
      <aside
        aria-label="Acciones rápidas de pedido"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-30 px-3 py-2.5 pb-safe bg-stone-950/95 backdrop-blur-md border-t border-stone-800 flex items-center justify-between gap-2 shadow-2xl"
      >
        <a
          href={`tel:${RESTAURANT_INFO.phone}`}
          className="min-h-[46px] min-w-[46px] flex items-center justify-center rounded-xl bg-stone-800 text-stone-200 border border-stone-700/80 shrink-0"
          aria-label="Llamar al asador"
        >
          <Phone className="w-5 h-5 text-amber-400" />
        </a>

        <a
          href={`https://wa.me/${RESTAURANT_INFO.phoneClean}?text=Hola%20Capit%C3%A1n%20Pollo%2C%20quisiera%20hacer%20un%20encargo%20navide%C3%B1o`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[46px] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs shadow-xs"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Asador</span>
        </a>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative min-h-[46px] inline-flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-xl bg-amber-500 active:bg-amber-600 text-stone-950 font-black text-xs shadow-xs shrink-0"
          aria-label={`Mi pedido (${totalCartCount} platos)`}
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Mi Pedido</span>
          {totalCartCount > 0 && (
            <span className="w-4 h-4 rounded-full bg-stone-950 text-amber-400 text-[10px] font-black flex items-center justify-center tabular-nums">
              {totalCartCount}
            </span>
          )}
        </button>
      </aside>
    </div>
  );
}
