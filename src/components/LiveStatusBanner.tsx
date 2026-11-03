import React, { useEffect, useState } from 'react';
import { Clock, Phone, MapPin } from 'lucide-react';
import { getRestaurantStatus, RestaurantStatus } from '../utils/statusUtils';
import { RESTAURANT_INFO } from '../data/menuData';

export const LiveStatusBanner: React.FC = () => {
  const [status, setStatus] = useState<RestaurantStatus>(getRestaurantStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getRestaurantStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside aria-label="Estado y horario del asador" className="bg-stone-950 text-stone-300 border-b border-stone-800 text-xs sm:text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        {/* Status text */}
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-semibold ${
              status.isOpen
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                : 'bg-amber-950 text-amber-300 border border-amber-800'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>{status.statusLabel}</span>
          </span>
          <span className="hidden sm:inline text-stone-400">·</span>
          <span className="text-stone-300">{status.detailLabel}</span>
        </div>

        {/* Quick details */}
        <div className="flex items-center gap-4 text-xs">
          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-stone-400 hover:text-amber-400 transition-colors"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span className="hidden md:inline">Torremolinos:</span>
            <span>Av. Joan Miró, 4</span>
          </a>

          <a
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="flex items-center gap-1 font-medium text-amber-400 hover:text-amber-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{RESTAURANT_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
