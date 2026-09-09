import React, { useState } from 'react';
import { PILLARS } from '../data/floweanData';
import { GitMerge, Target, Users, TrendingUp, HelpCircle, Check, ArrowRight } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState<string>('fluxo');

  const getIcon = (name: string, isSelected: boolean) => {
    const iconClass = `w-6 h-6 ${isSelected ? 'text-white' : 'text-[#0078FF]'}`;
    switch (name) {
      case 'GitMerge':
        return <GitMerge className={iconClass} />;
      case 'Target':
        return <Target className={iconClass} />;
      case 'Users':
        return <Users className={iconClass} />;
      case 'TrendingUp':
        return <TrendingUp className={iconClass} />;
      default:
        return <GitMerge className={iconClass} />;
    }
  };

  const currentPillar = PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];

  return (
    <section id="pilares" className="py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-[#00C896]" />
            <span>As 4 Dimensões Estratégicas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#082545] tracking-tight">
            Os Quatro Pilares da{' '}
            <span className="text-gradient-flow">FLOWEAN</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Cada pilar responde a uma pergunta fundamental da operação. Quando integrados, eles constroem uma máquina de resultados perenes.
          </p>
        </div>

        {/* 4 Pillars Interactive Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar) => {
            const isSelected = pillar.id === activePillarId;
            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillarId(pillar.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between relative text-left border ${
                  isSelected
                    ? 'bg-[#082545] text-white border-[#00C896] shadow-xl shadow-[#082545]/20 -translate-y-1.5 ring-2 ring-[#00C896]/30'
                    : 'bg-white text-slate-800 border-slate-200/80 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {/* Top Badge & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-gradient-to-br from-[#0078FF] to-[#00C896] shadow-md'
                          : 'bg-blue-50 border border-blue-100'
                      }`}
                    >
                      {getIcon(pillar.iconName, isSelected)}
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                        isSelected
                          ? 'bg-white/10 text-cyan-300 border border-white/15'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {pillar.title}
                    </span>
                  </div>

                  <h3
                    className={`text-xl font-extrabold tracking-tight ${
                      isSelected ? 'text-white' : 'text-[#082545]'
                    }`}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    className={`text-xs mt-2 font-medium line-clamp-2 ${
                      isSelected ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {pillar.subtitle}
                  </p>

                  <div
                    className={`mt-4 pt-4 border-t text-xs font-semibold italic ${
                      isSelected
                        ? 'border-white/15 text-[#00C896]'
                        : 'border-slate-100 text-[#0078FF]'
                    }`}
                  >
                    "{pillar.question}"
                  </div>
                </div>

                <div className="mt-6 pt-2 flex items-center justify-between text-xs font-bold">
                  <span className={isSelected ? 'text-cyan-300' : 'text-slate-400'}>
                    {isSelected ? 'Dimensão selecionada' : 'Ver detalhes'}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? 'text-[#00C896] translate-x-1'
                        : 'text-slate-400 group-hover:translate-x-1'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Pillar Deep-Dive Detail View */}
        <div className="mt-12 rounded-3xl bg-white border border-slate-200 p-8 sm:p-10 shadow-lg text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold">
                <span>{currentPillar.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#082545]">
                {currentPillar.title}: {currentPillar.subtitle}
              </h3>

              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-sm font-semibold text-[#082545] flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-[#0078FF] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#0078FF] font-bold block mb-0.5">
                    Pergunta Norteadora:
                  </span>
                  "{currentPillar.question}"
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed">
                {currentPillar.description}
              </p>
            </div>

            <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-slate-500">
                O que aplicamos na prática nesta dimensão:
              </h4>

              <div className="space-y-3">
                {currentPillar.highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#00C896] stroke-[3]" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Pronto para transformar essa dimensão?
                </span>
                <a
                  href="#contato"
                  className="text-xs font-bold text-[#0078FF] hover:text-[#005bb5] flex items-center gap-1 group"
                >
                  <span>Solicitar Diagnóstico</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
