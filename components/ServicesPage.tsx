import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Crown, Heart, Building2, Mic2, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

const serviceSections = [
  {
    id: 'fallas',
    title: 'Decoración presentaciones Falleras y Reinas de Fiestas',
    subtitle: 'Tradición Valenciana',
    description: 'Somos especialistas en la creación de escenarios majestuosos para el mundo fallero y fiestas patronales. Entendemos la solemnidad y la emoción de la exaltación. Diseñamos tronos personalizados, decoraciones florales y fondos escenográficos que realzan la belleza de la indumentaria valenciana.',
    features: ['Decoración para fondos de escenarios', 'Pasarelas', 'Escenarios y gradas', 'Alfombras, Reposteros y Tronos'],
    image: '/public/PresentacionesReinaFiestas.jpg',
    icon: Crown,
    align: 'left'
  },
  {
    id: 'bodas',
    title: 'Decoración de Bodas',
    subtitle: 'Momentos Inolvidables',
    description: 'Transformamos espacios en escenarios de ensueño. Ya sea una ceremonia civil al aire libre o un gran banquete, cuidamos cada rincón. Desde la alfombra nupcial hasta la iluminación ambiental que acompaña el baile.',
    features: ['Enmoquetados', 'Alfombras', 'Sillones y Reclinatorios', 'Terciopelos y Damascos'],
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80',
    icon: Heart,
    align: 'right'
  },
  {
    id: 'eventos',
    title: 'Eventos y Congresos',
    subtitle: 'Soluciones e Infraestructuras',
    description: 'Soluciones integrales para ferias, congresos y eventos de empresa. Creamos stands de diseño, zonas de acreditación y espacios de networking que reflejan la identidad corporativa de su marca con elegancia y profesionalidad.',
    features: ['Mobiliario especializado', 'Escenarios Modulares', 'Enmoquetado', 'Branding y Señalética'],
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80',
    icon: Building2,
    align: 'left'
  },
  {
    id: 'institucional',
    title: 'Actos Públicos e Institucionales',
    subtitle: 'Protocolo y Solemnidad',
    description: 'Experiencia en la organización espacial de actos oficiales. Cumplimos rigurosamente con las necesidades de protocolo, ofreciendo tarimas, atriles, trasera de prensa y banderas para inauguraciones, mítines y actos oficiales.',
    features: ['Tarimas Enmoquetadas', 'Atriles y Banderas', 'Traseras Institucionales', 'Mobiliario de Protocolo'],
    image: '/public/ActoPublico.jpg',
    icon: Mic2,
    align: 'right'
  }
];

interface ServicesPageProps {
  onContact: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onContact }) => {
  return (
    <div className="pt-24 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Catálogo de Servicios" 
          title="Excelencia en Decoración" 
          alignment="center"
        />

        <div className="space-y-32 mt-20">
          {serviceSections.map((section) => (
            <div key={section.id} className={`flex flex-col lg:flex-row gap-16 items-center ${section.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 border border-wine-500/30 translate-x-4 translate-y-4 hidden lg:block transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative h-[400px] w-full overflow-hidden rounded-sm shadow-2xl">
                  <img 
                    src={section.image} 
                    alt={section.title} 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-wine-900/10 mix-blend-overlay"></div>
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-wine-500/10 rounded-full border border-wine-500/20">
                    <section.icon className="text-wine-500" size={24} />
                  </div>
                  <span className="text-wine-500 font-sans font-bold tracking-widest uppercase text-sm">
                    {section.subtitle}
                  </span>
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl text-zinc-900 dark:text-white mb-6 leading-tight">
                  {section.title}
                </h2>
                
                <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8 font-light">
                  {section.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300">
                      <CheckCircle2 className="text-wine-500 shrink-0" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button onClick={onContact}>
                  Solicitar Presupuesto
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};