import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Clock, Award, Users } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <SectionHeading 
          subtitle="Nuestra Historia" 
          title="Casi 150 Años de Tradición" 
          alignment="center"
        />

        {/* Intro Text */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-2xl font-serif text-zinc-600 dark:text-zinc-200 leading-relaxed italic">
            "Desde 1876, vistiendo los momentos más importantes de la historia valenciana."
          </p>
          <div className="w-24 h-0.5 bg-wine-500 mx-auto mt-8"></div>
        </div>

        {/* Timeline Section */}
        <div className="relative mb-24">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-zinc-200 dark:bg-white/10 hidden md:block"></div>
            
            <div className="space-y-16">
                {/* Milestone 1 */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
                    <div className="md:w-1/2 text-right pr-8 hidden md:block">
                        {/* UPDATED: Increased contrast for year text */}
                        <span className="text-6xl font-serif text-zinc-200 dark:text-white/20 font-bold transition-colors">1876</span>
                    </div>
                    <div className="relative z-10 w-12 h-12 rounded-full bg-white dark:bg-zinc-950 border border-wine-500 flex items-center justify-center shadow-lg">
                        <Clock size={20} className="text-wine-500" />
                    </div>
                    <div className="md:w-1/2 pl-0 md:pl-8 text-center md:text-left">
                        <h3 className="text-2xl font-serif text-zinc-900 dark:text-white mb-2">La Fundación</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Nace Pinazo Decoraciones. En una época donde la artesanía lo era todo, comenzamos nuestro viaje vistiendo celebraciones religiosas y eventos locales, sentando las bases de una tradición familiar que perduraría por siglos.
                        </p>
                    </div>
                </div>

                 {/* Milestone 2 */}
                 <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
                    <div className="md:w-1/2 text-right pr-0 md:pr-8 text-center md:text-right order-last md:order-first">
                         <h3 className="text-2xl font-serif text-zinc-900 dark:text-white mb-2">Evolución y Adaptación</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            A lo largo de las décadas, nos adaptamos a los nuevos tiempos sin perder nuestra esencia. Incorporamos nuevas estructuras, tejidos modernos y técnicas de montaje, convirtiéndonos en referentes para las grandes ferias y exposiciones del siglo XX.
                        </p>
                    </div>
                    <div className="relative z-10 w-12 h-12 rounded-full bg-white dark:bg-zinc-950 border border-wine-500 flex items-center justify-center shadow-lg">
                         <Award size={20} className="text-wine-500" />
                    </div>
                    <div className="md:w-1/2 pl-8 hidden md:block">
                         <span className="text-6xl font-serif text-zinc-200 dark:text-white/20 font-bold transition-colors">1950s</span>
                    </div>
                </div>

                 {/* Milestone 3 */}
                 <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">
                    <div className="md:w-1/2 text-right pr-8 hidden md:block">
                         <span className="text-6xl font-serif text-zinc-200 dark:text-white/20 font-bold transition-colors">2025</span>
                    </div>
                    <div className="relative z-10 w-12 h-12 rounded-full bg-white dark:bg-zinc-950 border border-wine-500 flex items-center justify-center shadow-lg">
                         <Users size={20} className="text-wine-500" />
                    </div>
                    <div className="md:w-1/2 pl-0 md:pl-8 text-center md:text-left">
                        <h3 className="text-2xl font-serif text-zinc-900 dark:text-white mb-2">Hacia el 150 Aniversario</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Hoy, bajo la dirección de los hermanos Carlos y Nacho Pinazo, combinamos la herencia artesanal con la tecnología más puntera. Preparamos con ilusión nuestro 150 aniversario, celebrando un siglo y medio de excelencia en el sector de los eventos.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
            <div className="h-[400px] overflow-hidden rounded-sm relative group">
                <img 
                    src="/public/Antiguas/AltarAntiguo.jpeg" 
                    alt="Evento Antiguo" 
                    className="w-full h-full object-cover filter sepia opacity-90 hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
                    <p className="text-wine-100 font-serif italic text-xl drop-shadow-md">La Tradición</p>
                </div>
            </div>
             <div className="h-[400px] overflow-hidden rounded-sm relative group">
                <img 
                    src="/public/ExaltaciónFFMM.jpg" 
                    alt="Evento Moderno" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                 <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
                    <p className="text-white font-serif italic text-xl drop-shadow-md">La Vanguardia</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};