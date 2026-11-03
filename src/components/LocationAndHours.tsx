import React from 'react';
import { MapPin, Clock, Phone, ExternalLink, Navigation, Bike } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const LocationAndHours: React.FC = () => {
  const todayIndex = new Date().getDay();
  // Map JS getDay(): 0=Domingo, 1=Lunes, 2=Martes...
  // In RESTAURANT_INFO.hours: 0=Lunes, 1=Martes, 2=Miércoles, 3=Jueves, 4=Viernes, 5=Sábado, 6=Domingo
  const mappedIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section id="como-llegar" className="py-12 sm:py-16 md:py-24 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-2 sm:space-y-3 mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Visítanos o Haz tu Encargo
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-stone-900">
            Dónde estamos y Horario
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm md:text-base">
            Estamos en pleno Torremolinos, en la Avenida Joan Miró, muy cerca del centro y con fácil acceso para parar y recoger.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Address, Hours, Actions */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            {/* Address Box */}
            <div className="p-4 sm:p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-stone-900">Dirección del Asador</h3>
                  <p className="text-xs sm:text-sm text-stone-700 mt-0.5">
                    {RESTAURANT_INFO.address}
                  </p>
                  <p className="text-[11px] sm:text-xs text-stone-500 mt-1">
                    Torremolinos (Málaga) · CP 29620
                  </p>
                </div>
              </div>

              <div className="flex flex-col xs:flex-row gap-2 pt-1">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] text-xs font-bold text-white bg-stone-900 hover:bg-stone-800 rounded-xl transition-colors text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Cómo llegar (Maps)</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] text-xs font-bold text-stone-800 bg-white border border-stone-300 hover:bg-stone-100 rounded-xl transition-colors text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-600" />
                  <span>{RESTAURANT_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Weekly Schedule Table */}
            <div className="p-4 sm:p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-stone-900">
                  Horario Semanal de Apertura
                </h3>
              </div>

              <div className="divide-y divide-stone-200 text-xs sm:text-sm">
                {RESTAURANT_INFO.hours.map((schedule, i) => {
                  const isToday = i === mappedIndex;
                  return (
                    <div
                      key={schedule.day}
                      className={`py-2 sm:py-2.5 flex items-center justify-between ${
                        isToday ? 'font-bold text-amber-900 bg-amber-50/80 -mx-2 px-2 rounded-md' : 'text-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span>{schedule.day}</span>
                        {isToday && (
                          <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.2 bg-amber-200 text-amber-900 rounded font-bold">
                            Hoy
                          </span>
                        )}
                      </div>
                      <span className="tabular-nums">
                        {schedule.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="text-[11px] text-stone-500 pt-1">
                * Recomendamos encargar los domingos antes de las 13:00 para garantizar disponibilidad.
              </p>
            </div>

            {/* Delivery with Glovo */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <Bike className="w-5 h-5 text-amber-700 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-amber-900">¿Reparto a domicilio?</p>
                  <p className="text-[11px] text-stone-600">Disponible con Glovo en Torremolinos</p>
                </div>
              </div>
              <a
                href={RESTAURANT_INFO.glovoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-amber-800 hover:text-amber-950 underline shrink-0 min-h-[44px] flex items-center"
              >
                Pedir Glovo
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map & Local Highlights */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-xs h-64 xs:h-72 sm:h-88 lg:h-96 relative bg-stone-100">
              <iframe
                title="Ubicación de Capitán Pollo en Torremolinos"
                src="https://maps.google.com/maps?q=Avenida%20Joan%20Miro%204%20Torremolinos&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Practical tips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3.5 sm:p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-1">
                  🚗 Parada rápida para recogida
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Espacios de parada rápida junto a la avenida para recoger tu encargo caliente en menos de dos minutos.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl bg-stone-50 border border-stone-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-1">
                  🏖️ Para la playa o la piscina
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  A 5 minutos de las playas de Bajondillo y Playamar. La comida perfecta para llevar antes de pasar el día al sol.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
