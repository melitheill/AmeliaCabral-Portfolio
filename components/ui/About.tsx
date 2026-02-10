import React from 'react';

export const About: React.FC = () => {
  return (
    // CAMBIOS AQUÍ:
    // 1. scroll-mt-[100px]: Margen superior al hacer scroll (evita que el navbar tape el título).
    // 2. py-12 lg:py-16: Padding vertical ajustado para mejor visualización en escritorio.
    <section id="sobre-mi" className="scroll-mt-[90px] relative py-12 lg:py-16 bg-white">

      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        {/* Mantenemos el gap original grande */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Mantenemos medidas originales de la imagen */}
          <div className="relative w-full h-full min-h-[350px] lg:min-h-[450px] rounded-xl overflow-hidden order-2 lg:order-1 shadow-premium">
            <img
              alt="Amelia Cabral Profesional"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2069&auto=format&fit=crop"
            />
          </div>

          <div className="order-1 lg:order-2 lg:pl-10">
            <span className="text-orange uppercase tracking-[0.3em] text-xs lg:text-sm font-bold mb-4 block">Sobre Mí</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display text-navy mb-6 leading-tight">
              Formación y <br /><span className="italic text-gold">Metodología.</span>
            </h2>

            <div className="space-y-4 text-sm lg:text-base text-text-body font-normal leading-relaxed">
              <p>
                Mi enfoque combina la <strong className="text-navy font-bold">psicología del consumidor</strong> con una redacción ética y directa. No creo en las fórmulas mágicas, sino en la investigación profunda y el trabajo honesto.
              </p>
              <p>
                Con años de experiencia ayudando a marcas premium a encontrar su voz, mi metodología se basa en tres pilares irrenunciables: Claridad, Empatía y Resultados Medibles.
              </p>
            </div>

            <div className="mt-8 flex gap-8">
              <div>
                <span className="block text-2xl font-display text-navy font-medium">100%</span>
                <span className="text-[10px] uppercase tracking-widest text-navy/80 font-bold mt-1 block">Compromiso</span>
              </div>
              <div>
                <span className="block text-2xl font-display text-navy font-medium">24h</span>
                <span className="text-[10px] uppercase tracking-widest text-navy/80 font-bold mt-1 block">Respuesta</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};