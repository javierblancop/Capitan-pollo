import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-stone-950 text-stone-300 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 sm:mb-12">
          {/* Brand & mission */}
          <div className="sm:col-span-2 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-xl font-extrabold text-amber-400">
              <span>🍗</span>
              <span>Capitán Pollo</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-400 max-w-md leading-relaxed">
              Asador tradicional de pollos y auténticos camperos malagueños en Torremolinos. Sabor auténtico con aliño casero mediterráneo, patatas al jugo del asador y postres artesanos.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-amber-400/90 font-medium">
              <span>⭐ 4.8 / 5 en Google</span>
              <span>·</span>
              <span>Trato cercano y familiar</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>
                <a href="#navidad" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  Especial Navidad & Fiestas
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  Especialidades de la casa
                </a>
              </li>
              <li>
                <a href="#como-llegar" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  Dónde estamos (Av. Joan Miró)
                </a>
              </li>
              <li>
                <a href="#opiniones" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  Opiniones de Clientes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-2.5 sm:space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contacto y Encargos
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="hover:text-white font-medium transition-colors min-h-[36px] inline-flex items-center"
                >
                  {RESTAURANT_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Martes a Domingo: 09:00 - 16:00<br />Lunes cerrado</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-6 sm:pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-stone-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Capitán Pollo · Torremolinos, Málaga. Todos los derechos reservados.</p>
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={`https://wa.me/${RESTAURANT_INFO.phoneClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 min-h-[40px]"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Directo</span>
            </a>
            <span>·</span>
            <a
              href={RESTAURANT_INFO.glovoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white min-h-[40px] inline-flex items-center"
            >
              Glovo Torremolinos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
