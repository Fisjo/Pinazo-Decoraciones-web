import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from './ui/Button';

export const LocationPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Ubicación" 
          title="Dónde Estamos" 
          alignment="center"
        />

        <div className="mt-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-sm overflow-hidden shadow-2xl transition-colors">
            <div className="flex flex-col lg:flex-row h-[600px]">
                
                {/* Info Panel */}
                <div className="w-full lg:w-1/3 p-10 flex flex-col justify-center relative">
                    <div className="absolute top-0 right-0 p-4 opacity-5">
                        <MapPin size={150} className="text-wine-500" />
                    </div>
                    
                    <h3 className="font-serif text-3xl text-zinc-900 dark:text-white mb-8">Visite Nuestras Instalaciones</h3>
                    
                    <div className="space-y-8 relative z-10">
                        <div>
                            <h4 className="text-wine-500 font-bold uppercase tracking-widest text-xs mb-2">Dirección</h4>
                            <p className="text-zinc-600 dark:text-zinc-300 text-lg">
                                C/ Ceramistas n2 (Poligono Ind. El Barranc.)<br />
                                46132 Almassera<br />
                                España
                            </p>
                        </div>

                         <div>
                            <h4 className="text-wine-500 font-bold uppercase tracking-widest text-xs mb-2">Referencias</h4>
                            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                                Situados en el polígono industrial de Almassera. Disponemos de zona de carga para recogida de material.
                            </p>
                        </div>

                         <div className="pt-4">
                             <a 
                                href="https://www.google.com/maps/search/?api=1&query=Pinazo+Decoraciones+Valencia" 
                                target="_blank" 
                                rel="noreferrer"
                             >
                                <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                                    <Navigation size={18} />
                                    Cómo llegar
                                </Button>
                             </a>
                        </div>
                    </div>
                </div>

                {/* Map Frame (Simulated) */}
                <div className="w-full lg:w-2/3 h-full bg-zinc-200 dark:bg-zinc-800 relative">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.456637854616!2d-0.4042816!3d39.4816999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4cf30b0b8b%3A0x6290073081395374!2sAv.%20de%20les%20Corts%20Valencianes%2C%2058%2C%2046015%20Val%C3%A8ncia%2C%20Valencia!5e0!3m2!1ses!2ses!4v1715421234567!5m2!1ses!2ses" 
                        width="100%" 
                        height="100%" 
                        style={{border:0, filter: 'grayscale(100%) invert(90%) contrast(85%)'}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"
                    ></iframe>
                    
                    {/* Custom Map Overlay for style consistency */}
                    <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-wine-500/10"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};