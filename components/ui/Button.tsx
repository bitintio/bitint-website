import React from 'react';
import { Link } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  href, 
  external,
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all focus-visible:outline focus-visible:outline-2 disabled:opacity-50 disabled:pointer-events-none rounded-sm";
  
  const variants = {
    primary: "bg-brand text-black hover:bg-brand-hover shadow-sm",
    secondary: "bg-surface border border-border text-text-primary hover:bg-surface-light hover:border-text-secondary/30",
    outline: "border border-brand text-brand hover:bg-brand/10",
    ghost: "text-text-secondary hover:text-text-primary hover:bg-surface-light"
  };

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-5 text-sm",
    lg: "h-12 px-8 text-base"
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    // Check if external link (http, https, mailto)
    const isExternal = external || href.startsWith('http') || href.startsWith('mailto');
    
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }

    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};