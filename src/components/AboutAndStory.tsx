import React from 'react';
import { Heart, Flame, UtensilsCrossed, Sparkles } from 'lucide-react';
import { APP_IMAGES } from '../assets/images';

export const AboutAndStory: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-stone-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Story text */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Heart className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Nuestra Historia & Filosofía</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Cocina con alma casera en el corazón de Torremolinos
            </h2>

            <div className="space-y-3 sm:space-y-4 text-stone-300 text-xs sm:text-sm md:text-base leading-relaxed">
              <p>
                En <strong className="text-white">Capitán Pollo</strong> creemos que el pollo asado no debe ser una comida rápida industrial más, sino un homenaje al sabor de siempre. Cada mañana encendemos los hornos en nuestro local de la <span className="text-amber-300">Avenida Joan Miró</span>, seleccionando piezas frescas y aderezándolas con nuestra receta familiar.
              </p>
              <p>
                Regentado por un matrimonio con vocación hostelera, nuestro compromiso es la cercanía y el trato de barrio: llamarte por tu nombre, tener tu encargo listo al minuto para que no hagas cola y asegurarnos de que la piel del pollo llegue a tu mesa tan crujiente como si saliera del horno en ese instante.
              </p>
              <p>
                Y para rendir tributo a nuestra tierra malagueña, preparamos nuestros <strong className="text-white">camperos tradicionales</strong>: pan de mollete crujiente, bien tostado a la plancha y relleno con carne de pollo asado jugosa de verdad.
              </p>
            </div>

            {/* 3 Pillars highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-3 sm:pt-4 border-t border-stone-800">
              <div className="space-y-1">
                <div className="text-amber-400 font-bold text-sm sm:text-base flex items-center gap-1.5">
                  <Flame className="w-4 h-4 shrink-0" />
                  <span>Asado Lento</span>
                </div>
                <p className="text-xs text-stone-400 leading-normal">
                  Horneado continuo a fuego pausado para sellar los jugos naturales.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-amber-400 font-bold text-sm sm:text-base flex items-center gap-1.5">
                  <UtensilsCrossed className="w-4 h-4 shrink-0" />
                  <span>Aliño Casero</span>
                </div>
                <p className="text-xs text-stone-400 leading-normal">
                  Romero, tomillo, ajo morado, limón fresco y aceite virgen extra.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-amber-400 font-bold text-sm sm:text-base flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  <span>Sin Esperas</span>
                </div>
                <p className="text-xs text-stone-400 leading-normal">
                  Encargo por WhatsApp y recogida programada en tu horario exacto.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual montage with bundled image and fallback */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-stone-700 bg-stone-800 shadow-2xl">
              <img
                src={APP_IMAGES.camperoMalagueno}
                onError={(e) => {
                  e.currentTarget.src = '/images/campero_malagueno_1793707370990.jpg';
                }}
                alt="Auténtico Campero Malagueño Capitán Pollo en Torremolinos"
                className="w-full h-64 xs:h-72 sm:h-88 object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 sm:p-5 bg-stone-900 border-t border-stone-800">
                <blockquote className="text-xs sm:text-sm italic text-stone-300">
                  «El cariño con el que se cocina en una casa es el mismo que ponemos en cada pollo y cada campero que sale de Capitán Pollo.»
                </blockquote>
                <p className="text-xs font-semibold text-amber-400 mt-1.5">
                  — La Familia Capitán Pollo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
