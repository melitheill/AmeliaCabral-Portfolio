'use server';

import { Resend } from 'resend';
import { z } from 'zod';

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
    console.log("🔴 ERROR CRÍTICO: No se encontró RESEND_API_KEY.");
}

const resend = new Resend(apiKey);

// 1. ACTUALIZAR EL SCHEMA: Agregamos 'service'
const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    service: z.string().min(1, "Debes seleccionar un servicio"), // Nuevo campo
    message: z.string().min(10),
});

export async function sendEmail(prevState: any, formData: FormData) {
    console.log("1. Iniciando envío...");

    // 2. EXTRAER EL DATO: Obtenemos 'service' del formData
    const validatedFields = schema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        service: formData.get('service'), // Nuevo campo recuperado
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return { success: false, message: 'Campos inválidos' };
    }

    const { name, email, message, service } = validatedFields.data;

    try {
        // 3. INCLUIR EN EL EMAIL: Usamos 'html' para formatearlo bonito
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>', // O tu dominio verificado
            to: 'theillcabral@gmail.com',
            subject: `Nuevo Lead: ${service} - de ${name}`, // Puse el servicio en el asunto para que lo veas rápido
            reply_to: email,
            // Aquí construimos el cuerpo del correo con HTML simple
            html: `
                <div>
                    <h2>Tienes un nuevo mensaje de contacto</h2>
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Servicio de interés:</strong> <span style="color: #d97706; font-weight: bold;">${service}</span></p>
                    <hr />
                    <h3>Mensaje:</h3>
                    <p>${message}</p>
                </div>
            `,
            // Mantenemos la versión texto plano por si acaso
            text: `Nombre: ${name}\nEmail: ${email}\nServicio: ${service}\n\nMensaje:\n${message}`
        });

        if (error) {
            console.error("🔴 ERROR DE RESEND:", error);
            return { success: false, message: error.message };
        }

        console.log("🟢 ÉXITO! Email enviado. ID:", data?.id);
        return { success: true, message: 'Email enviado correctamente' };

    } catch (error) {
        console.error("🔴 ERROR DEL SERVIDOR:", error);
        return { success: false, message: 'Error interno del servidor' };
    }
}