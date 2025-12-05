import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { ServiceItem } from '../types';
import { Crown, Heart, Building2, Mic2 } from 'lucide-react';
import { Button } from './ui/Button';

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Presentaciones Falleras y Reinas',
    description: 'Tradición y majestuosidad. Escenarios clásicos, tronos y decoración floral para la exaltación de nuestras fiestas.',
    icon: Crown,
    imageUrl: '/public/PresentacionesReinaFiestas.jpg'
  },
  {
    id: 2,
    title: 'Bodas y Celebraciones',
    description: 'Creamos el ambiente romántico perfecto. Ceremonias civiles, banquetes y rincones con encanto.',
    icon: Heart,
    imageUrl: 'https://images.unsplash.com/photo-1519225468359-2996bc15e556?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Eventos Corporativos',
    description: 'Stands, ferias y lanzamientos de producto. Infraestructura profesional para potenciar su imagen de marca.',
    icon: Building2,
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Actos Institucionales',
    description: 'Protocolo y solemnidad. Escenarios oficiales, tarimas y acondicionamiento para actos públicos.',
    icon: Mic2,
    imageUrl: '/public/ActoPublico.jpg'
  }
];

interface ServicesProps {
  onViewDetails: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onViewDetails }) => {
  return (
    <section id="servicios" className="py-24 bg-zinc-50 dark:bg-zinc-950 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Nuestros Servicios" 
          title="Escenarios para cada Ocasión" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group relative h-[400px] overflow-hidden rounded-sm cursor-pointer border border-zinc-200 dark:border-white/5 shadow-sm hover:shadow-xl transition-all"
              onClick={onViewDetails}
            >
              {/* Image Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.imageUrl})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950/60 to-transparent opacity-90 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="mb-2 transform translate-y-0 transition-transform duration-500">
                  <div className="w-10 h-10 mb-4 bg-wine-600/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-wine-500/50 group-hover:bg-wine-500 group-hover:text-white transition-colors duration-300 shadow-lg">
                    <service.icon className="text-white" size={20} />
                  </div>
                  <h3 className="font-serif text-xl text-white mb-2 leading-tight drop-shadow-sm">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-zinc-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 h-0 group-hover:h-auto overflow-hidden font-medium">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
            <Button variant="outline" onClick={onViewDetails}>Ver Todos los Servicios</Button>
        </div>
      </div>
    </section>
  );
};