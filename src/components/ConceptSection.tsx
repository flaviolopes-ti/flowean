import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Zap, HeartHandshake, Layers, Compass, Workflow } from 'lucide-react';
import { BRAND_INFO, FLOW_DIMENSIONS } from '../data/floweanData';

export const ConceptSection: React.FC = () => {
  const [activeDimension, setActiveDimension] = useState<number>(0);

  return (
    <section id="conceito" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      {/* Background soft ambient flow lines */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0078FF] text-xs font-bold uppercase tracking-wider border border-blue-100">
            <Workflow className="w-3.5 h-3.5" />
            <span>O Conceito Estratégico</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#082545] tracking-tight">
            Mais que uma consultoria.{' '}
            <span className="text-gradient-flow block sm:inline">
              Uma nova forma de trabalhar.
            </span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Não limitamos sua organização a ferramentas estáticas de Lean Six Sigma.
            Construímos sistemas vivos onde a eficiência técnica e o comportamento humano caminham em harmonia.
          </p>
        </div>

        {/* Central Brand Purpose Card */}
        <div className="mt-16 relative rounded-3xl bg-gradient-to-br from-[#082545] to-[#0d3b6e] text-white p-8 sm:p-12 shadow-2xl overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C896]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0078FF]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold tracking-widest text-[#00C896] uppercase block">
                Nosso Propósito Central
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                "{BRAND_INFO.purpose}"
              </h3>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
                Acreditamos que todo retrabalho, sobrecarga e atraso é sintoma de um fluxo interrompido.
                A nossa missão é <strong className="text-white font-semibold">transformar processos que geram esforço em sistemas que geram fluxo.</strong>
              </p>
            </div>

            {/* Visual Formula: FLOW + LEAN + HUMAN */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 text-center space-y-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-slate-300">
                A Equação FLOWEAN
              </div>

              <div className="flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl font-black">
                <span className="px-3 py-1.5 rounded-lg bg-[#0078FF] text-white shadow-md">
                  FLOW
                </span>
                <span className="text-slate-400">+</span>
                <span className="px-3 py-1.5 rounded-lg bg-teal-600 text-white shadow-md">
                  LEAN
                </span>
                <span className="text-slate-400">+</span>
                <span className="px-3 py-1.5 rounded-lg bg-[#00C896] text-[#082545] shadow-md font-extrabold">
                  HUMAN
                </span>
              </div>

              <div className="pt-2 text-xs sm:text-sm text-slate-200 border-t border-white/10 flex flex-col gap-1.5 text-left">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0078FF]" />
                  <span><strong>FLOW:</strong> Fluidez, continuidade e passagem sem travas.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span><strong>LEAN:</strong> Eliminação de desperdícios e geração de valor.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C896]" />
                  <span><strong>HUMAN:</strong> Hábitos diários sustentáveis e comportamento.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Differential: Why Lean alone or Habits alone is not enough */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#082545]">
              Por que a abordagem tradicional falha?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              90% das transformações operacionais não resistem a 12 meses. Veja como a Flowean resolve o elo perdido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Box 1: Lean Six Sigma Alone */}
            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0078FF] flex items-center justify-center font-bold mb-4">
                01
              </div>
              <h4 className="text-lg font-bold text-[#082545]">
                Lean Six Sigma Sozinho
              </h4>
              <p className="text-sm text-slate-500 mt-1 font-medium">
                Foco exclusivo no processo técnico
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200 text-sm text-slate-600 space-y-2">
                <p>
                  Mapeia fluxos e identifica gargalos com perfeição matemática, mas quando a consultoria vai embora, <strong>as pessoas voltam aos velhos vícios</strong>.
                </p>
                <p className="text-xs text-rose-600 font-semibold flex items-center gap-1">
                  ⚠ Gera o conhecido "efeito rebote operacional".
                </p>
              </div>
            </div>

            {/* Box 2: Atomic Habits Alone */}
            <div className="rounded-2xl p-6 bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#00C896] flex items-center justify-center font-bold mb-4">
                02
              </div>
              <h4 className="text-lg font-bold text-[#082545]">
                Hábitos / RH Sozinhos
              </h4>
              <p className="text-sm text-slate-500 mt-1 font-medium">
                Foco exclusivo no indivíduo
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200 text-sm text-slate-600 space-y-2">
                <p>
                  Cria motivação e rituais de liderança, mas <strong>carece de rigor técnico, métricas de capacidade e eliminação de perdas estruturais</strong> na esteira de trabalho.
                </p>
                <p className="text-xs text-amber-600 font-semibold flex items-center gap-1">
                  ⚠ Gera engajamento temporário sem escala de ROI.
                </p>
              </div>
            </div>

            {/* Box 3: The Flowean Synthesis */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-[#082545] to-[#0c3664] text-white border-2 border-[#00C896] shadow-xl relative transform md:-translate-y-2">
              <div className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-[#00C896] text-[#082545] text-xs font-black tracking-wide uppercase">
                A Síntese FLOWEAN
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#00C896]/20 text-[#00C896] border border-[#00C896]/30 flex items-center justify-center font-bold mb-4">
                <Zap className="w-5 h-5 text-[#00C896]" />
              </div>
              <h4 className="text-lg font-bold text-white">
                FLOWEAN: Processo + Hábitos
              </h4>
              <p className="text-sm text-cyan-300 mt-1 font-medium">
                A união que gera sustentabilidade real
              </p>
              <div className="mt-4 pt-4 border-t border-white/10 text-sm text-slate-300 space-y-2">
                <p>
                  Desenhamos fluxos simples e enxutos e os transformamos em <strong>micro-hábitos atômicos diários</strong> que as equipes executam com prazer e naturalidade.
                </p>
                <p className="text-xs text-[#00C896] font-semibold flex items-center gap-1">
                  ✓ Resultados sustentáveis que permanecem e crescem.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 9 Dimensions of Flow Interactive Showcase */}
        <div className="mt-20 pt-16 border-t border-slate-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0078FF] block">
                Amplitude do Conceito
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#082545]">
                O que significa "Fluxo" para a Flowean?
              </h3>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Fluxo não é apenas a linha de produção fabril. Ele abrange as 9 artérias vitais de qualquer empresa moderna:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2 sm:gap-3">
            {FLOW_DIMENSIONS.map((dim, idx) => (
              <button
                key={dim.name}
                onClick={() => setActiveDimension(idx)}
                className={`p-3 rounded-xl text-center transition-all duration-200 flex flex-col items-center justify-center gap-2 border ${
                  activeDimension === idx
                    ? 'bg-[#082545] text-white border-[#00C896] shadow-md scale-105'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                  activeDimension === idx ? 'bg-[#00C896] text-[#082545]' : 'bg-slate-200 text-slate-600'
                }`}>
                  0{idx + 1}
                </span>
                <span className="text-xs font-semibold leading-tight line-clamp-2">
                  {dim.name.replace('Fluxo de ', '')}
                </span>
              </button>
            ))}
          </div>

          {/* Active Dimension Explanation Box */}
          <div className="mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-[#082545] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0078FF]" />
                <span>{FLOW_DIMENSIONS[activeDimension].name}</span>
              </div>
              <p className="text-sm text-slate-600 mt-1">
                {FLOW_DIMENSIONS[activeDimension].desc}
              </p>
            </div>
            <a
              href="#diagnostico"
              className="px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-[#0078FF] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors whitespace-nowrap"
            >
              Auditar Este Fluxo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
