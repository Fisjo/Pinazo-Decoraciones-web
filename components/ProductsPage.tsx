import React, { useState } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { Filter } from 'lucide-react';

const categories = ["Todos", "Textil", "Escenarios", "Mástiles y Banderas", "Mobiliario", "Branding", ]

const products = [
  { id: 1, name: "Mástiles y Banderas Interior", category: "Mástiles y Banderas", image: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&q=80" },
  { id: 2, name: "Mástiles y Banderas Exterior", category: "Mástiles y Banderas", image: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?auto=format&fit=crop&q=80" },
  { id: 3, name: "Escenarios", category: "Escenarios", image: "https://images.unsplash.com/photo-1506092325852-67c7cb75d198?auto=format&fit=crop&q=80" },
  { id: 4, name: "Tarimas", category: "Escenarios", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80" },
  { id: 5, name: "Gradas", category: "Escenarios", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80" },
  { id: 6, name: "Pasarelas", category: "Escenarios", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80" },
  { id: 7, name: "Tarimas redondas", category: "Escenarios", image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80" },
  { id: 8, name: "Trusses", category: "Escenarios", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80" },
  { id: 9, name: "Cortinajes para teatros", category: "Textil", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80" },
  { id: 10, name: "Cicloramas", category: "Textil", image: "https://images.unsplash.com/photo-1455134168668-5a0280ebcfb7?auto=format&fit=crop&q=80" },
  { id: 11, name: "Cámaras negras", category: "Textil", image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80" },
  { id: 12, name: "Faldones Escenarios", category: "Textil", image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80" },
  { id: 13, name: "Techos", category: "Textil", image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80" },
  { id: 14, name: "Cubrebalcones", category: "Textil", image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80" },
  { id: 15, name: "Reposteros", category: "Textil", image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80" },
  { id: 16, name: "Mesas Presidencia", category: "Mobiliario", image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80" },
  { id: 17, name: "Sillas conferencia", category: "Mobiliario", image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80" },
  { id: 18, name: "Catenarias", category: "Mobiliario", image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80" },
  { id: 19, name: "Atriles conferencia", category: "Mobiliario", image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80" },
  { id: 20, name: "Sillones y tronos", category: "Mobiliario", image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80" },
  { id: 21, name: "Photo Call", category: "Branding", image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80" },
  { id: 22, name: "Frontales para mesas y atriles", category: "Branding", image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80" },
  { id: 23, name: "Traseras", category: "Branding", image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80" },
  { id: 24, name: "Señalética", category: "Branding", image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80" },
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