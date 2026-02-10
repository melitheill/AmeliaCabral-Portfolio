'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactSchema, ContactFormData } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';
import { sendEmail } from '@/app/actions/send-email';

export const Contact: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      service: 'Copywriting Web'
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);
    formData.append('service', data.service);

    const result = await sendEmail({ message: '', success: false }, formData);

    if (result.success) {
      console.log("Email enviado:", data);
      setIsSuccess(true);
      reset();
    } else {
      setServerError(result.message || "Something went wrong.");
    }
  };

  // ESTILOS DE LOS INPUTS
  // Se agregó 'focus:outline-none' al final para quitar el borde negro del navegador
  const labelStyle = "block text-xs font-bold leading-6 text-navy mb-0.5 uppercase tracking-wide opacity-90";
  const inputStyle = "block w-full rounded-md border-0 py-1.5 px-3 text-navy shadow-sm ring-1 ring-inset ring-navy/20 placeholder:text-navy/30 focus:ring-2 focus:ring-inset focus:ring-orange sm:text-sm sm:leading-6 transition-all bg-white focus:outline-none";

  return (
    <section id="contacto" className="scroll-mt-[60px] px-6 py-6 lg:py-12 bg-mint relative overflow-hidden">

      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent opacity-60 pointer-events-none"></div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-between">

          {/* IZQUIERDA: TEXTO */}
          <div className="flex flex-col pt-2 max-w-md w-full md:items-center md:text-center lg:items-start lg:text-left mx-auto lg:mx-0">
            <div className="mb-4 lg:mb-0">
              <span className="text-navy uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mb-3 block opacity-60">Contacto</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal text-navy mb-6 font-display leading-tight">
                Hablemos de tu <br />próximo proyecto.
              </h2>

              <div className="w-12 h-1 bg-orange/40 mb-6 rounded-full md:mx-auto lg:mx-0"></div>

              <ul className="flex flex-col gap-4 text-navy/90 text-sm md:text-base font-normal">
                <li className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-5 h-5 mt-0.5 text-orange">
                    <span className="material-symbols-outlined text-xl">check</span>
                  </span>
                  <span>Estrategias de contenido a medida de tus objetivos comerciales.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-5 h-5 mt-0.5 text-orange">
                    <span className="material-symbols-outlined text-xl">check</span>
                  </span>
                  <span>Identificación de oportunidades para potenciar tu voz de marca.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="shrink-0 flex items-center justify-center w-5 h-5 mt-0.5 text-orange">
                    <span className="material-symbols-outlined text-xl">check</span>
                  </span>
                  <span>Copywriting persuasivo diseñado para atraer y convertir.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* DERECHA: FORMULARIO */}
          <div className="w-full lg:w-[480px] shrink-0">
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xl shadow-navy/5">

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-6 min-h-[300px]"
                  >
                    <div className="w-14 h-14 rounded-full bg-mint/30 flex items-center justify-center mb-3 text-dark-green">
                      <span className="material-symbols-outlined text-2xl">check_circle</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-navy mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-navy/70 mb-4 text-xs">Gracias por escribirme. Te responderé a la brevedad.</p>
                    <button onClick={() => setIsSuccess(false)} className="text-xs font-bold uppercase tracking-wider text-orange hover:text-navy transition-colors border-b border-orange/30 pb-0.5">
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-3"
                  >
                    <div className="mb-1 text-center lg:text-left">
                      <h3 className="text-xl font-serif font-bold text-navy">Envíame un mensaje</h3>
                    </div>

                    {serverError && (
                      <div className="bg-red-50 border border-red-100 text-red-600 text-[10px] p-2 rounded-md">
                        {serverError}
                      </div>
                    )}

                    <div>
                      <label htmlFor="name" className={labelStyle}>
                        Nombre <span className="text-orange">*</span>
                      </label>
                      <input {...register("name")} type="text" id="name" placeholder="Tu nombre" className={inputStyle} />
                      {errors.name && <span className="text-red-500 text-[10px] mt-0.5 font-medium">{errors.name.message}</span>}
                    </div>

                    <div>
                      <label htmlFor="email" className={labelStyle}>
                        Email <span className="text-orange">*</span>
                      </label>
                      <input {...register("email")} type="email" id="email" placeholder="tu@email.com" className={inputStyle} />
                      {errors.email && <span className="text-red-500 text-[10px] mt-0.5 font-medium">{errors.email.message}</span>}
                    </div>

                    <div>
                      <label htmlFor="service" className={labelStyle}>Servicio</label>
                      <div className="relative">
                        {/* CORRECCIONES EN EL SELECT:
                            1. appearance-none: Quita la flecha por defecto.
                            2. pr-10: Da espacio a la derecha para que el texto no tape el icono.
                        */}
                        <select
                          {...register("service")}
                          id="service"
                          className={`${inputStyle} appearance-none pr-10`}
                        >
                          <option value="Copywriting Web">Copywriting Web</option>
                          <option value="Email Marketing">Email Marketing</option>
                          <option value="Contenido Estratégico">Contenido Estratégico</option>
                          <option value="Otro">Otro</option>
                        </select>

                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-navy/50">
                          <span className="material-symbols-outlined text-lg">expand_more</span>
                        </span>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className={labelStyle}>
                        Mensaje <span className="text-orange">*</span>
                      </label>
                      <textarea {...register("message")} id="message" rows={3} placeholder="Cuéntame sobre tu proyecto..." className={inputStyle}></textarea>
                      {errors.message && <span className="text-red-500 text-[10px] mt-0.5 font-medium">{errors.message.message}</span>}
                    </div>

                    <div className="mt-4 flex justify-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="
                            inline-flex items-center justify-center gap-2
                            px-8 py-2.5
                            rounded-full
                            text-xs font-normal uppercase tracking-widest
                            bg-navy text-white
                            hover:bg-orange hover:text-white
                            transition-colors duration-300
                            shadow-lg
                            disabled:opacity-70 disabled:cursor-not-allowed
                          "
                      >
                        <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
                        {!isSubmitting && (
                          <svg className="w-5 h-5 text-center" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                        )}
                      </button>
                    </div>

                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};