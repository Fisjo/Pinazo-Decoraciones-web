import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    quote: "Empresa muy profesional. Una tranquilidad realizar un evento con ellos, porque todo lo planifican al detalle y trabajan de forma impecable, cubriendo con creces las expectativas de los clientes. Su personal técnico es muy cualificado y su predisposición y actitud hacen que todo parezca fácil. Ha sido un verdadero placer realizar el acto de graduación de nuestros hijos con ellos. Los recomiendo encarecidamente. ¡Felicidades por vuestro buenhacer!",
    author: "Pepa Bravo",
    role: "Graduación alumnos",
    company: "Colegio Alemán"
  },
  {
    id: 2,
    quote: "Si quieres profesionales para el montaje de tu evento ellos son la solución. Llevan muchos años en el sector. Además Carlos y Nacho, los hermanos Pinazo son profesionales y muy amables, te aconsejan para la mejor opción",
    author: "Amparo Barriga",
    role: "Graduación Alumnos",
    company: "Colegio Caxton College"
  },
  {
    id: 3,
    quote: "Si quieres profesionales para el montaje de tu evento ellos son la solución. Llevan muchos años en el sector. Además Carlos y Nacho, los hermanos Pinazo son profesionales y muy amables, te aconsejan para la mejor opción",
    author: "Norberto Martinez",
    role: "Proveedor Textil",
    company: "Textil Aldaia"
  },
  {
    id: 4,
    quote: "Calidad , servicio y profesionalidad.",
    author: "Arturo Soler",
    role: "Jefe de producción",
    company: "Pasarela Iluminación"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-zinc-900 border-y border-zinc-200 dark:border-white/5 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-wine-600/5 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <Quote className="text-wine-500 mx-auto opacity-50 mb-6" size={48} />
            <h2 className="font-serif text-3xl md:text-4xl text-zinc-900 dark:text-white mb-2">Confianza y Resultados</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-zinc-50 dark:bg-zinc-950 p-10 rounded-sm border border-zinc-100 dark:border-white/5 relative shadow-sm transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Quote size={80} className="text-zinc-900 dark:text-white transform scale-x-[-1]" />
              </div>
              <p className="font-serif text-xl text-zinc-600 dark:text-zinc-300 italic mb-8 leading-relaxed">
                "{item.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-1 bg-wine-500 mr-4"></div>
                <div>
                  <p className="text-zinc-900 dark:text-white font-bold font-sans tracking-wide">{item.author}</p>
                  <p className="text-wine-500/80 text-sm uppercase tracking-wider">{item.role}</p>
                  {item.company && <p className="text-zinc-500 text-xs mt-1">{item.company}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};