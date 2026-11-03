import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS, RESTAURANT_INFO } from '../data/menuData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="opiniones" className="py-12 sm:py-16 md:py-24 bg-stone-50 text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>Opiniones Verificadas en Google</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900 text-balance">
            La opinión de quienes ya repiten cada semana
          </h2>

          <div className="flex items-center justify-center gap-2 sm:gap-3 text-stone-600 text-xs sm:text-sm">
            <div className="flex items-center gap-0.5 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-extrabold text-stone-900 text-base sm:text-lg tabular-nums">
              {RESTAURANT_INFO.rating} / 5
            </span>
            <span className="text-stone-400">·</span>
            <span>+{RESTAURANT_INFO.totalReviews} valoraciones</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-4 sm:p-7 rounded-2xl border border-stone-200 shadow-2xs flex flex-col justify-between space-y-3 sm:space-y-4 hover:shadow-xs transition-shadow"
            >
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] sm:text-xs text-stone-400 font-medium">
                    {review.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-stone-700 leading-relaxed italic">
                  «{review.text}»
                </p>
              </div>

              <div className="pt-2 sm:pt-3 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-bold text-stone-900">
                    {review.author}
                  </p>
                  <p className="text-[11px] sm:text-xs text-amber-800 font-medium">
                    {review.tag}
                  </p>
                </div>
                <span className="text-[11px] sm:text-xs text-stone-400">Google Reseña</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to leave review */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-stone-500">
            ¿Has probado ya nuestros pollos asados o camperos? ¡Nos ayuda muchísimo tu reseña en Google!
          </p>
        </div>
      </div>
    </section>
  );
};
