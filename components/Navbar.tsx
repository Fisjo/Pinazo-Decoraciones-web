import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NavItem, PageView } from '../types';

const navItems: NavItem[] = [
  { label: 'Inicio', id: 'home' },
  { label: 'Quiénes Somos', id: 'about' },
  { label: 'Servicios', id: 'services' },
  { label: 'Productos', id: 'products' },
  { label: 'Dónde Estamos', id: 'location' },
  { label: 'Contacto', id: 'contact' },
];

interface NavbarProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navbarBgClass = isScrolled || currentView !== 'home' 
    ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-lg border-b border-zinc-200 dark:border-white/5 py-4' 
    : 'bg-transparent py-6';

  const textClass = isScrolled || currentView !== 'home'
    ? 'text-zinc-800 dark:text-zinc-200' 
    : 'text-white'; // On hero transparent bg, always white

  const logoTextClass = isScrolled || currentView !== 'home'
    ? 'text-zinc-900 dark:text-zinc-300'
    : 'text-zinc-100';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${navbarBgClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <div className={`w-10 h-10 relative flex items-center justify-center rounded-sm transition-colors ${isScrolled || currentView !== 'home' ? 'bg-zinc-100 dark:bg-white/5' : 'bg-white/10'}`}>
                <span className="text-wine-500 font-serif text-3xl font-bold absolute left-1 top-0">P</span>
                <span className={`font-serif text-3xl font-bold absolute right-1 bottom-0 ${isScrolled || currentView !== 'home' ? 'text-zinc-600 dark:text-zinc-400' : 'text-zinc-300'}`}>d</span>
            </div>
            
            <div className="hidden sm:block leading-none">
                <h1 className={`text-2xl font-sans font-bold tracking-wide uppercase ${logoTextClass}`}>PINAZO</h1>
                <p className="text-sm text-wine-500 font-bold uppercase tracking-[0.2em]">Decoraciones</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm uppercase tracking-widest font-sans transition-colors duration-300 relative group ${
                  currentView === item.id 
                    ? 'text-wine-500 font-bold' 
                    : `${textClass} hover:text-wine-500`
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-wine-500 transition-all duration-300 ${
                  currentView === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${textClass} hover:text-wine-500 hover:bg-black/5 dark:hover:bg-white/10`}
              aria-label="Alternar tema"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
             <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${textClass}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${textClass} hover:text-wine-500 transition-colors`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-white/10 transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-6 space-y-4 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-center text-lg font-serif py-2 border-b border-zinc-100 dark:border-white/5 last:border-0 ${
                currentView === item.id ? 'text-wine-500 font-bold' : 'text-zinc-600 dark:text-zinc-300 hover:text-wine-400'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};