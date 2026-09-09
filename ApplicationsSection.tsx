import React, { useState } from 'react';
import { APPLICATIONS, getWhatsAppLink } from '../data/floweanData';
import { Briefcase, GraduationCap, BookOpen, Cpu, CalendarCheck, Check, ArrowRight } from 'lucide-react';

export const ApplicationsSection: React.FC = () => {
  const [selectedAppId, setSelectedAppId] = useState<string>('consultoria');

  const getIcon = (name: string, isSelected: boolean) => {
    const iconClass = `w-6 h-6 ${isSelected ? 'text-white' : 'text-[#0078FF]'}`;
    switch (name) {
      case 'Briefcase':
        return <Briefcase className={iconClass} />;
      case 'GraduationCap':
        return <GraduationCap className={iconClass} />;
      case 'BookOpen':
        return <BookOpen className={iconClass} />;
      case 'Cpu':
        return <Cpu className={iconClass} />;
      case 'CalendarCheck':
        return <CalendarCheck className={iconClass} />;
      default:
        return <Briefcase className={iconClass} />;
    }
  };

  const currentApp = APPLICATIONS.find((a) => a.id === selectedAppId) || APPLICATIONS[0];

  return (
    <section id="solucoes" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0078FF] text-xs font-bold uppercase tracking-wider border border-blue-100">
            <span>Aplicações da Marca</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#082545] tracking-tight">
            Uma Plataforma Completa de{' '}
            <span className="text-gradient-flow">Excelência Operacional</span>
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            A Flowean não se limita a um modelo engessado de prestação de serviços. Atuamos em 5 frentes complementares para transformar sua empresa de ponta a ponta.
          </p>
        </div>

        {/* 5 Icons Application Selector Bar (Just like in the Brand Mockup Board) */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {APPLICATIONS.map((app) => {
            const isSelected = app.id === selectedAppId;
            return (
              <button
                key={app.id}
                onClick={() => setSelectedAppId(app.id)}
                className={`p-5 rounded-2xl text-center transition-all duration-300 flex flex-col items-center justify-center gap-3 border text-left ${
                  isSelected
                    ? 'bg-[#082545] text-white border-[#00C896] shadow-xl shadow-[#082545]/20 -translate-y-1'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200 hover:shadow-sm'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-gradient-to-br from-[#0078FF] to-[#00C896] shadow-md'
                      : 'bg-white border border-slate-200'
                  }`}
                >
                  {getIcon(app.iconName, isSelected)}
                </div>

                <div>
                  <div className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-[#082545]'}`}>
                    {app.title}
                  </div>
                  <div className={`text-[10px] uppercase font-semibold mt-0.5 ${isSelected ? 'text-[#00C896]' : 'text-slate-400'}`}>
                    {app.badge}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Application View Card */}
        <div className="mt-10 rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-12 shadow-sm text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-[#0078FF] block">
                Solução em Destaque
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#082545]">
                {currentApp.title}
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {currentApp.description}
              </p>

              <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1">
                <span className="font-bold text-[#082545] uppercase tracking-wider block">
                  Indicado Para:
                </span>
                <p className="font-medium text-slate-700">{currentApp.idealFor}</p>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppLink(`Olá! Gostaria de solicitar uma proposta para a solução de ${currentApp.title} da FLOWEAN para minha organização.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0078FF] to-[#00C896] shadow-md shadow-[#0078FF]/20 hover:shadow-lg transition-all group"
                >
                  <span>Solicitar Proposta de {currentApp.title} no WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400">
                O que está incluso nessa entrega:
              </h4>

              <div className="space-y-3">
                {currentApp.deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-sm text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-[#00C896] flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-200">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
