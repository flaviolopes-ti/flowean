import React from 'react';
import { Sparkles, CheckCircle2, Flame, HeartHandshake, ShieldCheck } from 'lucide-react';
import { BRAND_INFO, getWhatsAppLink } from '../data/floweanData';

export const BrandManifesto: React.FC = () => {
  return (
    <section className="py-24 bg-slate-100 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Manifesto Card */}
        <div className="rounded-3xl bg-[#082545] text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden border border-white/10">
          {/* Subtle flow wave ribbons */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#00C896]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -top-20 w-96 h-96 bg-[#0078FF]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Manifesto Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-white/15">
                <Sparkles className="w-3.5 h-3.5 text-[#00C896]" />
                <span>O Manifesto FLOWEAN</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                O trabalho não precisa ser um eterno combate a incêndios.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Acreditamos que o estresse e o cansaço operacional não vêm da falta de esforço das pessoas, mas do esforço desperdiçado em fluxos quebrados, comunicações truncadas e sistemas descompassados.
              </p>

              <blockquote className="p-4 rounded-2xl bg-white/5 border-l-4 border-[#00C896] text-white font-medium italic text-base">
                "Não elevamos as empresas ao nível das suas metas, mas sim ao nível dos seus fluxos e dos hábitos diários de quem as constrói."
              </blockquote>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C896]" /> Processos Melhores
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0078FF]" /> Pessoas Mais Fortes
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00C896]" /> Resultados Sustentáveis
                </span>
              </div>
            </div>

            {/* Right Column: Os 3 Compromissos da Transformação FLOWEAN */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/15 space-y-4 text-left">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#00C896] pb-2 border-b border-white/10">
                <span>Nossos 3 Compromissos</span>
                <span className="text-slate-400 font-normal">{BRAND_INFO.domain}</span>
              </div>

              <div className="space-y-3 pt-1">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0078FF]/20 text-cyan-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Flame className="w-4 h-4 text-[#0078FF]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                      Fim do Modo Apagar Incêndios
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Substituímos o heroísmo individual por processos previsíveis, visualizáveis e que fluem sem estresse.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#00C896]/20 text-[#00C896] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HeartHandshake className="w-4 h-4 text-[#00C896]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                      O Fator Humano no Centro
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Eficiência de verdade só existe quando as pessoas entendem o valor do seu papel e participam ativamente da melhoria.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-teal-300" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                      Permanência sem Efeito Rebote
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Com os Hábitos Atômicos do LSS-A, as conquistas operacionais tornam-se a nova cultura natural da empresa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppLink('Olá! Gostaria de conversar com a FLOWEAN sobre a transformação de fluxo e cultura da minha empresa.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0078FF] to-[#00C896] hover:opacity-95 transition-opacity flex items-center justify-center gap-2"
                >
                  <span>Falar com Nossos Especialistas no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
