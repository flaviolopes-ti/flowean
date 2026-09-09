import React, { useState } from 'react';
import { Mail, Phone, Clock, ShieldCheck, MessageCircle, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { BRAND_INFO, getWhatsAppLink } from '../data/floweanData';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    challenge: 'Gargalos no fluxo de entrega e atrasos',
    message: '',
  });

  const buildWhatsAppMessage = () => {
    let msg = `*SOLICITAÇÃO DE DIAGNÓSTICO OPERACIONAL - FLOWEAN*\n`;
    msg += `🌐 Origem: ${BRAND_INFO.domain}\n\n`;
    msg += `👤 *Nome Completo:* ${formData.name}\n`;
    msg += `📧 *E-mail Corporativo:* ${formData.email}\n`;
    msg += `🏢 *Empresa & Cargo:* ${formData.company || 'Não informado'}\n`;
    msg += `📱 *WhatsApp/Tel:* ${formData.phone || 'Não informado'}\n`;
    msg += `⚠️ *Principal Desafio:* ${formData.challenge}\n`;
    if (formData.message) {
      msg += `💬 *Detalhes:* ${formData.message}\n`;
    }
    msg += `\nOlá! Gostaria de agendar o Diagnóstico Operacional com os especialistas da FLOWEAN.`;
    return msg;
  };

  const handleOpenWhatsApp = () => {
    const msg = buildWhatsAppMessage();
    const url = getWhatsAppLink(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    handleOpenWhatsApp();
  };

  return (
    <section id="contato" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct info & value proposition */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0078FF] text-xs font-bold uppercase tracking-wider border border-blue-100">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Inicie a Transformação</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#082545] tracking-tight">
              Pronto para transformar esforço em{' '}
              <span className="text-gradient-flow">fluxo contínuo?</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Agende uma sessão exploratória com nossos especialistas em Excelência Operacional e entenda como aplicar o LSS-A Framework no seu negócio.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0078FF] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400">E-mail Corporativo</div>
                  <a href={`mailto:${BRAND_INFO.email}`} className="text-sm font-bold text-[#082545] hover:text-[#0078FF] transition-colors">
                    {BRAND_INFO.email}
                  </a>
                </div>
              </div>

              <a
                href={getWhatsAppLink('Olá! Gostaria de falar com o atendimento executivo da FLOWEAN via WhatsApp.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/70 hover:bg-emerald-50 border border-emerald-200/80 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#00C896] group-hover:bg-[#00C896] group-hover:text-white flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase font-bold text-emerald-800 flex items-center justify-between">
                    <span>Atendimento WhatsApp</span>
                    <span className="text-[10px] text-emerald-600 font-semibold">Clique para conversar</span>
                  </div>
                  <div className="text-sm font-black text-[#082545] group-hover:text-[#00C896] transition-colors mt-0.5">
                    {BRAND_INFO.whatsappDisplay}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-slate-200/60 text-slate-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400">Disponibilidade</div>
                  <div className="text-sm font-semibold text-slate-700">
                    Segunda a Sexta, das 08h30 às 18h30
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#00C896]" />
              <span>Garantia de confidencialidade de processos (NDA)</span>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppLink('Olá! Gostaria de tirar dúvidas com um especialista da FLOWEAN sobre melhorias de fluxo.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 shadow-md shadow-emerald-500/20 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp ({BRAND_INFO.whatsappDisplay})</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact & Booking Form forwarded to WhatsApp */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-lg text-left">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-200 pb-4 mb-2">
                  <h3 className="text-xl font-extrabold text-[#082545] flex items-center gap-2">
                    <span>Solicitar Diagnóstico Operacional</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Preencha os campos abaixo para encaminhar os dados diretamente para nosso WhatsApp oficial: <strong className="text-emerald-700 font-semibold">{BRAND_INFO.whatsappDisplay}</strong>.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0078FF]/30 focus:border-[#0078FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="carlos@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0078FF]/30 focus:border-[#0078FF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Empresa & Cargo
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Alfa S.A. | Diretor de Operações"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0078FF]/30 focus:border-[#0078FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(71) 98519-0028"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0078FF]/30 focus:border-[#0078FF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Principal Desafio Operacional Atual
                  </label>
                  <select
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0078FF]/30 focus:border-[#0078FF]"
                  >
                    <option>Gargalos no fluxo de entrega e atrasos</option>
                    <option>Retrabalho elevado e desperdícios operacionais</option>
                    <option>Falta de sustentação de melhorias (as pessoas voltam ao velho jeito)</option>
                    <option>Falta de visibilidade e dados confiáveis em tempo real</option>
                    <option>Necessidade de capacitação da liderança (White/Green Belt + Hábitos)</option>
                    <option>Outro desafio específico</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Detalhes Adicionais (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Conte um pouco sobre o momento da sua empresa..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0078FF]/30 focus:border-[#0078FF]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#0078FF] hover:opacity-95 shadow-md shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 group"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enviar Solicitação via WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00C896] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#082545]">
                  Solicitação Pronta para Envio!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Obrigado, <strong className="text-slate-800">{formData.name}</strong>. Se o WhatsApp não abriu automaticamente, clique no botão abaixo para conversar com nosso especialista:
                </p>
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleOpenWhatsApp}
                    className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] shadow-md flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Abrir WhatsApp ({BRAND_INFO.whatsappDisplay})</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-xl text-xs font-bold uppercase text-[#0078FF] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
                  >
                    Editar Informações
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
