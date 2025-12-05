import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-sans font-bold uppercase tracking-widest transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-wine-500 hover:bg-wine-400 text-white border border-transparent shadow-[0_0_15px_rgba(146,43,62,0.3)] hover:shadow-[0_0_25px_rgba(146,43,62,0.5)]",
    outline: "bg-transparent border border-wine-500 text-wine-500 hover:bg-wine-500 hover:text-white",
    ghost: "bg-transparent text-zinc-300 hover:text-wine-400"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};