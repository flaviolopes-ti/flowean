import React from 'react';
import { FloweanLogo } from './FloweanLogo';
import { ArrowUp } from 'lucide-react';
import { BRAND_INFO, getWhatsAppLink } from '../data/floweanData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05182d] text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Slogan */}
          <div className="md:col-span-5 space-y-4 text-left">
            <FloweanLogo variant="dark" size="md" showSubtitle={true} />
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed pt-2">
              Transformamos processos complexos em fluxos simples, eficientes e sustentáveis — conectando Lean Six Sigma e Hábitos Atômicos.
            </p>
            <div className="pt-2 text-xs text-[#00C896] font-semibold italic">
              "{BRAND_INFO.mainSlogan}"
            </div>
          </div>

          {/* Col 2: Metodologia & Propriedade Intelectual */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#0078FF]">
              Arquitetura Metodológica
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="hover:text-white transition-colors">
                <strong>FLOWEAN™</strong> • Marca Guarda-Chuva
              </li>
              <li className="hover:text-white transition-colors">
                <strong>LSS-A Framework™</strong> • Lean Six Sigma + Atomic Habits
              </li>
              <li className="hover:text-white transition-colors">
                <strong>Método A.L.E.X.™</strong> • Método Proprietário
              </li>
              <li className="text-xs text-slate-400 pt-1">
                Alinhamento • Lean • Evolução • eXcelência
              </li>
            </ul>
          </div>

          {/* Col 3: Navegação Rápida & Contato */}
          <div className="md:col-span-4 space-y-3 text-left">
            <h4 className="text-xs uppercase font-bold tracking-widest text-[#00C896]">
              Aplicações & Contato
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-300">
              <a href="#conceito" className="hover:text-[#00C896] transition-colors">Conceito</a>
              <a href="#pilares" className="hover:text-[#00C896] transition-colors">4 Pilares</a>
              <a href="#metodo" className="hover:text-[#00C896] transition-colors">Método A.L.E.X.™</a>
              <a href="#solucoes" className="hover:text-[#00C896] transition-colors">Soluções</a>
              <a href="#diagnostico" className="hover:text-[#00C896] transition-colors">Diagnóstico</a>
              <a
                href={getWhatsAppLink('Olá! Gostaria de falar com o atendimento executivo da FLOWEAN.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00C896] hover:underline font-semibold"
              >
                WhatsApp Oficial
              </a>
            </div>
            <div className="pt-3 text-xs text-slate-300 space-y-1">
              <div>WhatsApp: <a href={getWhatsAppLink('Olá! Gostaria de atendimento via WhatsApp.')} target="_blank" rel="noopener noreferrer" className="text-white font-bold hover:text-[#00C896]">{BRAND_INFO.whatsappDisplay}</a></div>
              <div>E-mail: <a href={`mailto:${BRAND_INFO.email}`} className="text-slate-300 hover:text-white">{BRAND_INFO.email}</a></div>
              <div>Portal: <span className="text-cyan-300 font-semibold">{BRAND_INFO.domain}</span></div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-left">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} FLOWEAN — Excelência Operacional & Transformação de Processos.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">Where Flow Becomes Excellence</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
