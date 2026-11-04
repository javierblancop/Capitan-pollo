import React from 'react';
import { Sparkles, ShoppingBag, Check } from 'lucide-react';
import { MenuItem, MENU_ITEMS } from '../data/menuData';
import { APP_IMAGES } from '../assets/images';

interface SpecialtiesProps {
  onSelectItem: (item: MenuItem) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesProps> = ({ onSelectItem }) => {
  // Enfoque exclusivo en los 3 platos más rentables y vendidos de Capitán Pollo
  const top3Dishes = [
    {
      rank: '#1',
      badge: 'Nº 1 Más Vendido · Plato Insignia',
      badgeColor: 'bg-amber-400 text-stone-950 font-bold',
      isHero: true,
      title: 'Pollo Asado con Aliño Casero',
      subtitle: 'La receta dorada y jugosa de Torremolinos',
      description:
        'Marinado con AOVE, ajo fresco y finas hierbas mediterráneas. Piel extra crujiente por fuera y carne tierna que se deshace.',
      features: ['Receta secreta desde 1998', 'Abundante jugo natural del asador', 'Opción 100% sin gluten'],
      price: '11,50€',
      priceUnit: 'Pollo entero',
      image: APP_IMAGES.polloAsadoAlino,
      fallback: '/images/pollo_asado_alino_1793707371324.jpg',
      menuId: 'pollo-entero',
      ctaText: 'Pedir Pollo Entero',
    },
    {
      rank: '#2',
      badge: 'Top Ventas · Clásico de Málaga',
      badgeColor: 'bg-stone-900/90 text-amber-400 border border-amber-400/40',
      isHero: false,
      title: 'Campero Malagueño Capitán',
      subtitle: 'El auténtico mollete tostado y crujiente',
      description:
        'Pan mollete artesanal crujiente a la plancha, relleno con pollo desmigado jugoso, queso fundido, huevo frito, bacon crocante y mayonesa suave.',
      features: ['Tamaño gigante y generoso', 'Pollo asado desmigado al momento', 'Pan mollete crujiente'],
      price: '7,90€',
      priceUnit: 'Ración completa',
      image: APP_IMAGES.camperoMalagueno,
      fallback: '/images/campero_malagueno_1793707370990.jpg',
      menuId: 'campero-capitan',
      ctaText: 'Pedir Campero',
    },
    {
      rank: '#3',
      badge: 'Postre Estrella · 100% Artesanal',
      badgeColor: 'bg-rose-950/90 text-rose-300 border border-rose-500/30',
      isHero: false,
      title: 'Tarta de Queso al Horno',
      subtitle: 'Cremosa, melosa y con punto tostado',
      description:
        'Horneada a diario en nuestro obrador con quesos selectos. Textura súper sedosa que se funde en cada bocado. El broche perfecto de tu comida.',
      features: ['Elaboración artesanal diaria', 'Textura cremosa y melosa', 'Porción generosa'],
      price: '4,50€',
      priceUnit: 'Porción generosa',
      image: APP_IMAGES.tartaQuesoCasera,
      fallback: '/images/tarta_queso_casera_1793707371029.jpg',
      menuId: 'tarta-queso-casera',
      ctaText: 'Pedir Tarta',
    },
  ];

  return (
    <section id="especialidades" className="py-12 sm:py-16 md:py-24 bg-stone-100 text-stone-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2.5 sm:space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-200/60 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Los 3 Más Vendidos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 text-balance">
            Nuestros 3 Platos Estrella
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Concentramos la atención en los 3 favoritos absolutos de nuestros clientes en Torremolinos: máxima calidad, el mejor sabor y los productos más demandados.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {top3Dishes.map((dish, idx) => {
            const menuItem = MENU_ITEMS.find((m) => m.id === dish.menuId);

            return (
              <article
                key={idx}
                className={`relative bg-white rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col group ${
                  dish.isHero
                    ? 'border-amber-400 ring-2 ring-amber-400/50 shadow-lg md:-translate-y-1'
                    : 'border-stone-200/90 shadow-xs hover:shadow-md'
                }`}
              >
                {/* Ranking tag on top right */}
                <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-stone-950/80 backdrop-blur-xs text-amber-400 font-extrabold text-xs flex items-center justify-center border border-amber-400/30 shadow-md">
                  {dish.rank}
                </div>

                <div className="relative h-52 sm:h-56 overflow-hidden bg-stone-200">
                  <img
                    src={dish.image}
                    onError={(e) => {
                      e.currentTarget.src = dish.fallback;
                    }}
                    alt={dish.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div
                    className={`absolute bottom-3 left-3 text-xs font-semibold px-3 py-1 rounded-full shadow-sm backdrop-blur-xs ${dish.badgeColor}`}
                  >
                    {dish.badge}
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors leading-snug">
                        {dish.title}
                      </h3>
                    </div>
                    <p className="text-xs font-semibold text-amber-800">
                      {dish.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {dish.description}
                    </p>

                    {/* Quick Selling Points */}
                    <ul className="pt-2 space-y-1">
                      {dish.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-1.5 text-xs text-stone-700">
                          <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-2xl font-extrabold text-stone-900 tabular-nums">
                        {dish.price}
                      </span>
                      <span className="block text-[11px] text-stone-500">
                        {dish.priceUnit}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (menuItem) {
                          onSelectItem(menuItem);
                        }
                      }}
                      className={`inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 text-xs font-bold rounded-xl transition-all shadow-xs active:scale-95 ${
                        dish.isHero
                          ? 'bg-amber-400 hover:bg-amber-300 text-stone-950 font-extrabold shadow-amber-400/20 shadow-md'
                          : 'bg-stone-900 hover:bg-stone-800 text-amber-300'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>{dish.ctaText}</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Confidence note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-stone-500">
            ¿Quieres ver toda la variedad de raciones, camperos y bebidas? Puedes consultar y pedir todo en nuestro menú directo.
          </p>
        </div>
      </div>
    </section>
  );
};
