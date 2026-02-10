import React from 'react';

export const Booking: React.FC = () => {
  // Enlace directo proporcionado para agendar
  const calendarUrl = "https://calendar.google.com/calendar/u/0/r/appointment?pli=1";
  const contactEmail = "ame.cabral70@gmail.com";

  return (
    <section id="reserva" className="relative py-20 lg:py-28 bg-mint overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-white/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-navy/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="max-w-[1000px] mx-auto px-6 relative z-10">
        
        <div className="bg-white rounded-3xl shadow-[0_30px_60px_rgba(12,44,71,0.08)] overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Column: Visual & Context */}
          <div className="w-full md:w-5/12 bg-navy p-10 lg:p-12 flex flex-col justify-between text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-50"></div>
            
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest mb-6">
                Discovery Call
              </span>
              <h3 className="text-3xl lg:text-4xl font-display leading-tight mb-4">
                Tu hoja de ruta comienza aquí.
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Sin bots, sin formularios interminables. Una conversación real de 45 minutos para auditar tu comunicación actual y definir los siguientes pasos.
              </p>
            </div>

            <div className="relative z-10 mt-10">
               <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center text-white shadow-lg">
                    <span className="material-symbols-outlined text-xl">calendar_month</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white/60">Disponibilidad</p>
                    <p className="text-sm font-medium">Octubre - Noviembre 2024</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Column: Action */}
          <div className="w-full md:w-7/12 p-10 lg:p-16 flex flex-col items-start justify-center">
            <span className="text-gold uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
              Agenda tu Sesión
            </span>
            <h2 className="text-3xl font-display text-navy mb-6">
              Reserva tu espacio en mi calendario
            </h2>
            
            <ul className="space-y-4 mb-10 w-full">
              {[
                "Auditoría express de tu web actual",
                "Definición de objetivos comerciales",
                "Propuesta y presupuesto a medida"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-navy/80 text-sm font-medium">
                  <span className="material-symbols-outlined text-orange text-lg">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col w-full gap-4">
              <a 
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto py-4 px-8 rounded-full bg-gradient-to-r from-orange to-[#D66540] text-white font-bold uppercase tracking-widest text-xs lg:text-sm shadow-premium hover:shadow-premium-hover hover:to-orange hover:-translate-y-1 transition-all duration-300"
              >
                <span>Ver Disponibilidad</span>
                <span className="material-symbols-outlined text-lg">open_in_new</span>
              </a>
              
              <p className="text-xs text-center sm:text-left text-gray-400 mt-2">
                ¿Prefieres escribir primero? <a href={`mailto:${contactEmail}`} className="text-navy font-bold hover:text-orange transition-colors border-b border-navy/20 hover:border-orange">{contactEmail}</a>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};