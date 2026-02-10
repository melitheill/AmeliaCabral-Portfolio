'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ServiceItem {
  id: number;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  accentColor: string;
  numberColor: string;
  reverse: boolean;
}

const services: ServiceItem[] = [
  {
    id: 1,
    number: "01",
    category: "Mis Servicios",
    title: "Copywriting",
    subtitle: "Web",
    // Agregada una línea más de texto para mayor profundidad
    description: "Transformamos visitantes en clientes. No es solo escribir bonito, es estructurar palabras para derribar objeciones y vender. Creamos una narrativa que conecta emocionalmente con tu audiencia y guía al usuario hacia la acción sin fricción.",
    features: ["Landing Pages", "Webs Corporativas", "Fichas Producto"],
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Escritorio copywriting",
    accentColor: "text-dark-green",
    numberColor: "text-dark-green",
    reverse: false
  },
  {
    id: 2,
    number: "02",
    category: "Estrategia",
    title: "Email",
    subtitle: "Marketing",
    // Agregada una línea más de texto
    description: "Tu lista es tu activo más rentable. Diseñamos ecosistemas de correo que generan confianza y ventas automáticas sin depender de algoritmos. Convertimos suscriptores pasivos en una comunidad leal que espera tus mensajes cada semana.",
    features: ["Newsletters", "Secuencias Venta", "Nurturing"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Email Marketing",
    accentColor: "text-orange",
    numberColor: "text-orange",
    reverse: true
  },
  {
    id: 3,
    number: "03",
    category: "Autoridad",
    title: "Contenido",
    subtitle: "SEO",
    // Texto significativamente ampliado (más robusto)
    description: "Deja de perseguir tendencias efímeras. Desarrollamos calendarios editoriales y artículos estratégicos que posicionan tu marca como autoridad indiscutible en tu sector. Creamos activos digitales evergreen que trabajan por ti las 24 horas, atrayendo tráfico cualificado y clientes potenciales mes tras mes.",
    features: ["5+ Años Exp.", "80+ Proyectos"],
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2068&auto=format&fit=crop",
    imageAlt: "Contenido SEO",
    accentColor: "text-dark-green",
    numberColor: "text-navy",
    reverse: false
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="flex flex-col py-6 lg:mb-10 bg-gray-50 scroll-mt-24">

      <div className="container mx-auto px-6 md:px-12 max-w-6xl">

        {/* --- HEADER --- */}
        <div className="mb-12 lg:mb-16 text-center">
          <span className="text-orange font-bold tracking-widest text-xs uppercase mb-2 block">
            Qué puedo hacer por ti
          </span>
          <h2 className="text-3xl md:text-5xl font-display text-navy leading-tight">
            Soluciones de <span className="font-serif italic text-navy/80">comunicación</span>
          </h2>
        </div>

        {/* --- LISTA DE SERVICIOS --- */}
        {/* AUMENTADO: gap-20 en móvil, lg:gap-32 en escritorio para separar más los servicios */}
        <div className="flex flex-col gap-20 lg:gap-32">
          {services.map((service) => (

            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* --- COLUMNA TEXTO --- */}
                <div className={`flex flex-col ${service.reverse ? 'lg:order-2 lg:pl-4' : 'lg:order-1 lg:pr-4'}`}>

                  {/* Número y Categoría */}
                  <div className="flex items-baseline gap-3 mb-3 opacity-90">
                    {/* CONFIRMADO: font-display aplicado */}
                    <span className={`text-4xl lg:text-5xl font-display font-bold ${service.numberColor}`}>
                      {service.number}
                    </span>
                    <span className="text-navy uppercase tracking-widest text-[10px] lg:text-xs font-bold border-l border-navy/20 pl-3">
                      {service.category}
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl lg:text-3xl font-medium text-navy mb-5">
                    {service.title} <span className={`italic font-serif ${service.accentColor}`}>{service.subtitle}</span>
                  </h3>

                  {/* Descripción: text-base (16px) y max-w para lectura cómoda */}
                  <p className="text-navy/70 text-base leading-relaxed mb-8 font-normal text-pretty max-w-lg">
                    {service.description}
                  </p>

                  {/* Features / Lista */}
                  <div className="border-t border-navy/10 pt-5 w-full">
                    {service.features[0].includes("Exp") ? (
                      <div className="flex gap-8">
                        <div>
                          {/* Números de stats en font-display también para consistencia */}
                          <span className="block text-3xl font-display font-bold text-navy">5+</span>
                          <span className="text-[10px] uppercase tracking-wider text-navy/60">Años</span>
                        </div>
                        <div>
                          <span className="block text-3xl font-display font-bold text-navy">80+</span>
                          <span className="text-[10px] uppercase tracking-wider text-navy/60">Proyectos</span>
                        </div>
                      </div>
                    ) : (
                      <ul className="space-y-2.5">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange/60"></span>
                            <span className="text-navy/80 font-medium text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {/* --- COLUMNA IMAGEN --- */}
                <div className={`w-full ${service.reverse ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Manteniendo alturas compactas para equilibrio visual */}
                  <div className="w-full h-[250px] lg:h-[320px] rounded-lg overflow-hidden shadow-sm border border-gray-100 group relative">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};