import React from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, Activity, ShieldCheck, MessageCircle } from 'lucide-react';
import { BRAND_INFO, getWhatsAppLink } from '../data/floweanData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 overflow-hidden bg-[#082545] text-white flex items-center">
      {/* Background Graphic: Glowing Flow Waves & Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Deep background gradient circles */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#0078FF]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-[#00C896]/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] bg-[#0078FF]/15 rounded-full blur-3xl" />

        {/* Vector SVG Flow Wave Ribbons - Inspired by the Brand Identity Visuals */}
        <svg
          className="absolute inset-0 w-full h-full opacity-35"
          preserveAspectRatio="none"
          viewBox="0 0 1440 900"
          fill="none"
        >
          <path
            d="M -100,500 C 300,300 650,750 1100,450 C 1300,320 1400,200 1600,250"
            stroke="url(#heroFlow1)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M -150,560 C 250,380 600,820 1050,490 C 1280,360 1450,260 1600,300"
            stroke="url(#heroFlow2)"
            strokeWidth="2.5"
            strokeDasharray="8 8"
          />
          <path
            d="M -50,650 C 400,450 750,850 1200,580 C 1380,480 1500,400 1650,420"
            stroke="url(#heroFlow1)"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <defs>
            <linearGradient id="heroFlow1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0078FF" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#00C896" stopOpacity="1" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="heroFlow2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00C896" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0078FF" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Positioning & Headline */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Positioning Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#00C896] animate-ping" />
              <span className="text-xs uppercase tracking-widest font-semibold text-slate-200">
                {BRAND_INFO.tagline}
              </span>
            </div>

            {/* Main Headline from the Brand Board */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Melhoramos o fluxo.{' '}
              <span className="block text-gradient-flow mt-2">
                Transformamos o resultado.
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              A <strong className="text-white font-semibold">FLOWEAN</strong> ajuda organizações a transformar processos complexos em fluxos simples, eficientes e sustentáveis — conectando a precisão do <span className="text-[#38bdf8] font-medium">Lean Six Sigma</span> à sustentação comportamental dos <span className="text-[#00C896] font-medium">Hábitos Atômicos</span>.
            </p>

            {/* 3 Core Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#00C896] flex-shrink-0" />
                <span>Processos sem gargalos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#0078FF] flex-shrink-0" />
                <span>Eliminação de perdas</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-[#00C896] flex-shrink-0" />
                <span>Hábitos que sustentam</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <a
                href="#diagnostico"
                className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#0078FF] to-[#00C896] hover:from-[#0060cc] hover:to-[#00a87e] shadow-xl shadow-[#0078FF]/25 hover:shadow-[#00C896]/35 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <Activity className="w-4 h-4 text-cyan-200 group-hover:scale-110 transition-transform" />
                <span>Avaliar Fluxo da Minha Empresa</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={getWhatsAppLink('Olá! Gostaria de conversar com um especialista da FLOWEAN sobre melhorias operacionais.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#25D366]/25 hover:bg-[#25D366]/35 border border-[#25D366]/60 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span>WhatsApp: {BRAND_INFO.whatsappDisplay}</span>
              </a>

              <a
                href="#metodo"
                className="px-5 py-3.5 rounded-xl text-xs font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Método A.L.E.X.™</span>
              </a>
            </div>

            {/* Slogan footnote */}
            <div className="pt-2 text-xs text-slate-400 font-medium tracking-wide">
              {BRAND_INFO.supportingSlogan}
            </div>
          </div>

          {/* Right Column: Visual Card Representing the Brand Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-900/90 via-[#082545]/90 to-slate-950/95 border border-white/15 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
              {/* Header of the Hero Card */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-[#00C896] block">
                    LSS-A Framework
                  </span>
                  <span className="text-sm text-slate-300">Lean Six Sigma + Atomic Habits</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#0078FF]/20 border border-[#0078FF]/40 text-[11px] font-bold text-sky-300 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#00C896]" />
                  <span>Método Proprietário</span>
                </div>
              </div>

              {/* Dynamic 5-Step Continuous Flow Pipeline */}
              <div className="py-6 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  O Ciclo de Transformação Flowean:
                </div>

                <div className="space-y-2.5">
                  {[
                    { step: '01', title: 'Processos', desc: 'Mapeamento do fluxo real e eliminação de nós', color: 'from-[#0078FF] to-blue-600' },
                    { step: '02', title: 'Pessoas', desc: 'Liderança e operadores conectados com clareza', color: 'from-blue-600 to-[#00A2DF]' },
                    { step: '03', title: 'Dados', desc: 'Métricas de lead time, variação e capacidade real', color: 'from-[#00A2DF] to-teal-500' },
                    { step: '04', title: 'Hábitos', desc: 'Micro-ações diárias atômicas que blindam a melhoria', color: 'from-teal-500 to-[#00C896]' },
                    { step: '05', title: 'Resultados', desc: 'Eficiência perene, sem efeito rebote nem recaídas', color: 'from-[#00C896] to-emerald-400' },
                  ].map((item, idx) => (
                    <div
                      key={item.step}
                      className="group flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#00C896]/30 transition-all duration-200"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-white/15 to-white/5 border border-white/10 text-xs font-bold flex items-center justify-center text-slate-200">
                          {item.step}
                        </span>
                        <div>
                          <div className="text-sm font-bold text-white group-hover:text-[#00C896] transition-colors">
                            {item.title}
                          </div>
                          <div className="text-xs text-slate-400 line-clamp-1">{item.desc}</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-[#00C896] opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Metric Highlight */}
              <div className="mt-2 pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-left">
                <div className="p-2.5 rounded-lg bg-white/5">
                  <div className="text-xl font-extrabold text-[#00C896] flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>+80%</span>
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                    Sustentação dos ganhos após 6 meses
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5">
                  <div className="text-xl font-extrabold text-[#38bdf8] flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Zero</span>
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                    Efeito rebote em rotinas transformadas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
