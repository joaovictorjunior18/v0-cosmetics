"use client"

import { useState, useEffect } from "react"
import type { QuizStep } from "@/lib/quiz-data"

interface StepProfileProps {
  step: QuizStep
  onNext: () => void
}

export function StepProfile({ step, onNext }: StepProfileProps) {
  const [animateChart, setAnimateChart] = useState(false)
  const [showDots, setShowDots] = useState(false)
  const [showLabel, setShowLabel] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setAnimateChart(true), 300)
    const t2 = setTimeout(() => setShowDots(true), 1200)
    const t3 = setTimeout(() => setShowLabel(true), 1800)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

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
          {"Esse é seu potencial atual para ter sucesso como empresária no ramo de cosméticos:"}
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
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="rainbowGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#e53935" />
                <stop offset="20%" stopColor="#fb8c00" />
                <stop offset="40%" stopColor="#fdd835" />
                <stop offset="60%" stopColor="#7cb342" />
                <stop offset="80%" stopColor="#43a047" />
                <stop offset="100%" stopColor="#2e7d32" />
              </linearGradient>
              <linearGradient id="rainbowFill" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#e53935" stopOpacity="0.25" />
                <stop offset="20%" stopColor="#fb8c00" stopOpacity="0.2" />
                <stop offset="40%" stopColor="#fdd835" stopOpacity="0.18" />
                <stop offset="60%" stopColor="#7cb342" stopOpacity="0.15" />
                <stop offset="80%" stopColor="#43a047" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#2e7d32" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Y-axis labels */}
            <text x="0" y="18" fontSize="11" fill="#999" fontWeight="500">{"100"}</text>
            <text x="0" y="58" fontSize="11" fill="#999" fontWeight="500">{"75"}</text>
            <text x="0" y="98" fontSize="11" fill="#999" fontWeight="500">{"50"}</text>
            <text x="0" y="138" fontSize="11" fill="#999" fontWeight="500">{"25"}</text>
            <text x="0" y="168" fontSize="11" fill="#999" fontWeight="500">{"0"}</text>

            {/* Horizontal grid lines */}
            <line x1="28" y1="14" x2="330" y2="14" stroke="#f0f0f0" strokeWidth="0.5" />
            <line x1="28" y1="54" x2="330" y2="54" stroke="#f0f0f0" strokeWidth="0.5" />
            <line x1="28" y1="94" x2="330" y2="94" stroke="#f0f0f0" strokeWidth="0.5" />
            <line x1="28" y1="134" x2="330" y2="134" stroke="#f0f0f0" strokeWidth="0.5" />
            <line x1="28" y1="164" x2="330" y2="164" stroke="#f0f0f0" strokeWidth="0.5" />

            {/* Gradient fill under curve - animated */}
            <path
              d="M40 148 C80 145, 130 120, 175 100 C220 80, 260 50, 320 22 L320 164 L40 164 Z"
              fill="url(#rainbowFill)"
              className="transition-opacity duration-1000"
              style={{ opacity: animateChart ? 1 : 0 }}
            />

            {/* Curve line - animated with stroke-dasharray */}
            <path
              d="M40 148 C80 145, 130 120, 175 100 C220 80, 260 50, 320 22"
              stroke="url(#rainbowGradient)"
              strokeWidth="3.5"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="450"
              strokeDashoffset={animateChart ? "0" : "450"}
              style={{ transition: "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)" }}
            />

            {/* Red dot - Baixo */}
            <circle
              cx="42"
              cy="148"
              r="7"
              fill="#e53935"
              className="transition-all duration-500"
              style={{
                opacity: showDots ? 1 : 0,
                transform: showDots ? "scale(1)" : "scale(0)",
                transformOrigin: "42px 148px",
              }}
            />

            {/* Yellow/Orange dot - Medio + "Voce" label */}
            <circle
              cx="175"
              cy="100"
              r="7"
              fill="#fb8c00"
              className="transition-all duration-500"
              style={{
                opacity: showDots ? 1 : 0,
                transform: showDots ? "scale(1)" : "scale(0)",
                transformOrigin: "175px 100px",
              }}
            />

            {/* "Voce" tooltip */}
            <g
              className="transition-all duration-500"
              style={{
                opacity: showLabel ? 1 : 0,
                transform: showLabel ? "translateY(0)" : "translateY(8px)",
              }}
            >
              <rect x="153" y="70" width="46" height="24" rx="12" fill="#333" />
              <text x="176" y="86" fontSize="12" fill="white" textAnchor="middle" fontWeight="600">
                {"Você"}
              </text>
            </g>

            {/* Green dot - Alto */}
            <circle
              cx="318"
              cy="22"
              r="7"
              fill="#2e7d32"
              className="transition-all duration-500 delay-200"
              style={{
                opacity: showDots ? 1 : 0,
                transform: showDots ? "scale(1)" : "scale(0)",
                transformOrigin: "318px 22px",
              }}
            />
          </svg>
        </div>
        {/* X axis labels */}
        <div className="flex items-center justify-between px-2 -mt-1">
          <span className="text-xs font-semibold text-[#e53935]">{"Baixo"}</span>
          <span className="text-xs font-semibold text-[#fb8c00]">{"Médio"}</span>
          <span className="text-xs font-semibold text-[#2e7d32]">{"Alto"}</span>
        </div>
      </div>

      {/* CTA Card - light green background */}
      <div className="mx-6 mt-6 rounded-2xl bg-[#e8f5e9] border border-[#c8e6c9] px-5 py-5">
        <p className="text-[#2e7d32] font-bold text-sm uppercase leading-snug">
          {"SEU PLANEJAMENTO ESTÁ QUASE PRONTO!"}
        </p>
        <p className="text-[#333] text-sm mt-2 leading-relaxed">
          {"Para "}
          <strong className="text-[#2e7d32]">{"DEFINIRMOS"}</strong>
          {" o melhor planejamento,"}
          <br />
          {"Seja sincera nas próximas "}
          <strong className="text-[#2e7d32]">{"Duas perguntas."}</strong>
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
