import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ServicesPage } from './components/ServicesPage';
import { ProductsPage } from './components/ProductsPage';
import { ContactPage } from './components/ContactPage';
import { LocationPage } from './components/LocationPage';
import { AboutPage } from './components/AboutPage';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { LegalPage, PrivacyPage, CookiesPage } from './components/LegalPages';
import { PageView } from './types';

function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const renderView = () => {
    switch(currentView) {
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage onContact={() => setCurrentView('contact')} />;
      case 'products':
        return <ProductsPage />;
      case 'contact':
        return <ContactPage />;
      case 'location':
        return <LocationPage />;
      case 'legal':
        return <LegalPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'cookies':
        return <CookiesPage />;
      case 'home':
      default:
        return (
          <>
            <Hero onNavigate={setCurrentView} />
            <Services onViewDetails={() => setCurrentView('services')} />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      <Navbar 
        currentView={currentView} 
        onNavigate={setCurrentView} 
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer onNavigate={setCurrentView} />
    </div>
  );
}

export default App;