import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="contacto" className="bg-zinc-900 dark:bg-black text-zinc-400 pt-20 pb-10 border-t border-zinc-800 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
             <div className="flex items-center space-x-2 mb-6 cursor-pointer" onClick={() => onNavigate('home')}>
                <div className="w-8 h-8 relative flex items-center justify-center bg-white/5 rounded-sm">
                    <span className="text-wine-500 font-serif text-lg font-bold absolute left-0.5 top-0">P</span>
                    <span className="text-zinc-400 font-serif text-lg font-bold absolute right-0.5 bottom-0">d</span>
                </div>
                <div>
                    <h2 className="text-xl font-sans font-bold text-white tracking-widest">PINAZO</h2>
                </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Creando atmósferas únicas desde 1995. Referente en decoración de eventos e infraestructuras en la Comunidad Valenciana.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/nachopinazo/?locale=es_ES" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-wine-500 hover:text-white hover:border-wine-500 transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://www.linkedin.com/in/pinazo-decoraciones-2426603a/" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center hover:bg-wine-500 hover:text-white hover:border-wine-500 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-white font-serif text-lg mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-wine-500 mt-1 mr-3 shrink-0" size={18} />
                <span className="text-sm">C/ Ceramistas n2 (Poligono Ind. El Barranc.)<br/>46132 Almassera, España</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-wine-500 mr-3 shrink-0" size={18} />
                <span className="text-sm">+34 963 912 021</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-wine-500 mr-3 shrink-0" size={18} />
                <span className="text-sm">pinazo@pinazodecoraciones.com</span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-serif text-lg mb-6">Explorar</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-wine-500 transition-colors text-left">
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-wine-500 transition-colors text-left">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-wine-500 transition-colors text-left">
                  Productos
                </button>
              </li>
            </ul>
          </div>

           {/* Call to Action Small */}
           <div className="md:col-span-1">
            <h3 className="text-white font-serif text-lg mb-6">¿Tiene un proyecto?</h3>
            <p className="text-sm mb-6">Cuéntenos su idea y le ayudaremos a hacerla realidad.</p>
            <button 
              onClick={() => onNavigate('contact')}
              className="text-wine-400 text-sm uppercase tracking-widest font-bold border-b border-wine-500 pb-1 hover:text-white hover:border-white transition-all"
            >
              Escribir Mensaje
            </button>
          </div>
        </div>

        <div className="border-t border-zinc-800 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Pinazo Decoraciones. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => onNavigate('privacy')} className="hover:text-zinc-300 transition-colors">Política de Privacidad</button>
            <button onClick={() => onNavigate('legal')} className="hover:text-zinc-300 transition-colors">Aviso Legal</button>
            <button onClick={() => onNavigate('cookies')} className="hover:text-zinc-300 transition-colors">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};