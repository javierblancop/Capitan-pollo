import React from 'react';
import { Sparkles } from 'lucide-react';
import { MenuItem } from '../data/menuData';
import { APP_IMAGES } from '../assets/images';

interface SpecialtiesProps {
  onSelectItem: (item: MenuItem) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesProps> = ({ onSelectItem }) => {
  const specialties = [
    {
      title: 'Pollo Asado con Aliño Casero',
      subtitle: 'La receta dorada y jugosa de Torremolinos',
      description:
        'Cada pieza se marina pacientemente en una emulsión de aceite de oliva virgen extra, ajo de la tierra, limón fresco y una mezcla de hierbas silvestres. Asado a temperatura controlada para lograr piel crujiente y carne tierna que se deshace.',
      price: '11,50€',
      priceUnit: 'Pollo entero',
      image: APP_IMAGES.polloAsadoAlino,
      fallback: '/images/pollo_asado_alino_1793707371324.jpg',
      badge: 'El Favorito',
      menuId: 'pollo-entero',
    },
    {
      title: 'Campero Malagueño Capitán Pollo',
      subtitle: 'El clásico de Málaga elevado a obra de arte',
      description:
        'Pan de mollete tostado a la plancha hasta quedar crocante, relleno generoso de pollo asado desmigado y jugoso, queso fundido, huevo a la plancha, bacon crujiente, lechuga, tomate y mayonesa casera suave. ¡Tamaño generoso!',
      price: '7,90€',
      priceUnit: 'Ración completa',
      image: APP_IMAGES.camperoMalagueno,
      fallback: '/images/campero_malagueno_1793707370990.jpg',
      badge: 'Top Ventas',
      menuId: 'campero-capitan',
    },
    {
      title: 'Tarta de Queso Casera al Horno',
      subtitle: 'Cremosa, melosa y con superficie tostada',
      description:
        'Elaborada artesanalmente cada día en nuestro obrador. Con una textura súper cremosa que se funde en la boca y ese punto caramelizado tan característico. La razón por la que todos nuestros clientes siempre dejan hueco.',
      price: '4,50€',
      priceUnit: 'Porción generosa',
      image: APP_IMAGES.tartaQuesoCasera,
      fallback: '/images/tarta_queso_casera_1793707371029.jpg',
      badge: 'Postre Estrella',
      menuId: 'tarta-queso-casera',
    },
  ];

  return (
    <section id="especialidades" className="py-12 sm:py-16 md:py-24 bg-stone-100 text-stone-900">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-2 sm:space-y-3 mb-8 sm:mb-14">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Nuestras Tres Estrellas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 text-balance">
            Lo que hace único a Capitán Pollo
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm md:text-base">
            Platos preparados con cariño cada día para llevar a casa, al trabajo o a la playa en Torremolinos.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {specialties.map((spec, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-52 xs:h-60 sm:h-64 overflow-hidden bg-stone-200">
                <img
                  src={spec.image}
                  onError={(e) => {
                    e.currentTarget.src = spec.fallback;
                  }}
                  alt={spec.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur-xs text-amber-400 text-xs font-semibold px-3 py-1 rounded-full border border-stone-700/60">
                  {spec.badge}
                </div>
              </div>

              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-800">
                    {spec.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {spec.description}
                  </p>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-xl sm:text-2xl font-extrabold text-stone-900 tabular-nums">
                      {spec.price}
                    </span>
                    <span className="text-xs text-stone-500 ml-1">
                      / {spec.priceUnit}
                    </span>
                  </div>

                  <a
                    href="#carta"
                    className="inline-flex items-center justify-center min-h-[44px] px-3.5 py-2 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-amber-100 hover:text-amber-900 rounded-xl transition-colors"
                  >
                    <span>Ver carta</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
