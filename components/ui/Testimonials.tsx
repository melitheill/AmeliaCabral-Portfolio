'use client';

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { TestimonialItem } from '../../types';

const originalTestimonials: TestimonialItem[] = [
  {
    id: 1,
    quote: "Gracias a su trabajo en copy, mi landing page pasó de recibir visitas a generar clientes reales. Entendió mi voz desde el primer día.",
    author: "Elena Rivas",
    role: "CEO, Serenity Wellness",
    initials: "ER",
    bgClass: "bg-navy",
    textClass: "text-white",
    quoteColor: "text-white",
    authorClass: "text-white",
    roleClass: "text-white/70",
    avatarBg: "bg-white/10",
    avatarText: "text-white",
    hoverBgClass: "hover:bg-mauve",
    hoverTextClass: "group-hover:text-navy",
    icon: "edit_note",
    iconBgClass: "bg-white/10"
  },
  {
    id: 2,
    quote: "Los resultados de la campaña de email marketing fueron inmediatos. La tasa de apertura subió un 40% en el primer mes.",
    author: "Lucía Pérez",
    role: "Founder, ModaEco",
    initials: "LP",
    bgClass: "bg-orange",
    textClass: "text-white",
    quoteColor: "text-white",
    authorClass: "text-white",
    roleClass: "text-white/70",
    avatarBg: "bg-white/10",
    avatarText: "text-white",
    hoverBgClass: "hover:bg-yellow",
    hoverTextClass: "group-hover:text-white",
    icon: "mark_email_read",
    iconBgClass: "bg-white/10"
  },
  {
    id: 3,
    quote: "Su enfoque estratégico superó mis expectativas. No solo escribe bien, sino que entiende el negocio detrás de cada palabra.",
    author: "Mateo Ruiz",
    role: "Director, TechFlow",
    initials: "MR",
    bgClass: "bg-testimonialGreen",
    textClass: "text-white",
    quoteColor: "text-white",
    authorClass: "text-white",
    roleClass: "text-white/70",
    avatarBg: "bg-white/10",
    avatarText: "text-white",
    hoverBgClass: "hover:bg-mint",
    hoverTextClass: "group-hover:text-navy",
    icon: "psychology",
    iconBgClass: "bg-white/10"
  }
];

const SWIPE_THRESHOLD = 50;

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % originalTestimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + originalTestimonials.length) % originalTestimonials.length);
  }, []);

  const TestimonialCard = ({ t, style, dragHandlers, enableHover = false }: { t: TestimonialItem, style?: any, dragHandlers?: any, enableHover?: boolean }) => {
    return (
      <motion.div
        {...dragHandlers}
        style={style}
        whileHover={enableHover ? {
          y: -12,
          scale: 1.03,
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.3)"
        } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 1 }}
        className={`
          relative flex flex-col rounded-2xl p-8 h-full text-left
          ${t.bgClass} shadow-lg lg:shadow-premium
          group cursor-default
          justify-center
        `}
      >
        <div className="mb-4 flex justify-between items-start">
          <span className="material-symbols-outlined text-4xl text-white opacity-30">
            {t.icon || "format_quote"}
          </span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-yellow text-xl filled">star</span>
            ))}
          </div>
        </div>

        <blockquote className="mb-6">
          <p className="font-display text-base lg:text-base italic leading-relaxed text-white">
            "{t.quote}"
          </p>
        </blockquote>

        <div className="w-full h-px bg-white/20 mb-6"></div>

        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full ${t.iconBgClass || 'bg-white/10'} flex items-center justify-center`}>
            <span className="font-bold text-xs text-white">{t.initials}</span>
          </div>
          <div>
            <p className="font-bold text-sm text-white tracking-tight">{t.author}</p>
            <p className="text-[10px] uppercase tracking-[0.1em] font-bold text-white/70 mt-0.5">{t.role}</p>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="opiniones" className="relative py-20 lg:py-20 lg:mb-10 bg-[#ABCBCA] overflow-hidden select-none scroll-mt-16">
      <div className="w-full">

        {/* CORRECCIÓN AQUÍ: Agregado 'md:text-center' para que en Tablet ya esté centrado */}
        <div className="text-left md:text-center mb-10 lg:mb-12 px-6 max-w-[1100px] mx-auto">
          <span className="text-white/80 uppercase tracking-[0.2em] text-xs lg:text-sm font-bold mb-3 block">Testimonios</span>
          <h2 className="text-3xl lg:text-5xl font-display text-navy mb-4">Lo que dicen mis clientes</h2>
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden lg:grid grid-cols-3 gap-10 max-w-[1200px] mx-auto px-10">
          {originalTestimonials.map((t) => (
            <div key={t.id} className="h-auto">
              <TestimonialCard t={t} enableHover={true} />
            </div>
          ))}
        </div>

        {/* MOBILE/TABLET VIEW */}
        <div className="block lg:hidden px-6">
          <div className="relative h-[300px] w-full max-w-[450px] mx-auto flex items-center justify-center">
            {originalTestimonials.map((t, i) => {
              let position = i - activeIndex;
              if (position < 0) position += originalTestimonials.length;
              const isVisible = position <= 2;

              if (!isVisible) return null;

              return (
                <motion.div
                  key={t.id}
                  initial={false}
                  animate={{
                    scale: 1 - position * 0.05,
                    y: position * 20,
                    opacity: 1 - position * 0.3,
                    zIndex: 30 - position,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag={position === 0 ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -SWIPE_THRESHOLD) handleNext();
                    if (info.offset.x > SWIPE_THRESHOLD) handlePrev();
                  }}
                  className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                >
                  <TestimonialCard t={t} />
                </motion.div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8 px-2 lg:px-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white/20 shadow-md text-navy flex items-center justify-center hover:bg-navy hover:text-white transition-colors"
              aria-label="Anterior"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>

            <div className="flex gap-3">
              {originalTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-navy w-6' : 'bg-navy/20'}`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white/20 shadow-md text-navy flex items-center justify-center hover:bg-navy hover:text-white transition-colors"
              aria-label="Siguiente"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};