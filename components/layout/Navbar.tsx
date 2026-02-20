import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown, Lock } from 'lucide-react';
import { useTheme } from '../ThemeContext';
import { Button } from '../ui/Button';

const NavLink: React.FC<{ to: string; children: React.ReactNode; mobile?: boolean; onClick?: () => void }> = ({ to, children, mobile, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname.startsWith(to) && to !== '/' || location.pathname === to;
  
  const baseClass = mobile 
    ? "block py-2 text-base font-medium border-l-2 pl-4 transition-colors"
    : "text-sm font-medium transition-colors hover:text-brand";

  const activeClass = mobile
    ? "border-brand text-brand bg-surface-light/50"
    : "text-brand";

  const inactiveClass = mobile
    ? "border-transparent text-text-secondary hover:bg-surface-light hover:text-text-primary"
    : "text-text-secondary";

  return (
    <Link to={to} className={`${baseClass} ${isActive ? activeClass : inactiveClass}`} onClick={onClick}>
      {children}
    </Link>
  );
};

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
             <div className="w-8 h-8 bg-brand rounded-sm flex items-center justify-center">
                <span className="font-display font-bold text-black text-xl">B</span>
             </div>
             <span className="font-display font-bold text-xl tracking-tight text-text-primary group-hover:text-brand transition-colors">Bitint</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/platform">Platform</NavLink>
            <NavLink to="/solutions">Solutions</NavLink>
            <NavLink to="/industries">Industries</NavLink>
            <NavLink to="/resources">Resources</NavLink>
            <NavLink to="/company/about">Company</NavLink>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 text-text-secondary hover:text-brand transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="#" className="text-sm font-medium text-text-secondary hover:text-text-primary flex items-center gap-1">
              <Lock size={14} /> Login
            </Link>
            <Button href="/request-demo" size="sm">Request Demo</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleTheme} className="text-text-secondary">
               {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={toggleMenu} className="text-text-secondary">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <NavLink to="/platform" mobile onClick={toggleMenu}>Platform</NavLink>
            <NavLink to="/solutions" mobile onClick={toggleMenu}>Solutions</NavLink>
            <NavLink to="/industries" mobile onClick={toggleMenu}>Industries</NavLink>
            <NavLink to="/resources" mobile onClick={toggleMenu}>Resources</NavLink>
            <NavLink to="/company/about" mobile onClick={toggleMenu}>Company</NavLink>
            <div className="mt-4 pt-4 border-t border-border flex flex-col gap-3">
              <Link to="#" className="flex items-center gap-2 text-text-secondary justify-center">
                <Lock size={16} /> Login
              </Link>
              <Button href="/request-demo" className="w-full">Request Demo</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};