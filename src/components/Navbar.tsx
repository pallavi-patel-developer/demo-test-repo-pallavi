import React, { useState, useEffect } from 'react';
import { Zap, Moon, Sun, Menu, X, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const navItems: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Platform', href: '#demo' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 dark:bg-[#0a0d14]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-sm py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-200">
                <Zap className="w-5 h-5 fill-white" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Pulse<span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Flow</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Action Buttons & Theme Switcher */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="w-10 h-10 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center justify-center transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Desktop CTA */}
              <a
                href="#pricing"
                className="hidden sm:inline-flex text-sm font-semibold text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white px-3 py-2 transition-colors"
              >
                Sign In
              </a>
              <a
                href="#cta"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 px-4 py-2.5 rounded-xl shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="md:hidden w-10 h-10 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-fade-in"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-white dark:bg-[#0e1422] border-l border-slate-200 dark:border-white/10 p-6 z-50 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-6 pt-16">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-700 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400 py-1 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-white/10">
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center block text-sm font-semibold text-slate-700 dark:text-slate-300 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-slate-800/50"
          >
            Sign In
          </a>
          <a
            href="#cta"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center flex items-center justify-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 py-2.5 rounded-xl shadow-md shadow-indigo-500/25"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </aside>
    </>
  );
};
