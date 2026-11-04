import React from 'react';
import { Star, MessageCircle, Utensils, ShieldCheck, Flame, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';
import { APP_IMAGES } from '../assets/images';

interface HeroProps {
  onOpenOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrder }) => {
  return (
    <section className="relative overflow-hidden bg-stone-950 text-white">
      {/* Warm ambient rotisserie glow layers */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Prominent Christmas & rotisserie live banner */}
      <div className="bg-gradient-to-r from-red-800 via-amber-600 to-red-800 text-white text-xs sm:text-sm font-bold py-2.5 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center flex-wrap">
          <span>🎄</span>
          <span>¡Especial Navidad en Capitán Pollo! Encarga ya tus menús de Nochebuena y Navidad</span>
          <span className="hidden md:inline">·</span>
          <a
            href="#navidad"
            className="bg-white text-stone-950 px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wider font-extrabold hover:bg-amber-100 transition-colors"
          >
            Ver Menús Navideños
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Eye-catching & High Conversion */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Trust badge with unboxed metadata */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-stone-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>4.8 / 5 en Google (+190 valoraciones)</span>
              </span>
              <span aria-hidden="true" className="text-stone-600">·</span>
              <span className="text-stone-300 font-medium">Av. Joan Miró, 4 · Torremolinos</span>
            </div>

            {/* Main Headline with BIGGER Capitán Pollo branding */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-amber-400 block">
                Asador Tradicional & Camperos
              </span>
              <h1 className="text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight sm:leading-none text-balance">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-amber-200">
                  Capitán Pollo
                </span>
                <span className="block text-2xl xs:text-3xl sm:text-4xl lg:text-4xl font-extrabold text-stone-100 mt-2">
                  Los mejores pollos asados y camperos de Torremolinos
                </span>
              </h1>
            </div>

            {/* Subtitle - Punchy and Appetizing (less clutter) */}
            <p className="text-sm sm:text-base lg:text-lg text-stone-300 leading-relaxed max-w-2xl">
              Asados lentamente con nuestro aliño casero secreto de hierbas mediterráneas, ajo, limón y aceite de oliva virgen extra. Piel crujiente, carne jugosísima y los legendarios camperos malagueños en pan tostado.
            </p>

            {/* Action Buttons: Direct and High Conversion */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              {/* Encargar para Llevar */}
              <button
                onClick={onOpenOrder}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[54px] text-base sm:text-lg font-black text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 rounded-2xl shadow-xl shadow-amber-950/50 transition-all hover:scale-[1.02] active:scale-100 text-center ring-2 ring-amber-400/50 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-stone-950 text-stone-950" />
                <span>Encargar para Llevar</span>
              </button>

              {/* Ver Especialidades */}
              <a
                href="#especialidades"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 min-h-[54px] text-sm sm:text-base font-bold text-stone-200 hover:text-white bg-stone-900/90 hover:bg-stone-800 rounded-2xl border border-stone-700 transition-all text-center"
              >
                <Utensils className="w-4 h-4 text-amber-400" />
                <span>Ver Especialidades</span>
              </a>
            </div>

            {/* Quick Proof Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-stone-800 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Casero & Fresco</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Recogida rápida sin colas</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Eventos y Familias</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-500/30 shadow-2xl bg-stone-900 group">
              <img
                src={APP_IMAGES.hero}
                onError={(e) => {
                  e.currentTarget.src = '/images/hero_capitan_pollo_1793707384580.jpg';
                }}
                alt="Pollo asado artesanal dorado Capitán Pollo en Torremolinos con patatas y aliño"
                className="w-full h-72 xs:h-80 sm:h-96 lg:h-120 object-cover group-hover:scale-104 transition-transform duration-700"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

              {/* Floating Highlight Tag */}
              <div className="absolute top-4 right-4 bg-amber-500 text-stone-950 text-xs font-black px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>El Favorito de Torremolinos</span>
              </div>

              {/* Floating bottom badge on photo */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-stone-950/90 backdrop-blur-md border border-amber-500/30 text-white shadow-xl">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                      <Flame className="w-3 h-3" />
                      <span>Especialidad Asador</span>
                    </div>
                    <p className="text-base sm:text-lg font-extrabold text-white truncate">
                      Pollo Asado con Aliño Secreto
                    </p>
                    <p className="text-xs text-stone-300">
                      Bañado en su propio jugo y patatas doradas
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-2xl sm:text-3xl font-black text-amber-400 tabular-nums">
                      11,50€
                    </p>
                    <p className="text-[10px] text-stone-400 uppercase font-semibold">pieza entera</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
