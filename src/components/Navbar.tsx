import React, { useState, useEffect } from 'react';
import { FloweanLogo } from './FloweanLogo';
import { Menu, X, ArrowRight, Activity, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/floweanData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Conceito', href: '#conceito' },
    { label: '4 Pilares', href: '#pilares' },
    { label: 'LSS-A & A.L.E.X.™', href: '#metodo' },
    { label: 'Aplicações', href: '#solucoes' },
    { label: 'Diagnóstico', href: '#diagnostico', highlight: true },
    { label: 'Contato', href: '#contato' },
  ];

  const whatsappGeneralUrl = getWhatsAppLink(
    'Olá! Gostaria de conversar com um especialista da FLOWEAN sobre excelência operacional para minha empresa.'
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#082545]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3 border-b border-white/10'
          : 'bg-[#082545]/80 backdrop-blur-sm py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <FloweanLogo variant="dark" size="sm" showSubtitle={true} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                link.highlight
                  ? 'text-[#00C896] bg-[#00C896]/10 hover:bg-[#00C896]/20 border border-[#00C896]/30 flex items-center gap-1.5'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.highlight && <Activity className="w-3.5 h-3.5 animate-pulse text-[#00C896]" />}
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA -> WhatsApp */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href={whatsappGeneralUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#0078FF] to-[#00C896] hover:from-[#0060cc] hover:to-[#00a87e] shadow-md shadow-[#0078FF]/20 hover:shadow-[#00C896]/30 transition-all duration-300 flex items-center gap-2 group"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Falar com Especialista</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#082545] border-b border-white/10 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-lg text-base font-medium ${
                link.highlight
                  ? 'text-[#00C896] bg-[#00C896]/15 font-semibold'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10">
            <a
              href={whatsappGeneralUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center flex items-center justify-center gap-2 py-3 rounded-xl text-sm uppercase tracking-wider font-bold text-white bg-gradient-to-r from-[#0078FF] to-[#00C896]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
