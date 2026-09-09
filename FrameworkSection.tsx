import React, { useState } from 'react';
import { ALEX_METHOD } from '../data/floweanData';
import { Layers, ArrowDown, ChevronRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const FrameworkSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = ALEX_METHOD[activeStepIndex];

  return (
    <section id="metodo" className="py-24 bg-[#082545] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0078FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-[#00C896]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#00C896] text-xs font-bold uppercase tracking-wider border border-white/15">
            <Layers className="w-3.5 h-3.5" />
            <span>Arquitetura de Marca & Metodologia</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            LSS-A Framework &{' '}
            <span className="text-gradient-flow">Método A.L.E.X.™</span>
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            Uma estrutura corporativa de alto nível: <strong>FLOWEAN</strong> é a empresa, <strong>LSS-A</strong> é o framework conceitual e <strong>A.L.E.X.™</strong> é o método proprietário de aplicação.
          </p>
        </div>

        {/* Brand Architecture Hierarchy Flowchart */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center items-center">
            {/* Level 1: Brand */}
            <div className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-sm relative">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#0078FF] block mb-1">
                01. A Marca Guarda-Chuva
              </span>
              <div className="text-xl font-black text-white">FLOWEAN</div>
              <div className="text-xs text-slate-400 mt-1">Operational Excellence & Process Transformation</div>
            </div>

            {/* Level 2: Framework */}
            <div className="rounded-2xl p-5 bg-white/10 border border-[#00C896]/40 backdrop-blur-sm relative shadow-lg shadow-[#00C896]/10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#00C896] block mb-1">
                02. O Framework Integrador
              </span>
              <div className="text-xl font-black text-cyan-300">LSS-A Framework</div>
              <div className="text-xs text-slate-300 mt-1">Lean Six Sigma + Atomic Habits</div>
            </div>

            {/* Level 3: Method */}
            <div className="rounded-2xl p-5 bg-gradient-to-r from-[#0078FF]/30 to-[#00C896]/30 border border-white/20 backdrop-blur-sm relative">
              <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300 block mb-1">
                03. O Método Proprietário
              </span>
              <div className="text-xl font-black text-white">Método A.L.E.X.™</div>
              <div className="text-xs text-slate-300 mt-1">Alinhamento • Lean • Evolução • eXcelência</div>
            </div>
          </div>

          {/* Connected Flow Line: Processos -> Pessoas -> Dados -> Hábitos -> Resultados */}
          <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-between gap-2 sm:gap-4 text-xs font-bold text-slate-200">
            <span className="text-slate-400 uppercase tracking-widest text-[10px]">Cadeia de Valor:</span>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 border border-blue-400/30">Processos</span>
              <span className="text-slate-500">→</span>
              <span className="px-2.5 py-1 rounded-md bg-teal-500/20 text-teal-300 border border-teal-400/30">Pessoas</span>
              <span className="text-slate-500">→</span>
              <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">Dados</span>
              <span className="text-slate-500">→</span>
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">Hábitos</span>
              <span className="text-slate-500">→</span>
              <span className="px-2.5 py-1 rounded-md bg-gradient-to-r from-[#0078FF] to-[#00C896] text-white shadow-sm">Resultados Sustentáveis</span>
            </div>
          </div>
        </div>

        {/* Deep Dive into A.L.E.X. Method Interactive Stepper */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Como funciona o Método A.L.E.X.™ na prática
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Clique em cada etapa para explorar as ações executadas pelos consultores Flowean
            </p>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {ALEX_METHOD.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              return (
                <button
                  key={step.letter}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 relative border ${
                    isActive
                      ? 'bg-gradient-to-br from-white/20 to-white/10 border-[#00C896] shadow-lg shadow-[#00C896]/20 ring-1 ring-[#00C896]'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-black ${
                      isActive ? 'text-[#00C896]' : 'text-slate-400'
                    }`}>
                      {step.letter}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      Fase 0{idx + 1}
                    </span>
                  </div>
                  <div className={`text-base font-bold mt-1 ${isActive ? 'text-white' : 'text-slate-200'}`}>
                    {step.word}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Content Card */}
          <div className="mt-6 max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-white/15 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4 text-left">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0078FF] to-[#00C896] text-white font-black text-xl flex items-center justify-center shadow-md">
                    {activeStep.letter}
                  </span>
                  <div>
                    <h4 className="text-2xl font-extrabold text-white">
                      {activeStep.word}
                    </h4>
                    <p className="text-xs uppercase font-semibold text-[#00C896] tracking-wider">
                      {activeStep.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-base leading-relaxed">
                  {activeStep.description}
                </p>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block">
                    Ação Central da Fase:
                  </span>
                  <p className="text-slate-200 font-medium">
                    {activeStep.keyAction}
                  </p>
                </div>
              </div>

              <div className="md:col-span-4 bg-white/5 rounded-2xl p-6 border border-white/10 text-center space-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                  Impacto Típico
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00C896]">
                  {activeStep.metric}
                </div>
                <div className="text-xs text-slate-300 pt-2 border-t border-white/10 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0078FF]" />
                  <span>Método Testado & Validado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
