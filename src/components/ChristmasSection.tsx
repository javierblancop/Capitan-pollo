import React from 'react';
import { Sparkles, Calendar, MessageCircle, Plus, Check } from 'lucide-react';
import { APP_IMAGES } from '../assets/images';
import { MenuItem, MENU_ITEMS, RESTAURANT_INFO } from '../data/menuData';

interface ChristmasSectionProps {
  onDirectAddToCart: (item: MenuItem) => void;
  onSelectItemForCustomize: (item: MenuItem) => void;
  addedItemToastId: string | null;
}

export const ChristmasSection: React.FC<ChristmasSectionProps> = ({
  onDirectAddToCart,
  onSelectItemForCustomize,
  addedItemToastId,
}) => {
  const christmasItems = MENU_ITEMS.filter((item) => item.category === 'navidad');

  return (
    <section id="navidad" className="py-14 sm:py-20 md:py-28 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white relative overflow-hidden border-t-2 border-amber-500/40">
      {/* Decorative festive ambient glows */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-bold uppercase tracking-wider shadow-lg">
            <span>🎄</span>
            <span>Campaña Especial de Navidad</span>
            <span>⭐</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-balance">
            Estas Navidades, disfruta en familia sin pasar horas en la cocina
          </h2>

          <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Preparamos tu comida de <strong className="text-amber-300">Nochebuena, Navidad, Nochevieja y Reyes</strong> con recetas tradicionales navideñas, asado a fuego lento y los mejores productos de Torremolinos.
          </p>
        </div>

        {/* Hero Feast Banner */}
        <div className="mb-12 sm:mb-16">
          <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/40 shadow-2xl bg-stone-900 group">
            <img
              src={APP_IMAGES.polloAsadoNavidad}
              alt="Banquete de Navidad con Pollo Asado, manzanas, piñones y mesa festiva en Torremolinos"
              className="w-full h-72 xs:h-80 sm:h-96 md:h-120 object-cover group-hover:scale-103 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

            {/* Float Festive Banner */}
            <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
              <span>🎅</span>
              <span>Encargos Abiertos para Nochebuena y Nochevieja</span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
              <div className="space-y-1.5 max-w-xl">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Edición Limitada Fiestas
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                  Pollo Asado Relleno Navideño & Menús Familiares
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Con frutos secos, piñones, orejones y reducción de Pedro Ximénez. Te lo entregamos recién horneado y listo para servir en tu mesa.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.phoneClean}?text=Hola%20Capit%C3%A1n%20Pollo%2C%20quisiera%20reservar%20el%20Men%C3%BA%20Navide%C3%B1o`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-xl active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Reservar Menú Navideño</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Christmas Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {christmasItems.map((item) => {
            const wasJustAdded = addedItemToastId === item.id;
            const hasOptions = item.options && item.options.length > 0;

            return (
              <div
                key={item.id}
                className="bg-stone-900/90 rounded-3xl border border-amber-500/30 overflow-hidden shadow-xl flex flex-col justify-between hover:border-amber-400 transition-all duration-300"
              >
                <div className="relative h-52 sm:h-56 bg-stone-950 overflow-hidden">
                  <img
                    src={item.image || APP_IMAGES.polloAsadoNavidad}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-106 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-black px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
                    <span>🎄</span>
                    <span>Especial Navidad</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-stone-950/85 backdrop-blur-md text-amber-400 font-extrabold text-base px-3 py-1 rounded-xl shadow-md border border-stone-700/60 tabular-nums">
                    {item.price.toFixed(2).replace('.', ',')} €
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-extrabold text-white leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-800 flex items-center justify-between gap-2">
                    <span className="text-xs text-amber-400 font-semibold">
                      {hasOptions ? 'Opciones festivas' : 'Listo para encargar'}
                    </span>

                    <button
                      onClick={() => {
                        if (hasOptions) {
                          onSelectItemForCustomize(item);
                        } else {
                          onDirectAddToCart(item);
                        }
                      }}
                      className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 shadow-md ${
                        wasJustAdded
                          ? 'bg-emerald-600 text-white'
                          : 'bg-amber-500 hover:bg-amber-400 text-stone-950'
                      }`}
                      aria-label={`Añadir ${item.name}`}
                    >
                      {wasJustAdded ? (
                        <>
                          <Check className="w-4 h-4 stroke-3" />
                          <span>¡Añadido!</span>
                        </>
                      ) : hasOptions ? (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Personalizar</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Añadir al Pedido</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Christmas Opening Schedule Box */}
        <div className="p-5 sm:p-8 rounded-3xl bg-stone-900 border border-stone-700/80 shadow-2xl space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800 pb-4">
            <div className="flex items-center gap-2 text-amber-400">
              <Calendar className="w-5 h-5" />
              <h3 className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                Horarios Especiales de Navidad y Fiestas
              </h3>
            </div>
            <span className="text-xs text-amber-300 font-semibold bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
              ⚠️ Importante: Reservar con 48h de antelación
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            {RESTAURANT_INFO.christmasHours.map((ch, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-stone-950/80 border border-stone-800 space-y-1">
                <p className="font-bold text-amber-400">{ch.day}</p>
                <p className="text-white font-semibold">{ch.hours}</p>
                <p className="text-[11px] text-stone-400">{ch.note}</p>
              </div>
            ))}
          </div>

          <div className="pt-2 text-center sm:text-right">
            <a
              href={`https://wa.me/${RESTAURANT_INFO.phoneClean}?text=Hola%20Capit%C3%A1n%20Pollo%2C%20quisiera%20consultar%20los%20encargos%20para%20Navidad`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 underline"
            >
              <span>Consultar disponibilidad y dudas de Navidad por WhatsApp</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
