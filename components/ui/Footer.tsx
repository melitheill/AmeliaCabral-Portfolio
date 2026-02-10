import React from 'react';

export const Footer: React.FC = () => {
  // --- ESTILO ORIGINAL (con efecto de subrayado) ---
  const linkStyles = `
    relative 
    inline-block 
    w-fit 
    text-white 
    text-sm 
    font-medium 
    cursor-pointer 
    transition-colors 
    duration-300 
    hover:text-mint
    
    after:content-[''] 
    after:absolute 
    after:left-0 
    after:-bottom-1 
    after:h-[2px] 
    after:w-full 
    after:bg-mint 
    after:scale-x-0 
    hover:after:scale-x-100 
    after:transition-transform 
    after:duration-300 
    after:origin-left
  `;

  // --- NUEVO ESTILO SIMPLE (sin efecto de subrayado) ---
  // Solo mantiene el color blanco base y el cambio a mint en hover.
  const plainLinkStyles = "text-white text-sm font-medium transition-colors duration-300 hover:text-mint cursor-pointer";

  const columnTitleStyles = "text-mint text-xs uppercase tracking-[0.2em] font-bold mb-6";

  return (
    <footer className="bg-[#0C2C47] pt-10 pb-20 px-6 lg:pt-40 lg:min-h-[80vh] text-white relative overflow-hidden">

      <div className="w-full max-w-6xl mx-auto">

        {/* Headline Section */}
        <div className="mb-10 text-left md:text-center md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white leading-tight max-w-4xl lg:mx-auto">
            ¿Lista para contar tu historia?
          </h2>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8 justify-items-start lg:justify-items-center">

          {/* Col 1: Brand */}
          <div className="flex flex-col items-start text-left">
            <a className="text-3xl font-bold tracking-tight text-white font-display mb-2 hover:scale-105 transition-transform duration-300 origin-left" href="#home">
              Amelia Cabral
            </a>
            <span className="font-display text-base text-orange font-light italic mb-4 text-left tracking-wide">Estrategia con alma</span>
            <p className="text-white/60 text-[13px] leading-relaxed max-w-xs text-left">
              Copywriting de alto impacto para marcas que buscan conectar, persuadir y vender desde la autenticidad.
            </p>
          </div>

          {/* Col 2: Menu */}
          <div className="flex flex-col items-start text-left">
            <h4 className={columnTitleStyles}>MENÚ</h4>
            <div className="flex flex-col gap-3">
              <a href="#home" className={linkStyles}>Home</a>
              <a href="#servicios" className={linkStyles}>Servicios</a>
              <a href="#sobre-mi" className={linkStyles}>Sobre mí</a>
              <a href="#opiniones" className={linkStyles}>Testimonios</a>
              <a href="#contacto" className={linkStyles}>Contacto</a>
            </div>
          </div>

          {/* Col 3: Contact */}
          <div className="flex flex-col items-start text-left">
            <h4 className={columnTitleStyles}>CONTACTO</h4>
            <div className="flex flex-col gap-3">
              {/* APLICACIÓN DEL NUEVO ESTILO SIN EFECTO */}
              <a href="mailto:theillcabral@gmail.com" className={plainLinkStyles}>theillcabral@gmail.com</a>
              <span className="text-white/70 text-sm font-medium">Tandil, Argentina</span>
            </div>
          </div>

          {/* Col 4: Social */}
          <div className="flex flex-col items-start text-left">
            <h4 className={columnTitleStyles}>SÍGUEME</h4>
            <div className="flex flex-row gap-6 mt-1">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/amelia-cabral/" target="_blank" rel="noopener noreferrer" className="text-mint transition-transform duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-mint transition-transform duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.153 1.772c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.373c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-mint transition-transform duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 1.905c-5.515 0-10 4.493-10 10.01 0 2.052.614 3.964 1.673 5.589L2.25 21.75l4.389-1.365c1.58.995 3.44 1.528 5.361 1.528 5.515 0 10-4.493 10-10.009 0-5.517-4.485-10.01-10-10.01zM12 19.86c-1.637 0-3.2-.486-4.524-1.332l-.337-.215-2.822.877.886-2.735-.228-.352A7.95 7.95 0 013.905 11.91c0-4.475 3.632-8.106 8.095-8.106 4.464 0 8.096 3.63 8.096 8.106 0 4.474-3.632 8.105-8.096 8.105zm4.493-5.914c-.246-.123-1.458-.72-1.684-.802-.225-.082-.39-.123-.554.123-.165.247-.637.802-.781.967-.144.165-.288.185-.534.062-1.399-.708-2.52-1.583-3.321-3.007-.206-.369.205-.342.593-1.109.062-.124.02-.226-.02-.35-.041-.123-.554-1.336-.76-1.83-.2-.48-.403-.414-.554-.422-.143-.008-.308-.008-.473-.008-.164 0-.432.062-.657.309-.226.247-.864.843-.864 2.057 0 1.213.884 2.386 1.007 2.55.123.165 1.737 2.652 4.208 3.719 1.64.708 2.276.708 3.076.658.885-.054 1.89-.773 2.157-1.519.267-.746.267-1.385.185-1.519-.082-.134-.308-.216-.554-.339z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};