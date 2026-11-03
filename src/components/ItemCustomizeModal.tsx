import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import { MenuItem } from '../data/menuData';

interface ItemCustomizeModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, options: { [key: string]: string }, instructions: string) => void;
}

export const ItemCustomizeModal: React.FC<ItemCustomizeModalProps> = ({
  item,
  onClose,
  onAddToCart,
}) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>(() => {
    const initial: { [key: string]: string } = {};
    item.options?.forEach((opt) => {
      if (opt.choices.length > 0) {
        initial[opt.name] = opt.choices[0];
      }
    });
    return initial;
  });
  const [instructions, setInstructions] = useState('');

  // Lock background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleOptionChange = (optionName: string, choice: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionName]: choice,
    }));
  };

  const calculateTotal = () => {
    let extra = 0;
    Object.values(selectedOptions).forEach((choice) => {
      if (choice.includes('+0.50€')) {
        extra += 0.50;
      }
    });
    return ((item.price + extra) * quantity).toFixed(2);
  };

  const handleConfirm = () => {
    onAddToCart(item, quantity, selectedOptions, instructions);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-t-3xl sm:rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-stone-200 flex flex-col max-h-[90dvh] sm:max-h-[85vh] animate-in slide-in-from-bottom-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-4 sm:p-5 border-b border-stone-100 flex items-start justify-between gap-3">
          <div className="pr-2">
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-tight">
              {item.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-amber-700 mt-0.5 tabular-nums">
              {item.price.toFixed(2).replace('.', ',')} € base
            </p>
          </div>
          <button
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-400 hover:text-stone-700 rounded-xl hover:bg-stone-100 transition-colors shrink-0"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-5 overscroll-contain">
          {item.image && (
            <div className="rounded-xl overflow-hidden h-36 sm:h-44 bg-stone-100 border border-stone-200/60 shrink-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {item.description}
          </p>

          {/* Options if available */}
          {item.options && item.options.length > 0 && (
            <div className="space-y-4 pt-1">
              {item.options.map((opt) => (
                <div key={opt.name} className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    {opt.name}
                  </label>
                  <div className="space-y-2">
                    {opt.choices.map((choice) => {
                      const isSelected = selectedOptions[opt.name] === choice;
                      return (
                        <button
                          key={choice}
                          type="button"
                          onClick={() => handleOptionChange(opt.name, choice)}
                          className={`w-full min-h-[48px] flex items-center justify-between p-3 rounded-xl border text-xs sm:text-sm text-left transition-all ${
                            isSelected
                              ? 'border-amber-600 bg-amber-50/70 text-amber-900 font-semibold ring-1 ring-amber-600'
                              : 'border-stone-200 hover:border-stone-300 text-stone-700 bg-white'
                          }`}
                        >
                          <span className="pr-2">{choice}</span>
                          <span
                            className={`w-4 h-4 rounded-full border shrink-0 flex items-center justify-center ${
                              isSelected
                                ? 'border-amber-600 bg-amber-600 text-white'
                                : 'border-stone-300'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-3" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Special Instructions */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
              Instrucciones para cocina (opcional)
            </label>
            <input
              type="text"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Ej: Sin cebolla, salsa aparte, pan bien tostado..."
              className="w-full px-3.5 py-3 min-h-[44px] text-base sm:text-sm rounded-xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-stone-50"
              maxLength={120}
            />
          </div>
        </div>

        {/* Footer with stepper and Add CTA */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 pb-safe flex items-center justify-between gap-3">
          {/* Stepper with >= 44px hitboxes */}
          <div className="flex items-center border border-stone-300 rounded-xl bg-white overflow-hidden shadow-2xs shrink-0">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-600 hover:bg-stone-100 font-bold text-lg transition-colors"
              aria-label="Restar una unidad"
            >
              -
            </button>
            <span className="px-2 text-sm font-bold text-stone-900 tabular-nums min-w-[2rem] text-center">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-stone-600 hover:bg-stone-100 font-bold text-lg transition-colors"
              aria-label="Sumar una unidad"
            >
              +
            </button>
          </div>

          <button
            type="button"
            onClick={handleConfirm}
            className="flex-1 min-h-[48px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-amber-600 hover:bg-amber-500 transition-colors shadow-xs active:scale-98"
          >
            <span>Añadir al Pedido</span>
            <span className="opacity-95 tabular-nums">· {calculateTotal().replace('.', ',')} €</span>
          </button>
        </div>
      </div>
    </div>
  );
};
