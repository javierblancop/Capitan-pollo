import React, { useState, useEffect } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, Phone, MapPin } from 'lucide-react';
import { CartItem, RESTAURANT_INFO } from '../data/menuData';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupTime, setPickupTime] = useState('Lo antes posible (15-25 min)');
  const [deliveryType, setDeliveryType] = useState<'recogida' | 'domicilio'>('recogida');
  const [orderNotes, setOrderNotes] = useState('');

  // Lock background scrolling on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Calculate total
  const subtotal = cart.reduce((acc, cartItem) => {
    let extra = 0;
    if (cartItem.selectedOptions) {
      Object.values(cartItem.selectedOptions).forEach((choice) => {
        if (choice.includes('+0.50€')) {
          extra += 0.50;
        }
      });
    }
    return acc + (cartItem.item.price + extra) * cartItem.quantity;
  }, 0);

  const handleWhatsAppOrder = () => {
    const name = customerName.trim() || 'Cliente';
    const phone = customerPhone.trim() || 'No indicado';

    let message = `🍗 *¡Hola Capitán Pollo!* Me gustaría hacer un encargo para ${
      deliveryType === 'recogida' ? 'recoger en el asador' : 'consultar entrega a domicilio'
    }:\n\n`;

    message += `👤 *Nombre:* ${name}\n`;
    if (customerPhone.trim()) {
      message += `📞 *Teléfono:* ${phone}\n`;
    }
    message += `🕒 *Hora deseada:* ${pickupTime}\n`;
    message += `📍 *Ubicación:* ${
      deliveryType === 'recogida' ? 'Recogeré en local (Av. Joan Miró, 4, Torremolinos)' : 'Reparto a domicilio'
    }\n\n`;

    message += `📋 *DETALLE DEL PEDIDO:*\n`;
    cart.forEach((c) => {
      message += `• ${c.quantity}x ${c.item.name} (${(c.item.price * c.quantity).toFixed(2)}€)\n`;
      if (c.selectedOptions && Object.keys(c.selectedOptions).length > 0) {
        Object.entries(c.selectedOptions).forEach(([k, v]) => {
          message += `   - ${k}: ${v}\n`;
        });
      }
      if (c.specialInstructions) {
        message += `   - Nota: ${c.specialInstructions}\n`;
      }
    });

    if (orderNotes.trim()) {
      message += `\n📝 *Observaciones:* ${orderNotes.trim()}\n`;
    }

    message += `\n💰 *TOTAL ESTIMADO:* ${subtotal.toFixed(2)}€\n\n`;
    message += `¿Me podéis confirmar disponibilidad y hora exacta? ¡Muchas gracias!`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${RESTAURANT_INFO.phoneClean}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/65 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-md bg-white h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-200 bg-stone-900 text-white flex items-center justify-between shrink-0 pt-safe">
          <div className="flex items-center gap-2">
            <span className="text-xl">🍗</span>
            <div>
              <h2 className="text-sm sm:text-base font-bold">Tu Encargo para Llevar</h2>
              <p className="text-[11px] sm:text-xs text-stone-400">Capitán Pollo · Torremolinos</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-400 hover:text-white rounded-xl hover:bg-stone-800 transition-colors"
            aria-label="Cerrar pedido"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-5 overscroll-contain">
          {cart.length === 0 ? (
            <div className="py-12 sm:py-16 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-amber-50 flex items-center justify-center text-amber-600 text-2xl">
                🍗
              </div>
              <p className="text-base font-bold text-stone-800">
                Tu pedido está vacío
              </p>
              <p className="text-xs text-stone-500 max-w-xs mx-auto">
                Añade pollos asados, camperos o raciones de la carta para preparar tu encargo sin esperas.
              </p>
              <a
                href="#especialidades"
                onClick={onClose}
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 text-xs font-bold text-stone-950 bg-amber-400 rounded-xl hover:bg-amber-300 transition-colors"
              >
                Ver Especialidades
              </a>
            </div>
          ) : (
            <>
              {/* Item list */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-stone-500">
                  <span>Platos seleccionados ({cart.length})</span>
                  <button
                    onClick={onClearCart}
                    className="text-stone-400 hover:text-red-600 font-medium normal-case py-1 px-2"
                  >
                    Vaciar todo
                  </button>
                </div>

                <div className="space-y-2.5">
                  {cart.map((cartItem, index) => (
                    <div
                      key={index}
                      className="p-3 sm:p-3.5 rounded-xl border border-stone-200 bg-stone-50/70 space-y-2"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0 pr-2">
                          <p className="text-xs sm:text-sm font-bold text-stone-900 leading-snug">
                            {cartItem.item.name}
                          </p>
                          <p className="text-xs font-extrabold text-amber-700 tabular-nums mt-0.5">
                            {(cartItem.item.price * cartItem.quantity).toFixed(2).replace('.', ',')} €
                          </p>
                        </div>

                        {/* Quantity Stepper with accessible touch hitboxes */}
                        <div className="flex items-center border border-stone-300 rounded-lg bg-white overflow-hidden text-xs shrink-0">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(index, cartItem.quantity - 1)}
                            className="min-w-[36px] min-h-[36px] flex items-center justify-center text-stone-600 hover:bg-stone-100 font-bold"
                            aria-label="Disminuir cantidad"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 font-bold tabular-nums min-w-[1.5rem] text-center">
                            {cartItem.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(index, cartItem.quantity + 1)}
                            className="min-w-[36px] min-h-[36px] flex items-center justify-center text-stone-600 hover:bg-stone-100 font-bold"
                            aria-label="Aumentar cantidad"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(index)}
                            className="min-w-[36px] min-h-[36px] flex items-center justify-center text-stone-400 hover:text-red-600 border-l border-stone-200"
                            aria-label="Eliminar producto"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Display options if chosen */}
                      {cartItem.selectedOptions && Object.keys(cartItem.selectedOptions).length > 0 && (
                        <div className="text-[11px] text-stone-600 bg-white p-2 rounded-md border border-stone-200/70 space-y-0.5">
                          {Object.entries(cartItem.selectedOptions).map(([key, val]) => (
                            <div key={key} className="flex justify-between gap-2">
                              <span className="text-stone-400 truncate">{key}:</span>
                              <span className="font-medium text-stone-800 text-right">{val}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {cartItem.specialInstructions && (
                        <p className="text-[11px] text-amber-800 italic">
                          Nota: {cartItem.specialInstructions}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery method toggle */}
              <div className="space-y-2 pt-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Modalidad de pedido
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryType('recogida')}
                    className={`min-h-[44px] p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                      deliveryType === 'recogida'
                        ? 'border-amber-600 bg-amber-50 text-amber-900 ring-1 ring-amber-600'
                        : 'border-stone-200 bg-stone-50 text-stone-600'
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>Recoger en local</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryType('domicilio')}
                    className={`min-h-[44px] p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                      deliveryType === 'domicilio'
                        ? 'border-amber-600 bg-amber-50 text-amber-900 ring-1 ring-amber-600'
                        : 'border-stone-200 bg-stone-50 text-stone-600'
                    }`}
                  >
                    <span>Reparto / Glovo</span>
                  </button>
                </div>
                {deliveryType === 'domicilio' && (
                  <p className="text-[11px] text-stone-500 bg-stone-100 p-2.5 rounded-lg leading-relaxed">
                    También disponible en la app de Glovo para entrega en Torremolinos, Benalmádena y Churriana.
                  </p>
                )}
              </div>

              {/* Pickup Time Selector */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  ¿Para qué hora lo necesitas?
                </label>
                <select
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full px-3 py-2.5 min-h-[44px] text-base sm:text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="Lo antes posible (15-25 min)">Lo antes posible (15-25 min)</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="13:00">13:00</option>
                  <option value="13:30">13:30</option>
                  <option value="14:00">14:00 (Hora punta)</option>
                  <option value="14:30">14:30</option>
                  <option value="15:00">15:00</option>
                  <option value="15:30">15:30</option>
                </select>
              </div>

              {/* Customer Info Form */}
              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Tu Nombre
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="Ej: Javier"
                    className="w-full px-3 py-2.5 min-h-[44px] text-base sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Teléfono de contacto (opcional)
                  </label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="Ej: 612 00 00 00"
                    className="w-full px-3 py-2.5 min-h-[44px] text-base sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Notas adicionales
                  </label>
                  <input
                    type="text"
                    value={orderNotes}
                    onChange={(e) => setOrderNotes(e.target.value)}
                    placeholder="Añade servilletas, cubiertos, etc."
                    className="w-full px-3 py-2.5 min-h-[44px] text-base sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer with subtotal and WhatsApp confirmation */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-stone-200 bg-stone-50 space-y-3 shrink-0 pb-safe">
            <div className="flex items-center justify-between">
              <span className="text-xs sm:text-sm font-medium text-stone-600">Total estimado</span>
              <span className="text-xl sm:text-2xl font-extrabold text-stone-900 tabular-nums">
                {subtotal.toFixed(2).replace('.', ',')} €
              </span>
            </div>

            <p className="text-[11px] text-stone-500 leading-tight">
              Al pulsar el botón se abrirá WhatsApp con tu pedido ya redactado para que el asador te confirme en 1 minuto.
            </p>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all active:scale-98"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enviar Pedido por WhatsApp</span>
            </button>

            <div className="text-center pt-1">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="inline-flex items-center justify-center min-h-[40px] gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>¿Prefieres llamar? {RESTAURANT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
