import React, { useState, useMemo } from 'react';
import { Search, Plus, Star, Check, Sparkles } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS, MenuItem } from '../data/menuData';

interface MenuSectionProps {
  onSelectItemForCustomize: (item: MenuItem) => void;
  onDirectAddToCart: (item: MenuItem) => void;
  addedItemToastId: string | null;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onSelectItemForCustomize,
  onDirectAddToCart,
  addedItemToastId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyGlutenFree, setOnlyGlutenFree] = useState(false);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'todos' && item.category !== selectedCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc) return false;
      }
      // Gluten free filter
      if (onlyGlutenFree) {
        const isGlutenFree = item.allergens?.some((a) =>
          a.toLowerCase().includes('sin gluten')
        );
        if (!isGlutenFree) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, onlyGlutenFree]);

  return (
    <section id="carta" className="py-14 sm:py-20 md:py-28 bg-stone-50 text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Nuestra Carta Completa</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-stone-900">
              Platos con Fotos y Precios
            </h2>
            <p className="text-stone-600 text-sm sm:text-base md:text-lg max-w-xl">
              Platos preparados a diario con ingredientes frescos. Elige lo que te apetezca para encargar al instante por WhatsApp o llamando por teléfono.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80 shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar plato o ingrediente..."
              className="w-full pl-10 pr-4 py-3 min-h-[46px] text-base sm:text-sm bg-white border border-stone-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-xs transition-all"
            />
          </div>
        </div>

        {/* Category Filter Tabs & Dietary Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-stone-200 mb-8 sm:mb-10">
          {/* Categories Segmented Control with momentum touch scroll */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 -mx-3 px-3 sm:mx-0 sm:px-0">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 min-h-[44px] text-xs sm:text-sm font-bold rounded-xl transition-all whitespace-nowrap shrink-0 flex items-center justify-center ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-md shadow-amber-600/25 scale-[1.02]'
                      : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Gluten-free toggle */}
          <button
            onClick={() => setOnlyGlutenFree(!onlyGlutenFree)}
            className={`inline-flex items-center gap-2 px-3.5 py-2.5 min-h-[44px] text-xs font-bold rounded-xl border transition-colors self-start sm:self-auto shrink-0 ${
              onlyGlutenFree
                ? 'bg-amber-100 border-amber-500 text-amber-900 shadow-xs'
                : 'bg-white border-stone-300 text-stone-700 hover:border-stone-400'
            }`}
          >
            <span
              className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                onlyGlutenFree ? 'bg-amber-600 border-amber-600 text-white' : 'border-stone-400'
              }`}
            >
              {onlyGlutenFree && '✓'}
            </span>
            <span>Apto Sin Gluten</span>
          </button>
        </div>

        {/* Dishes Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-14 text-center bg-white rounded-3xl border border-stone-200 p-8 shadow-xs">
            <p className="text-stone-600 font-semibold text-base sm:text-lg">
              No hemos encontrado ningún plato con esos criterios.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('todos');
                setSearchQuery('');
                setOnlyGlutenFree(false);
              }}
              className="mt-4 text-sm font-bold text-amber-700 hover:underline min-h-[44px] px-4 py-2 inline-flex items-center justify-center"
            >
              Restablecer todos los filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredItems.map((item) => {
              const wasJustAdded = addedItemToastId === item.id;
              const hasOptions = item.options && item.options.length > 0;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl border border-stone-200/90 hover:border-amber-400/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  {/* High Quality Photo */}
                  <div className="relative h-52 sm:h-56 bg-stone-100 overflow-hidden">
                    {item.image ? (
                      <img
                        src={item.image}
                        onError={(e) => {
                          if (item.image && !item.image.startsWith('/images/')) {
                            const filename = item.image.split('/').pop()?.split('?')[0];
                            if (filename) e.currentTarget.src = `/images/${filename}`;
                          }
                        }}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-stone-100 text-amber-800 p-4 text-center">
                        <span className="text-4xl mb-1">🍗</span>
                        <span className="text-xs font-bold uppercase tracking-wider">{item.name}</span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Popular / Specialty Badge */}
                    {item.isPopular && (
                      <div className="absolute top-3 left-3 bg-amber-500 text-stone-950 text-xs font-black px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-stone-950" />
                        <span>Recomendado</span>
                      </div>
                    )}

                    {/* Price Tag Overlay on image */}
                    <div className="absolute bottom-3 right-3 bg-stone-950/85 backdrop-blur-md text-amber-400 font-extrabold text-base px-3 py-1 rounded-xl shadow-md border border-stone-700/60 tabular-nums">
                      {item.price.toFixed(2).replace('.', ',')} €
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-extrabold text-stone-900 leading-snug group-hover:text-amber-700 transition-colors">
                        {item.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Allergens unboxed text */}
                      {item.allergens && item.allergens.length > 0 && (
                        <div className="pt-1 flex items-center gap-1.5 text-[11px] text-stone-400 flex-wrap">
                          <span className="font-semibold text-stone-500">Alérgenos:</span>
                          <span>{item.allergens.join(' · ')}</span>
                        </div>
                      )}
                    </div>

                    {/* Action button */}
                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                      <span className="text-xs text-stone-500 font-medium">
                        {hasOptions ? 'Personaliza tu gusto' : 'Recién preparado'}
                      </span>

                      <button
                        onClick={() => {
                          if (hasOptions) {
                            onSelectItemForCustomize(item);
                          } else {
                            onDirectAddToCart(item);
                          }
                        }}
                        className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 shadow-sm ${
                          wasJustAdded
                            ? 'bg-emerald-600 text-white shadow-emerald-600/30'
                            : 'bg-amber-600 hover:bg-amber-500 text-white shadow-amber-600/30'
                        }`}
                        aria-label={hasOptions ? `Personalizar ${item.name}` : `Añadir ${item.name}`}
                      >
                        {wasJustAdded ? (
                          <>
                            <Check className="w-4 h-4 stroke-3" />
                            <span>¡Añadido!</span>
                          </>
                        ) : hasOptions ? (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>Opciones</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            <span>Añadir</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
