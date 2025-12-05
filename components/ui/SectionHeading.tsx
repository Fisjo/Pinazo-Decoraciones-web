import React from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  alignment?: 'left' | 'center';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  subtitle, 
  title, 
  alignment = 'center' 
}) => {
  return (
    <div className={`mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="block text-wine-500 font-sans text-sm font-bold tracking-[0.2em] uppercase mb-3">
        {subtitle}
      </span>
      <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight">
        {title}
      </h2>
      <div className={`mt-6 h-1 w-24 bg-wine-500 ${alignment === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};