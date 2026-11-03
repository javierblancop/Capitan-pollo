/**
 * Utility to calculate if Capitán Pollo is currently open in Spain (Europe/Madrid)
 * Hours: Tuesday to Sunday, 09:00 - 16:00
 * Monday: Closed
 */

export interface RestaurantStatus {
  isOpen: boolean;
  statusLabel: string;
  detailLabel: string;
  colorClass: string;
}

export function getRestaurantStatus(): RestaurantStatus {
  try {
    // Format date in Europe/Madrid timezone
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Europe/Madrid',
      hour12: false,
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    });

    const parts = formatter.formatToParts(now);
    const weekdayPart = parts.find((p) => p.type === 'weekday')?.value.toLowerCase();
    const hourPart = parseInt(parts.find((p) => p.type === 'hour')?.value || '0', 10);
    const minutePart = parseInt(parts.find((p) => p.type === 'minute')?.value || '0', 10);

    const currentTimeInMinutes = hourPart * 60 + minutePart;
    const openingTimeInMinutes = 9 * 60; // 09:00
    const closingTimeInMinutes = 16 * 60; // 16:00

    // Monday is closed
    if (weekdayPart?.startsWith('mon')) {
      return {
        isOpen: false,
        statusLabel: 'Cerrado hoy lunes',
        detailLabel: 'Abrimos mañana martes a las 09:00 · Puedes dejar tu encargo por WhatsApp',
        colorClass: 'bg-stone-800 text-stone-200',
      };
    }

    if (currentTimeInMinutes >= openingTimeInMinutes && currentTimeInMinutes < closingTimeInMinutes) {
      const remainingMinutes = closingTimeInMinutes - currentTimeInMinutes;
      const remainingHours = Math.floor(remainingMinutes / 60);
      const remainingMins = remainingMinutes % 60;

      const timeRemainingStr =
        remainingHours > 0
          ? `Cierra en ${remainingHours}h ${remainingMins}m (a las 16:00)`
          : `Cierra en ${remainingMins} min (a las 16:00)`;

      return {
        isOpen: true,
        statusLabel: 'Abierto ahora',
        detailLabel: `${timeRemainingStr} · ¡Aceptando encargos calientes!`,
        colorClass: 'bg-emerald-900/90 text-emerald-100 border-emerald-700/50',
      };
    }

    if (currentTimeInMinutes < openingTimeInMinutes) {
      return {
        isOpen: false,
        statusLabel: 'Cerrado ahora',
        detailLabel: 'Abrimos hoy a las 09:00 · Encarga ahora para recoger a mediodía',
        colorClass: 'bg-amber-950/90 text-amber-100 border-amber-800/50',
      };
    }

    return {
      isOpen: false,
      statusLabel: 'Cerrado por hoy',
      detailLabel: 'Servicio finalizado a las 16:00 · Abrimos mañana a las 09:00',
      colorClass: 'bg-stone-900/90 text-stone-200 border-stone-800',
    };
  } catch {
    return {
      isOpen: true,
      statusLabel: 'Martes a Domingo 9:00 a 16:00',
      detailLabel: 'Encargos directos en el 612 56 88 58',
      colorClass: 'bg-stone-900 text-stone-100',
    };
  }
}
