import React from 'react';
import { Button } from './ui/Button';
import { ArrowDown } from 'lucide-react';
import { PageView } from '../types';

interface HeroProps {
  onNavigate: (view: PageView) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
        style={{
          // In a real implementation, you would place your image in /assets/images/home-hero.jpg
          backgroundImage: 'url(/public/HomePicture.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/40 to-zinc-950"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <span className="inline-block py-1 px-3 border border-wine-500/30 rounded-full bg-black/30 backdrop-blur-sm text-wine-400 text-xs sm:text-sm font-sans uppercase tracking-[0.2em] mb-6 animate-fade-in-up">
            Valencia • España
        </span>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight animate-fade-in-up animation-delay-200">
          Creamos Eventos <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-wine-400 to-rose-700">Inolvidables</span>
        </h1>
        
        <p className="font-sans text-zinc-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up animation-delay-400">
          Especialistas en decoración, montaje de escenarios e infraestructuras efímeras para eventos corporativos y sociales.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up animation-delay-600">
          <Button onClick={() => onNavigate('contact')}>
            Solicitar Presupuesto
          </Button>
          <Button variant="outline" onClick={() => onNavigate('products')}>
            Ver Catálogo
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <ArrowDown className="text-white" size={24} />
      </div>
    </div>
  );
};