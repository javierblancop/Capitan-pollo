import React, { useState } from 'react';
import { Camera, ZoomIn, X, ShoppingBag, Flame } from 'lucide-react';
import { MenuItem, MENU_ITEMS } from '../data/menuData';
import { APP_IMAGES } from '../assets/images';

interface GallerySectionProps {
  onDirectAddToCart: (item: MenuItem) => void;
  onSelectItemForCustomize: (item: MenuItem) => void;
}

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  fallback: string;
  caption: string;
  menuItemId?: string;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  onDirectAddToCart,
  onSelectItemForCustomize,
}) => {
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-asador-fuego',
      title: 'Pollos Asándose al Fuego Lento',
      category: 'Directo del Asador',
      image: APP_IMAGES.galeriaAsadorFuego,
      fallback: '/images/galeria_asador_fuego_1793708539453.jpg',
      caption: 'Horno tradicional con brasas encendidas cada mañana en Torremolinos. Asado continuo que sella los jugos y dora la piel a la perfección.',
      menuItemId: 'pollo-entero',
    },
    {
      id: 'g-campero-capitan',
      title: 'El Campero Capitán Pollo Especial',
      category: 'Camperos Malagueños',
      image: APP_IMAGES.camperoMalagueno,
      fallback: '/images/campero_malagueno_1793707370990.jpg',
      caption: 'Pan de mollete artesano prensado a la plancha, pollo asado desmigado, queso fundido, bacon, huevo frito y mayonesa casera.',
      menuItemId: 'campero-capitan',
    },
    {
      id: 'g-campero-bbq',
      title: 'Campero Barbacoa & Bacon Crunch',
      category: 'Especialidades',
      image: APP_IMAGES.camperoBbqBacon,
      fallback: '/images/campero_bbq_bacon_1793708537080.jpg',
      caption: 'Auténtica locura de sabor: pollo asado con salsa barbacoa ahumada, queso cheddar derretido y cebolla crujiente.',
      menuItemId: 'campero-bbq',
    },
    {
      id: 'g-croquetas',
      title: 'Croquetas Caseras de Pollo Asado',
      category: 'Raciones Caseras',
      image: APP_IMAGES.croquetasPollo,
      fallback: '/images/croquetas_pollo_asado_1793708538939.jpg',
      caption: 'Bechamel ultra melosa hecha con los restos del pollo asado y rebozado extra crujiente. Una delicia imprescindible.',
      menuItemId: 'croquetas-pollo',
    },
    {
      id: 'g-empanadas',
      title: 'Empanadas Artesanas Rellenas',
      category: 'Horno Tradicional',
      image: APP_IMAGES.empanadasArtesanas,
      fallback: '/images/empanadas_artesanas_horno_1793708538759.jpg',
      caption: 'Masa dorada y crujiente rellena de pollo al verdeo o carne criolla bien jugosa.',
      menuItemId: 'empanadas-artesanas',
    },
    {
      id: 'g-patatas-jugo',
      title: 'Patatas Asadas al Jugo del Pollo',
      category: 'Guarnición Estrella',
      image: APP_IMAGES.patatasAsadasJugo,
      fallback: '/images/patatas_asadas_jugo_1793708539202.jpg',
      caption: 'Confitadas en cazuela con el caldo natural del asado, ajo, laurel y especias mediterráneas.',
      menuItemId: 'patatas-al-jugo',
    },
    {
      id: 'g-tarta-queso',
      title: 'Tarta de Queso Casera al Horno',
      category: 'Postre de Autor',
      image: APP_IMAGES.tartaQuesoCasera,
      fallback: '/images/tarta_queso_casera_1793707371029.jpg',
      caption: 'Superficie caramelizada y corazón cremoso. El postre favorito de nuestros clientes en Torremolinos.',
      menuItemId: 'tarta-queso-casera',
    },
    {
      id: 'g-pollo-raciones',
      title: 'Raciones con Patatas y Aliño',
      category: 'Comida para Llevar',
      image: APP_IMAGES.polloAsadoAlino,
      fallback: '/images/pollo_asado_alino_1793707371324.jpg',
      caption: 'Platos recién preparados con su ración de patatas doradas y extra de salsa casera.',
      menuItemId: 'medio-pollo',
    },
  ];

  const getMenuItemForPhoto = (menuItemId?: string) => {
    if (!menuItemId) return null;
    return MENU_ITEMS.find((m) => m.id === menuItemId) || null;
  };

  return (
    <section className="py-14 sm:py-20 md:py-28 bg-stone-950 text-white relative overflow-hidden border-t border-stone-800">
      {/* Background warm ember glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            <span>Galería del Asador</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white text-balance">
            Directo del horno a tu mesa
          </h2>

          <p className="text-stone-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Así cocinamos en Capitán Pollo: ingredientes frescos, recetas de toda la vida y el punto exacto de dorado y jugo. Toca cualquier foto para ver los detalles.
          </p>
        </div>

        {/* Featured Big Hero Shot in Gallery */}
        <div className="mb-6 sm:mb-8">
          <div
            onClick={() => setActivePhoto(galleryItems[0])}
            className="group relative rounded-3xl overflow-hidden border border-stone-700/80 shadow-2xl cursor-pointer bg-stone-900 aspect-16/9 md:aspect-21/9"
          >
            <img
              src={galleryItems[0].image}
              onError={(e) => {
                e.currentTarget.src = galleryItems[0].fallback;
              }}
              alt={galleryItems[0].title}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500 text-stone-950 text-xs font-bold uppercase tracking-wider">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{galleryItems[0].category}</span>
                </span>
                <h3 className="text-xl sm:text-3xl font-extrabold text-white">
                  {galleryItems[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
                  {galleryItems[0].caption}
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/20 backdrop-blur-md text-white font-bold text-xs hover:bg-white/30 transition-colors shrink-0">
                <ZoomIn className="w-4 h-4" />
                <span>Ampliar foto</span>
              </div>
            </div>
          </div>
        </div>

        {/* Masonry / Grid for the other 7 dishes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {galleryItems.slice(1).map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-lg cursor-pointer aspect-4/3 flex flex-col justify-end"
            >
              <img
                src={item.image}
                onError={(e) => {
                  e.currentTarget.src = item.fallback;
                }}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity group-hover:via-black/40" />

              <div className="relative z-10 p-3 sm:p-4 space-y-0.5 sm:space-y-1">
                <span className="text-[10px] sm:text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                  {item.category}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight line-clamp-1 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h4>
              </div>

              <div className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/60 backdrop-blur-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="bg-stone-900 border border-stone-700 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[92dvh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-64 sm:h-88 bg-stone-950 overflow-hidden shrink-0">
              <img
                src={activePhoto.image}
                onError={(e) => {
                  e.currentTarget.src = activePhoto.fallback;
                }}
                alt={activePhoto.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 min-w-[44px] min-h-[44px] rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors"
                aria-label="Cerrar foto"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Details & Action */}
            <div className="p-4 sm:p-6 space-y-4 overflow-y-auto">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {activePhoto.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {activePhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                  {activePhoto.caption}
                </p>
              </div>

              {/* Action if linked to a menu item */}
              {activePhoto.menuItemId && (() => {
                const menuItem = getMenuItemForPhoto(activePhoto.menuItemId);
                if (!menuItem) return null;

                return (
                  <div className="pt-3 border-t border-stone-800 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-stone-400">Precio en carta</p>
                      <p className="text-xl font-extrabold text-amber-400 tabular-nums">
                        {menuItem.price.toFixed(2).replace('.', ',')} €
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          if (menuItem.options && menuItem.options.length > 0) {
                            onSelectItemForCustomize(menuItem);
                          } else {
                            onDirectAddToCart(menuItem);
                          }
                          setActivePhoto(null);
                        }}
                        className="min-h-[44px] px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors active:scale-95"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Añadir a mi pedido</span>
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
