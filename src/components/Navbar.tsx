import React, { useState, useEffect } from 'react';
import { ShoppingBag, Phone, Menu as MenuIcon, X, Camera } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-stone-950/95 backdrop-blur-md text-white border-b border-stone-800 pt-safe">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
        {/* Zone 1: Brand wordmark - Enlarged per user request */}
        <a
          href="#"
          className="group flex items-center gap-2 sm:gap-2.5 min-h-[48px] py-1"
          aria-label="Capitán Pollo - Inicio"
        >
          {/* CSS selector 1 targeted: Chicken icon with holiday accent */}
          <span className="relative flex items-center text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110 drop-shadow-md" aria-hidden="true">
            <span className="absolute -top-2.5 -left-1 text-base select-none">🎅</span>
            🍗
          </span>

          {/* CSS selector 2 targeted: Capitán Pollo text made larger and more prominent */}
          <span className="text-2xl sm:text-3xl lg:text-3xl font-black tracking-tight text-amber-400 group-hover:text-amber-300 transition-colors drop-shadow-sm whitespace-nowrap">
            Capitán Pollo
          </span>
        </a>

        {/* Zone 2: Streamlined Navigation links (removed carta, kept high value items) */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-stone-300">
          <a
            href="#navidad"
            className="text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 py-2 flex items-center gap-1.5 font-bold"
          >
            <span>🎄</span>
            <span>Especial Navidad</span>
          </a>
          <a
            href="#especialidades"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-2 font-medium"
          >
            Especialidades
          </a>
          <a
            href="#galeria"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-2 flex items-center gap-1 font-medium"
          >
            <Camera className="w-3.5 h-3.5 text-amber-400" />
            <span>Fotos del Asador</span>
          </a>
          <a
            href="#como-llegar"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-2"
          >
            Cómo Llegar
          </a>
          <a
            href="#opiniones"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 py-2"
          >
            Opiniones (4.8★)
          </a>
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] text-xs font-semibold text-stone-300 hover:text-white bg-stone-800/80 hover:bg-stone-800 rounded-xl border border-stone-700/60 transition-colors whitespace-nowrap shrink-0"
            title="Llamar al asador"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{RESTAURANT_INFO.phoneDisplay}</span>
          </a>

          <button
            onClick={onOpenCart}
            className="relative inline-flex items-center gap-2 px-3 sm:px-4 py-2 min-h-[44px] text-xs sm:text-sm font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md shadow-amber-950/30 transition-all whitespace-nowrap shrink-0 active:scale-95"
            aria-label={`Ver pedido para llevar (${cartCount} platos)`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden xs:inline">Mi Pedido</span>
            {cartCount > 0 && (
              <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-black bg-stone-950 text-amber-400 rounded-full tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer nav */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-18 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative bg-stone-950 border-b border-stone-800 px-4 pt-3 pb-8 space-y-2 shadow-2xl max-h-[calc(100dvh-4.5rem)] overflow-y-auto">
            <a
              href="#navidad"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[48px] px-3.5 py-2 text-base font-bold text-amber-400 hover:bg-stone-900 rounded-xl transition-colors gap-2"
            >
              <span>🎄</span>
              <span>Especial Navidad & Fiestas</span>
            </a>
            <a
              href="#especialidades"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[48px] px-3.5 py-2 text-base font-semibold text-stone-200 hover:bg-stone-900 hover:text-amber-400 rounded-xl transition-colors"
            >
              Nuestras Especialidades
            </a>
            <a
              href="#galeria"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[48px] px-3.5 py-2 text-base font-semibold text-stone-200 hover:bg-stone-900 hover:text-amber-400 rounded-xl transition-colors gap-2"
            >
              <Camera className="w-4 h-4 text-amber-400" />
              <span>Fotos del Asador</span>
            </a>
            <a
              href="#como-llegar"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[48px] px-3.5 py-2 text-base font-semibold text-stone-200 hover:bg-stone-900 hover:text-amber-400 rounded-xl transition-colors"
            >
              Cómo Llegar (Av. Joan Miró, 4)
            </a>
            <a
              href="#opiniones"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[48px] px-3.5 py-2 text-base font-semibold text-stone-200 hover:bg-stone-900 hover:text-amber-400 rounded-xl transition-colors"
            >
              Opiniones de Clientes (4.8★)
            </a>

            <div className="pt-3 border-t border-stone-800 space-y-2">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-amber-600 hover:bg-amber-500 transition-colors min-h-[48px]"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Llamar al {RESTAURANT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
