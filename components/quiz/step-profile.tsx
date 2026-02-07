"use client"

import type { QuizStep } from "@/lib/quiz-data"

interface StepProfileProps {
  step: QuizStep
  onNext: () => void
}

export function StepProfile({ step, onNext }: StepProfileProps) {
  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500">
      {/* Title section */}
      <div className="px-6 pt-4">
        <h1 className="font-serif text-[#1a1a1a] text-4xl font-bold leading-tight">
          {"Perfil Analisado."}
        </h1>
        <p className="text-[#c4956a] italic text-base mt-1">
          {"Baseado em suas respostas..."}
        </p>
        <p className="text-[#1a1a1a] text-sm mt-4 leading-relaxed">
          {
            "Esse é seu potencial atual para ter sucesso como empresária no ramo de cosméticos:"
          }
        </p>
      </div>

      {/* Chart */}
      <div className="px-6 mt-4">
        <div className="relative w-full h-[180px]">
          <svg
            viewBox="0 0 340 180"
            fill="none"
            className="w-full h-full"
            aria-label="Grafico de potencial mostrando nivel medio com tendencia de crescimento"
          >
            {/* Y-axis labels */}
            <text x="0" y="18" fontSize="11" fill="#666" fontWeight="500">
              {"100"}
            </text>
            <text x="0" y="58" fontSize="11" fill="#666" fontWeight="500">
              {"75"}
            </text>
            <text x="0" y="98" fontSize="11" fill="#666" fontWeight="500">
              {"50"}
            </text>
            <text x="0" y="138" fontSize="11" fill="#666" fontWeight="500">
              {"25"}
            </text>
            <text x="0" y="168" fontSize="11" fill="#666" fontWeight="500">
              {"0"}
            </text>

            {/* Horizontal grid lines */}
            <line
              x1="28"
              y1="14"
              x2="330"
              y2="14"
              stroke="#eee"
              strokeWidth="0.5"
            />
            <line
              x1="28"
              y1="54"
              x2="330"
              y2="54"
              stroke="#eee"
              strokeWidth="0.5"
            />
            <line
              x1="28"
              y1="94"
              x2="330"
              y2="94"
              stroke="#eee"
              strokeWidth="0.5"
            />
            <line
              x1="28"
              y1="134"
              x2="330"
              y2="134"
              stroke="#eee"
              strokeWidth="0.5"
            />
            <line
              x1="28"
              y1="164"
              x2="330"
              y2="164"
              stroke="#eee"
              strokeWidth="0.5"
            />

            {/* Gradient fill under curve */}
            <defs>
              <linearGradient
                id="chartGradient"
                x1="0"
                y1="0"
                x2="330"
                y2="0"
              >
                <stop offset="0%" stopColor="#d32f2f" />
                <stop offset="30%" stopColor="#f9a825" />
                <stop offset="55%" stopColor="#fdd835" />
                <stop offset="80%" stopColor="#66bb6a" />
                <stop offset="100%" stopColor="#2e7d32" />
              </linearGradient>
            </defs>
            <path
              d="M40 148 C80 145, 130 120, 175 100 C220 80, 260 50, 320 22 L320 164 L40 164 Z"
              fill="url(#chartGradient)"
              opacity="0.2"
            />

            {/* Curve line */}
            <path
              d="M40 148 C80 145, 130 120, 175 100 C220 80, 260 50, 320 22"
              stroke="url(#chartGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />

            {/* Red dot - Baixo */}
            <circle cx="42" cy="148" r="7" fill="#d32f2f" />

            {/* Yellow dot - Medio */}
            <circle cx="175" cy="100" r="7" fill="#f9a825" />

            {/* Green dot with label "Voce" */}
            <circle cx="175" cy="100" r="5" fill="#f9a825" />
            <rect
              x="153"
              y="72"
              width="46"
              height="22"
              rx="11"
              fill="#333"
            />
            <text
              x="176"
              y="87"
              fontSize="12"
              fill="white"
              textAnchor="middle"
              fontWeight="600"
            >
              {"Você"}
            </text>

            {/* Green dot - Alto */}
            <circle cx="318" cy="22" r="7" fill="#2e7d32" />
          </svg>
        </div>
        {/* X axis labels */}
        <div className="flex items-center justify-between px-2 -mt-1">
          <span className="text-xs font-medium text-[#d32f2f]">{"Baixo"}</span>
          <span className="text-xs font-medium text-[#f9a825]">{"Médio"}</span>
          <span className="text-xs font-medium text-[#2e7d32]">{"Alto"}</span>
        </div>
      </div>

      {/* CTA Card */}
      <div className="mx-6 mt-6 rounded-2xl bg-[#fdf2e9] border border-[#f0d4b8] px-5 py-5">
        <p className="text-[#1a1a1a] font-bold text-sm uppercase leading-snug">
          {"SEU PLANEJAMENTO ESTÁ QUASE PRONTO!"}
        </p>
        <p className="text-[#1a1a1a] text-sm mt-2 leading-relaxed">
          {"Para "}
          <strong>{"DEFINIRMOS"}</strong>
          {" o melhor planejamento,"}
          <br />
          {"Seja sincera nas próximas "}
          <strong>{"Duas perguntas."}</strong>
        </p>
      </div>

      {/* Button */}
      <div className="w-full px-6 pt-5 pb-4">
        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 rounded-full bg-[#f0c932] text-[#8b5e1a] font-semibold text-lg hover:bg-[#e6be25] active:scale-[0.98] transition-all duration-200"
        >
          {"Continuar"}
        </button>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center">
        <p className="text-xs text-[#b0a898]">
          {"© 2026 - Criado via inlead.digital  |  Central de anúncios"}
        </p>
      </footer>
    </div>
  )
}
