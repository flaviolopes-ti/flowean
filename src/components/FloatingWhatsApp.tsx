import React, { useState } from 'react';
import { MessageSquare, X, ChevronRight, Sparkles, Send, PhoneCall } from 'lucide-react';
import { BRAND_INFO, WHATSAPP_SERVICE_OPTIONS, getWhatsAppLink } from '../data/floweanData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSelectService = (message: string) => {
    const url = getWhatsAppLink(message);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const text = customMsg.trim() || 'Olá! Gostaria de conversar com a equipe da FLOWEAN sobre melhoria de processos na minha empresa.';
    const url = getWhatsAppLink(text);
    window.open(url, '_blank', 'noopener,noreferrer');
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <aside aria-label="Atendimento WhatsApp FLOWEAN" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Atendimento FLOWEAN via WhatsApp"
          className="mb-4 w-96 max-w-[calc(100vw-2rem)] rounded-3xl bg-white text-slate-900 shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#082545] via-[#0078FF] to-[#00C896] p-4 text-white relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-black text-white text-sm border border-white/30">
                  FW
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#082545] rounded-full" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold flex items-center gap-1.5">
                  <span>Atendimento FLOWEAN</span>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-200" />
                </div>
                <div className="text-[11px] text-cyan-100 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  <span>Online • {BRAND_INFO.whatsappDisplay}</span>
                </div>
              </div>
            </div>

            <div className="mt-2.5 text-xs text-slate-100 bg-black/20 p-2.5 rounded-xl text-left leading-relaxed">
              Olá! Como podemos ajudar sua empresa? <strong>Escolha o tipo de serviço</strong> abaixo para iniciar a conversa:
            </div>
          </div>

          {/* Service Options List */}
          <div className="p-3 max-h-80 overflow-y-auto space-y-2 text-left divide-y divide-slate-100">
            {WHATSAPP_SERVICE_OPTIONS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSelectService(item.message)}
                className="w-full pt-2 first:pt-0 p-2.5 rounded-xl hover:bg-slate-50 transition-all text-left flex items-center justify-between gap-3 group border border-transparent hover:border-slate-200"
              >
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-[#082545] group-hover:text-[#0078FF] transition-colors">
                    {item.label}
                  </div>
                  <div className="text-[11px] text-slate-500 line-clamp-1 leading-snug">
                    {item.desc}
                  </div>
                </div>
                <div className="w-7 h-7 rounded-lg bg-slate-100 group-hover:bg-[#00C896] text-slate-400 group-hover:text-white flex items-center justify-center flex-shrink-0 transition-all shadow-sm">
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>

          {/* Quick Custom Input */}
          <div className="p-3 bg-slate-50 border-t border-slate-200">
            <form onSubmit={handleSendCustom} className="flex gap-2">
              <input
                type="text"
                placeholder="Ou digite sua mensagem..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:border-[#0078FF]"
              />
              <button
                type="submit"
                className="px-3.5 py-2 rounded-xl bg-[#00C896] hover:bg-[#00a87e] text-white font-bold text-xs flex items-center justify-center transition-colors shadow-sm"
                title="Enviar no WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="mt-2 text-center text-[10px] text-slate-500 flex items-center justify-center gap-2">
              <span>Canal Oficial: {BRAND_INFO.whatsappDisplay}</span>
              <span>•</span>
              <span className="font-semibold text-slate-600">{BRAND_INFO.domain}</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-3 p-3.5 sm:px-4 sm:py-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-2xl hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Abrir atendimento no WhatsApp"
      >
        <div className="relative flex items-center justify-center">
          {/* WhatsApp SVG Icon */}
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.303-.058.116-.087.188-.173.289l-.26.303c-.086.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.434 5.176L2 22l4.981-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.636 0-3.158-.46-4.453-1.259l-.32-.196-2.962.83.843-2.887-.213-.339A8.167 8.167 0 013.8 12c0-4.521 3.679-8.2 8.2-8.2 4.521 0 8.2 3.679 8.2 8.2 0 4.521-3.679 8.2-8.2 8.2z"
            />
          </svg>
          {/* Pulsating Ping Badge */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </span>
        </div>

        <span className="hidden sm:inline-block text-xs uppercase tracking-wider font-extrabold text-white">
          WhatsApp • {BRAND_INFO.whatsappDisplay}
        </span>
      </button>
    </aside>
  );
};
