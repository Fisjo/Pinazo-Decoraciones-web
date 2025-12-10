import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Hablemos" 
          title="Contacto" 
          alignment="center"
        />

        {/* Texto Introductorio Centrado */}
        <div className="max-w-3xl mx-auto text-center mt-12 mb-16">
            <h3 className="font-serif text-2xl text-zinc-900 dark:text-white mb-6">
                Estamos a su disposición
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed text-lg">
                Para cualquier consulta sobre nuestros servicios de decoración, eventos o alquiler de material, 
                no dude en contactarnos a través de los siguientes canales o visitarnos en nuestras instalaciones.
            </p>
        </div>

        {/* Grid de Contacto (3 Columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Tarjeta Teléfono */}
            <div className="flex flex-col items-center p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-sm shadow-sm hover:shadow-md transition-all text-center group">
                <div className="w-12 h-12 bg-wine-50 dark:bg-wine-900/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Phone className="text-wine-600 dark:text-wine-400" size={24} />
                </div>
                <h4 className="text-zinc-900 dark:text-white font-serif text-xl mb-3">Llámenos</h4>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium text-lg mb-1">+34 96 391 20 21</p>
                <p className="text-zinc-500 text-sm">Lunes a Viernes, 07:30 - 14:30</p>
            </div>

            {/* Tarjeta Email */}
            <div className="flex flex-col items-center p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-sm shadow-sm hover:shadow-md transition-all text-center group">
                <div className="w-12 h-12 bg-wine-50 dark:bg-wine-900/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Mail className="text-wine-600 dark:text-wine-400" size={24} />
                </div>
                <h4 className="text-zinc-900 dark:text-white font-serif text-xl mb-3">Escríbanos</h4>
                <div className="space-y-1">
                    <p className="text-zinc-600 dark:text-zinc-400">pinazo@pinazodecoraciones.com</p>
                    <p className="text-zinc-600 dark:text-zinc-400">nacho@pinazodecoraciones.com</p>
                    <p className="text-zinc-600 dark:text-zinc-400">carlos@pinazodecoraciones.com</p>
                </div>
            </div>

            {/* Tarjeta Horario */}
            <div className="flex flex-col items-center p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-sm shadow-sm hover:shadow-md transition-all text-center group">
                <div className="w-12 h-12 bg-wine-50 dark:bg-wine-900/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Clock className="text-wine-600 dark:text-wine-400" size={24} />
                </div>
                <h4 className="text-zinc-900 dark:text-white font-serif text-xl mb-3">Horario</h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-1">Lunes - Viernes</p>
                <p className="text-zinc-900 dark:text-white font-medium text-lg">07:30 - 14:30</p>
                <p className="text-zinc-500 text-sm mt-2">Sábados y Domingos cerrado</p>
            </div>
        </div>

        {/* Sección de Mapa integrada (Opcional pero recomendada para rellenar espacio) */}
        <div className="w-full h-[400px] bg-zinc-200 dark:bg-zinc-800 relative rounded-sm overflow-hidden shadow-lg border border-zinc-200 dark:border-zinc-700">
             <iframe 
                src="https://maps.google.com/maps?q=Pinazo%20Decoraciones%20S.L.%2C%20C%2F%20Ceramistas%20n2%2C%2046132%20Almassera%2C%20Espa%C3%B1a&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{border:0, filter: 'grayscale(100%) invert(90%) contrast(85%)'}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Pinazo Decoraciones"
            ></iframe>
            {/* Overlay para estilo */}
            <div className="absolute inset-0 pointer-events-none mix-blend-overlay bg-wine-500/10"></div>
            
            {/* Etiqueta flotante sobre el mapa */}
            <div className="absolute bottom-4 left-4 bg-white dark:bg-zinc-900 p-4 rounded shadow-lg max-w-xs border-l-4 border-wine-500">
                <div className="flex items-start gap-3">
                    <MapPin className="text-wine-500 mt-1 shrink-0" size={20} />
                    <div>
                        <p className="font-bold text-zinc-900 dark:text-white text-sm">Visítenos</p>
                        <p className="text-zinc-600 dark:text-zinc-400 text-xs mt-1">
                            C/ Ceramistas nº 2<br/>
                            Polígono Ind. El Barranc.<br/>
                            46132 Almàssera (Valencia)
                        </p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};