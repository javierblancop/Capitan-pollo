import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: '¿Es necesario encargar con antelación?',
      a: 'De martes a viernes puedes pasar directamente por nuestro asador en Av. Joan Miró, 4. No obstante, los sábados y domingos hay una gran afluencia de clientes, por lo que recomendamos encargar por WhatsApp o por teléfono antes de las 13:00 para garantizar que tengamos tu pollo recién hecho y sin esperas.',
    },
    {
      q: '¿Cómo funciona el encargo por WhatsApp?',
      a: '¡Es súper sencillo! Puedes seleccionar tus platos favoritos en nuestra web y pulsar en "Enviar Encargo por WhatsApp" (o escribirnos directamente al +34 612 56 88 58). Dinos tu nombre, hora a la que quieres pasar y lo que deseas. Te responderemos confirmando la reserva.',
    },
    {
      q: '¿Hasta qué hora tenéis servicio de cocina?',
      a: 'Abrimos de martes a domingo desde las 09:00 hasta las 16:00 horas ininterrumpidamente. Los lunes cerramos por descanso del personal.',
    },
    {
      q: '¿Tenéis opciones aptas para celíacos o personas con alergias?',
      a: 'Sí. Nuestros pollos asados y su aliño casero están libres de gluten, así como las patatas asadas al jugo y las patatas fritas. Consulta en nuestro filtro de la carta o indícanoslo en el mensaje para preparar tu encargo con total cuidado.',
    },
    {
      q: '¿Tenéis reparto a domicilio?',
      a: 'Sí, trabajamos habitualmente con la plataforma Glovo para entregas a domicilio en Torremolinos, Benalmádena y Churriana. También puedes consultarnos por WhatsApp para pedidos grandes.',
    },
    {
      q: '¿Qué métodos de pago aceptáis?',
      a: 'En nuestro asador físico aceptamos pago con tarjeta de crédito/débito, contactless (Apple Pay / Google Pay) y efectivo.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-stone-100 text-stone-900 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 sm:space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Resolvemos tus dudas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-900">
            Preguntas Frecuentes
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm">
            Todo lo que necesitas saber antes de venir a por tu comida a Capitán Pollo.
          </p>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full min-h-[48px] p-3.5 sm:p-5 text-left font-bold text-xs sm:text-sm md:text-base text-stone-900 flex items-center justify-between gap-3 hover:text-amber-700 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-3.5 sm:px-5 pb-4 sm:pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-2.5 sm:pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
