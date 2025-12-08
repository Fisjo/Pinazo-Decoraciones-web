import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Filter } from 'lucide-react';

const categories = ["Todos", "Textil", "Escenarios", "Mástiles y Banderas", "Mobiliario", "Branding", ]

const products = [
  { id: 1, name: "Mástiles y Banderas Interior", category: "Mástiles y Banderas", image: "/public/Banderas_P.Cervello 2.jpg" },
  { id: 2, name: "Mástiles y Banderas Exterior", category: "Mástiles y Banderas", image: "/public/bandext1.jpg.jpg" },
  { id: 3, name: "Escenarios", category: "Escenarios", image: "/public/Escenarios.jpg" },
  { id: 4, name: "Tarimas", category: "Escenarios", image: "/public/ESCENARIO-2Edf.VeleseVents.jpg" },
  { id: 5, name: "Gradas", category: "Escenarios", image: "/public/Grada2.jpg" },
  { id: 6, name: "Pasarelas", category: "Escenarios", image: "/public/Pasarela.jpg" },
  { id: 7, name: "Tarimas redondas", category: "Escenarios", image: "/public/TarimaRedonda.jpg" },
  { id: 8, name: "Trusses", category: "Escenarios", image: "/public/Truss.jpg" },
  { id: 9, name: "Cortinajes para teatros", category: "Textil", image: "/public/fotoescenari.JPG" },
  { id: 10, name: "Cicloramas", category: "Textil", image: "/public/Ciclorama.jpg" },
  { id: 11, name: "Cámaras negras", category: "Textil", image: "/public/CámaraNegra.jpg" },
  { id: 12, name: "Faldones Escenarios", category: "Textil", image: "/public/Gradas.jpg" },
  { id: 13, name: "Techos", category: "Textil", image: "/public/Techos.jpg" },
  { id: 14, name: "Cubrebalcones", category: "Textil", image: "/public/Cubrebalcones.jpg" },
  { id: 15, name: "Reposteros", category: "Textil", image: "/public/Repostero.jpg" },
  { id: 16, name: "Mesas Presidencia", category: "Mobiliario", image: "/public/MesaPresidencia.jpg" },
  { id: 17, name: "Sillas conferencia", category: "Mobiliario", image: "/public/Sillas.jpg" },
  { id: 18, name: "Catenarias", category: "Mobiliario", image: "/public/Bolardos con cordón.jpg" },
  { id: 19, name: "Atriles conferencia", category: "Mobiliario", image: "/public/FrontalAtril.jpg" },
  { id: 20, name: "Sillones y tronos", category: "Mobiliario", image: "/public/SillonesYTronos.jpeg" },
  { id: 21, name: "Photo Call", category: "Branding", image: "/public/Photocall.jpg" },
  { id: 22, name: "Frontales para mesas y atriles", category: "Branding", image: "/public/mesaVcf3personalizada.jpg" },
  { id: 23, name: "Traseras", category: "Branding", image: "/public/IMG20230509171629.jpg" },
  { id: 24, name: "Señalética", category: "Branding", image: "/public/senaletica.jpeg" },
  { id: 25, name: "Enmoquetados", category: "Escenarios", image: "/public/Enmoquetados.jpg" }
];

export const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = activeCategory === "Todos" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-20 bg-zinc-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          subtitle="Nuestro Inventario" 
          title="Productos" 
          alignment="center"
        />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center mr-4 text-wine-500">
                <Filter size={20} className="mr-2" />
                <span className="font-serif italic">Filtrar por:</span>
            </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-sans tracking-wide transition-all duration-300 border ${
                activeCategory === cat 
                  ? 'bg-wine-500 text-white border-wine-500 font-bold' 
                  : 'bg-white dark:bg-transparent text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-800 hover:border-wine-500 hover:text-wine-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group bg-white dark:bg-zinc-900 rounded-sm overflow-hidden border border-zinc-200 dark:border-white/5 hover:border-wine-500/50 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-wine-500 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        Consultar
                    </span>
                </div>
              </div>
              <div className="p-4 text-center">
                <p className="text-wine-500 text-xs uppercase tracking-widest mb-1">{product.category}</p>
                <h3 className="text-zinc-900 dark:text-white font-serif text-lg group-hover:text-wine-500 dark:group-hover:text-wine-400 transition-colors">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};