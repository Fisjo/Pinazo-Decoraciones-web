import React from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { Phone, Mail, Clock } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Hablemos" 
          title="Contacto" 
          alignment="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
            {/* Contact Info */}
            <div className="space-y-10">
                <div>
                    <h3 className="font-serif text-2xl text-zinc-900 dark:text-white mb-6">Información de Contacto</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-8">
                        Estamos a su disposición para asesorarle en su próximo evento. Solicite presupuesto sin compromiso o concierte una cita para visitar nuestras instalaciones.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-start p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-sm shadow-sm transition-colors">
                        <Phone className="text-wine-500 mt-1 mr-4" size={24} />
                        <div>
                            <p className="text-zinc-900 dark:text-white font-serif text-lg mb-1">Teléfono</p>
                            <p className="text-zinc-600 dark:text-zinc-400">+34 96 391 20 21</p>
                            <p className="text-zinc-500 text-sm mt-1">Lunes a Viernes, 07:30 - 14:30</p>
                        </div>
                    </div>

                    <div className="flex items-start p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-sm shadow-sm transition-colors">
                        <Mail className="text-wine-500 mt-1 mr-4" size={24} />
                        <div>
                            <p className="text-zinc-900 dark:text-white font-serif text-lg mb-1">Email</p>
                            <p className="text-zinc-600 dark:text-zinc-400">pinazo@pinazodecoraciones.com</p>
                            <p className="text-zinc-600 dark:text-zinc-400">nacho@pinazodecoraciones.com</p>
                            <p className="text-zinc-600 dark:text-zinc-400">carlos@pinazodecoraciones.com</p>
                        </div>
                    </div>

                     <div className="flex items-start p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-sm shadow-sm transition-colors">
                        <Clock className="text-wine-500 mt-1 mr-4" size={24} />
                        <div>
                            <p className="text-zinc-900 dark:text-white font-serif text-lg mb-1">Horario Atención</p>
                            <p className="text-zinc-600 dark:text-zinc-400">Lunes - Viernes: 07:30 - 14:30</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white dark:bg-zinc-900 p-8 md:p-10 rounded-sm border-t-4 border-wine-500 shadow-2xl transition-colors">
                <h3 className="font-serif text-2xl text-zinc-900 dark:text-white mb-2">Envíenos un mensaje</h3>
                <p className="text-zinc-500 text-sm mb-8">Le responderemos con la mayor brevedad posible.</p>
                
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">Nombre</label>
                            <input type="text" className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white px-4 py-3 focus:outline-none focus:border-wine-500 transition-colors" placeholder="Su nombre" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">Teléfono</label>
                            <input type="tel" className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white px-4 py-3 focus:outline-none focus:border-wine-500 transition-colors" placeholder="+34..." />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">Email</label>
                        <input type="email" className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white px-4 py-3 focus:outline-none focus:border-wine-500 transition-colors" placeholder="correo@ejemplo.com" />
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">Tipo de Evento</label>
                        <select className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white px-4 py-3 focus:outline-none focus:border-wine-500 transition-colors appearance-none">
                            <option>Seleccione una opción</option>
                            <option>Boda</option>
                            <option>Presentación Fallera</option>
                            <option>Evento Corporativo</option>
                            <option>Acto Institucional</option>
                            <option>Alquiler de Material</option>
                            <option>Otro</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">Mensaje</label>
                        <textarea rows={4} className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white px-4 py-3 focus:outline-none focus:border-wine-500 transition-colors" placeholder="Describa brevemente lo que necesita..."></textarea>
                    </div>

                    <Button type="button" className="w-full">Enviar Mensaje</Button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};