"use client"

import type { QuizStep } from "@/lib/quiz-data"
import { ArrowLeft } from "lucide-react"

interface StepResultProps {
  step: QuizStep
  onBack?: () => void
}

export function StepResult({ step, onBack }: StepResultProps) {
  return (
    <div className="flex flex-col items-center flex-1 animate-in fade-in zoom-in-95 duration-700">
      {/* Back button area */}
      {onBack && (
        <div className="w-full px-6 pt-4">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-[#1a1a1a] hover:text-[#8b2e2e] transition-colors"
            aria-label="Voltar"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={2} />
            <span className="text-sm font-medium">Voltar</span>
          </button>
        </div>
      )}

      {/* Celebration area */}
      <div className="w-full bg-[#faf6f0] flex flex-col items-center justify-center py-16 px-6 min-h-[280px] gap-4">
        <div className="w-20 h-20 rounded-full bg-[#f0c932] flex items-center justify-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h1 className="font-serif text-[#8b2e2e] text-4xl md:text-5xl font-bold text-center leading-tight">
          {step.title}
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center px-6 py-8 text-center gap-4 flex-1">
        <h2 className="text-[#1a1a1a] font-bold text-lg">{step.subtitle}</h2>
        <p className="text-[#6b6560] text-base leading-relaxed max-w-sm">
          {step.description}
        </p>
      </div>

      {/* Button */}
      <div className="w-full px-6 pb-4">
        <button
          type="button"
          onClick={() => {
            window.open("https://example.com", "_blank")
          }}
          className="w-full py-4 rounded-full bg-[#8b2e2e] text-[#fff] font-semibold text-lg hover:bg-[#752626] active:scale-[0.98] transition-all duration-200"
        >
          {step.buttonText}
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
