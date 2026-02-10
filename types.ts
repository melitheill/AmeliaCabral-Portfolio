import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Introduce un correo electrónico válido" }),
  service: z.string().min(1, { message: "Por favor selecciona un servicio" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
});

export type ContactFormData = z.infer<typeof ContactSchema>;

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: number;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  accentColor: string; // Tailwind class text color
  numberColor: string; // Tailwind class text color
  reverse: boolean;
}

export interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  role: string;
  initials: string;
  bgClass: string;      // Card background
  textClass: string;    // Main text color
  quoteColor: string;   // Icon/Accent color
  authorClass: string;  // Author name color (usually same as textClass)
  roleClass: string;    // Role text color (usually opacity variant)
  avatarBg: string;     // Circle background
  avatarText: string;   // Initials color
  hoverBgClass?: string;    // Custom hover background (desktop)
  hoverTextClass?: string;  // Custom hover text color (desktop)
  icon?: string;            // Google Material Symbol name
  iconBgClass?: string;     // Lighter background for the icon circle
}