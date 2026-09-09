import React, { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS, DIAGNOSTIC_RESULTS, BRAND_INFO, getWhatsAppLink } from '../data/floweanData';
import { Activity, ArrowRight, CheckCircle2, RotateCcw, Send, Sparkles, AlertCircle, MessageCircle } from 'lucide-react';

export const DiagnosticTool: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userCompany, setUserCompany] = useState<string>('');
  const [userPhone, setUserPhone] = useState<string>('');
  const [formSent, setFormSent] = useState<boolean>(false);

  const currentQuestion = DIAGNOSTIC_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (points: number) => {
    const updatedAnswers = [...answers, points];
    setAnswers(updatedAnswers);

    if (currentQuestionIndex + 1 < DIAGNOSTIC_QUESTIONS.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const totalScore = answers.reduce((acc, curr) => acc + curr, 0);

  const getResult = () => {
    if (totalScore <= 8) return DIAGNOSTIC_RESULTS[0];
    if (totalScore <= 12) return DIAGNOSTIC_RESULTS[1];
    if (totalScore <= 16) return DIAGNOSTIC_RESULTS[2];
    return DIAGNOSTIC_RESULTS[3];
  };

  const result = getResult();

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setIsCompleted(false);
    setFormSent(false);
    setUserName('');
    setUserEmail('');
    setUserCompany('');
    setUserPhone('');
  };

  const buildWhatsAppMessage = (name?: string, company?: string, email?: string, phone?: string) => {
    let msg = `*DIAGNÓSTICO DE MATURIDADE DE FLUXO - FLOWEAN*\n`;
    msg += `🌐 Origem: ${BRAND_INFO.domain}\n\n`;

    if (name) msg += `👤 *Nome:* ${name}\n`;
    if (company) msg += `🏢 *Empresa/Cargo:* ${company}\n`;
    if (email) msg += `📧 *E-mail:* ${email}\n`;
    if (phone) msg += `📱 *WhatsApp/Tel:* ${phone}\n`;

    msg += `\n📊 *PONTUAÇÃO OBTIDA:* ${totalScore} de 20 pontos\n`;
    msg += `🏆 *Resultado:* ${result.title}\n`;
    msg += `🏷️ *Classificação:* ${result.level}\n\n`;
    msg += `📝 *Diagnóstico Operacional:*\n${result.diagnosis}\n\n`;
    msg += `🎯 *Recomendação do Método A.L.E.X.™:*\n${result.recommendation}\n\n`;
    msg += `Olá! Concluí o Diagnóstico de Maturidade de Fluxo no site ${BRAND_INFO.domain} e gostaria de agendar uma sessão com um especialista da FLOWEAN para entender o plano de ação personalizado para a minha operação.`;

    return msg;
  };

  const handleDirectWhatsAppSend = () => {
    const msg = buildWhatsAppMessage(userName, userCompany, userEmail, userPhone);
    const url = getWhatsAppLink(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSendReport = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    const msg = buildWhatsAppMessage(userName, userCompany, userEmail, userPhone);
    const url = getWhatsAppLink(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="diagnostico" className="py-24 bg-gradient-to-b from-slate-900 via-[#082545] to-slate-950 text-white relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute -top-20 left-1/4 w-80 h-80 bg-[#0078FF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#00C896]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C896]/15 text-[#00C896] text-xs font-bold uppercase tracking-wider border border-[#00C896]/30">
            <Activity className="w-3.5 h-3.5" />
            <span>Ferramenta Interativa Exclusiva</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Diagnóstico Rápido de{' '}
            <span className="text-gradient-flow">Maturidade de Fluxo</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Descubra em menos de 2 minutos se os processos da sua empresa sofrem com gargalos invisíveis ou efeito rebote comportamental.
          </p>
        </div>

        {/* Diagnostic Container Box */}
        <div className="mt-12 rounded-3xl bg-slate-900/90 border border-white/15 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          {!isCompleted ? (
            <div>
              {/* Progress Bar & Counter */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-3">
                <span className="uppercase tracking-wider text-[#00C896]">
                  Pergunta {currentQuestionIndex + 1} de {DIAGNOSTIC_QUESTIONS.length}
                </span>
                <span className="text-slate-300">
                  {currentQuestion.dimension}
                </span>
              </div>

              {/* Visual Progress Bar */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-8">
                <div
                  className="h-full bg-gradient-to-r from-[#0078FF] to-[#00C896] transition-all duration-300 rounded-full"
                  style={{
                    width: `${((currentQuestionIndex + 1) / DIAGNOSTIC_QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>

              {/* Question Title */}
              <div className="mb-8 text-left">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#0078FF] block mb-2">
                  Dimensão: {currentQuestion.dimension}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                  {currentQuestion.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3 text-left">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.points)}
                    className="w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#00C896]/50 text-left transition-all duration-200 group flex items-start gap-4"
                  >
                    <span className="w-7 h-7 rounded-lg bg-white/10 text-slate-300 font-bold text-xs flex items-center justify-center flex-shrink-0 group-hover:bg-[#0078FF] group-hover:text-white transition-colors">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm sm:text-base text-slate-200 group-hover:text-white font-medium leading-relaxed">
                      {opt.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300 text-left">
              {/* Score Header */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#082545] to-slate-800 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-[#00C896] block mb-1">
                    Resultado da Avaliação
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {result.title}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-300 mt-1">
                    {result.level}
                  </p>
                </div>

                <div className="text-center px-6 py-4 rounded-2xl bg-white/10 border border-white/15 flex-shrink-0">
                  <div className="text-3xl font-black text-gradient-flow">
                    {totalScore} / 20
                  </div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 mt-0.5">
                    Pontuação Total
                  </div>
                </div>
              </div>

              {/* Diagnosis Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs uppercase font-bold text-rose-300 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-rose-400" />
                    <span>Diagnóstico da Sua Operação</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {result.diagnosis}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs uppercase font-bold text-[#00C896] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#00C896]" />
                    <span>Recomendação do Método A.L.E.X.™</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {result.recommendation}
                  </p>
                </div>
              </div>

              {/* Quick WhatsApp Action Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#00C896]/15 border border-[#00C896]/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00C896] text-[#082545] flex items-center justify-center font-bold flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">
                      Encaminhar Diagnóstico via WhatsApp
                    </div>
                    <div className="text-xs text-slate-300">
                      Receba o plano de ação no canal oficial: <strong className="text-emerald-300">{BRAND_INFO.whatsappDisplay}</strong>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleDirectWhatsAppSend}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#082545] bg-[#00C896] hover:bg-emerald-300 transition-colors shadow-md flex items-center justify-center gap-2 flex-shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Resultado Agora</span>
                </button>
              </div>

              {/* Form to receive customized action plan via WhatsApp */}
              {!formSent ? (
                <form onSubmit={handleSendReport} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                  <div className="border-b border-white/10 pb-3">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#00C896]" />
                      <span>Deseja receber o Plano de Ação detalhado com nossos consultores?</span>
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Preencha os dados abaixo e encaminhe seu diagnóstico diretamente para nosso WhatsApp oficial ({BRAND_INFO.whatsappDisplay}):
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-300 mb-1">
                        Seu Nome *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Silva"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#00C896]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-300 mb-1">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="carlos@empresa.com"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#00C896]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-300 mb-1">
                        Sua Empresa & Cargo
                      </label>
                      <input
                        type="text"
                        placeholder="Alfa S.A. | Gerente"
                        value={userCompany}
                        onChange={(e) => setUserCompany(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#00C896]"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-slate-300 mb-1">
                        WhatsApp / Celular
                      </label>
                      <input
                        type="tel"
                        placeholder="(71) 98519-0028"
                        value={userPhone}
                        onChange={(e) => setUserPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#00C896]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#0078FF] hover:opacity-95 shadow-md flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Encaminhar Diagnóstico para o WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Refazer Diagnóstico</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm space-y-3 text-center">
                  <CheckCircle2 className="w-9 h-9 text-[#00C896] mx-auto" />
                  <div className="font-bold text-lg text-white">Diagnóstico Pronto para o WhatsApp!</div>
                  <p className="text-slate-300 text-xs max-w-lg mx-auto leading-relaxed">
                    Sua pontuação e diagnóstico foram preparados. Se a conversa não abriu automaticamente, clique no botão abaixo para conversar com a equipe FLOWEAN:
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleDirectWhatsAppSend}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#082545] bg-[#00C896] hover:bg-emerald-300 transition-colors flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Abrir WhatsApp ({BRAND_INFO.whatsappDisplay})</span>
                    </button>
                    <button
                      onClick={handleReset}
                      className="text-xs text-slate-400 hover:text-white underline"
                    >
                      Refazer Diagnóstico
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
