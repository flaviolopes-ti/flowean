import React from 'react';

interface FloweanLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
  iconOnly?: boolean;
}

export const FloweanLogo: React.FC<FloweanLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showSubtitle = true,
  className = '',
  iconOnly = false
}) => {
  const isLight = variant === 'light';

  // Sizing maps
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl',
  };

  const subtitleSizes = {
    sm: 'text-[7px] tracking-[0.2em]',
    md: 'text-[9px] tracking-[0.24em]',
    lg: 'text-[11px] tracking-[0.26em]',
    xl: 'text-[13px] tracking-[0.3em]',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Stylized Dynamic Flow "F" Icon */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:scale-105"
        >
          <defs>
            <linearGradient id="floweanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0078FF" />
              <stop offset="55%" stopColor="#00A2DF" />
              <stop offset="100%" stopColor="#00C896" />
            </linearGradient>
            <linearGradient id="floweanGlow" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#00C896" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Upper flowing wing of 'F' */}
          <path
            d="M 16,36 C 24,14 52,6 88,10 C 93,11 88,19 76,26 C 58,35 34,39 26,44 C 20,47 14,48 16,36 Z"
            fill="url(#floweanGradient)"
          />

          {/* Middle dynamic wave and vertical swoop */}
          <path
            d="M 16,36 C 18,28 32,25 50,30 C 66,35 74,38 72,43 C 68,48 48,51 32,53 C 24,54 20,58 18,65 C 14,79 12,89 12,91 C 11,94 15,92 20,86 C 30,73 34,60 38,52 C 48,52 64,48 70,43 C 78,38 68,31 46,26 C 28,21 15,26 16,36 Z"
            fill="url(#floweanGradient)"
          />

          {/* Lower accent curve - completing the dynamic F motif */}
          <path
            d="M 12,91 C 12,75 22,54 32,44 C 36,40 38,44 32,54 C 24,68 18,80 12,91 Z"
            fill="#00C896"
          />
        </svg>
      </div>

      {/* Brand Text Typography */}
      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center tracking-tight font-extrabold font-['Montserrat',sans-serif]">
            <span
              className={`${textSizes[size]} ${
                isLight ? 'text-[#082545]' : 'text-white'
              } transition-colors`}
            >
              FLOWE
            </span>
            {/* The Stylized 'Λ' as designed in the brand mark */}
            <span
              className={`${textSizes[size]} text-[#00C896] font-black`}
              style={{ display: 'inline-block', transform: 'scaleY(1.02)' }}
            >
              Λ
            </span>
            <span
              className={`${textSizes[size]} ${
                isLight ? 'text-[#082545]' : 'text-white'
              } transition-colors`}
            >
              N
            </span>
          </div>

          {showSubtitle && (
            <span
              className={`${subtitleSizes[size]} font-semibold uppercase mt-1 ${
                isLight ? 'text-slate-500' : 'text-slate-300'
              }`}
            >
              EXCELÊNCIA OPERACIONAL
              <span className="block text-[0.9em] text-[#00C896] font-bold">
                & TRANSFORMAÇÃO DE PROCESSOS
              </span>
            </span>
          )}
        </div>
      )}
    </div>
  );
};
