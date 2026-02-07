"use client"

import type { QuizStep } from "@/lib/quiz-data"
import { ArrowLeft } from "lucide-react"

interface StepIntroProps {
  step: QuizStep
  onNext: () => void
  onBack?: () => void
}

export function StepIntro({ step, onNext, onBack }: StepIntroProps) {
  return (
    <div className="flex flex-col items-center flex-1 animate-in fade-in duration-500">
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

      {/* Hero area with brand title */}
      <div className="w-full bg-[#faf6f0] flex items-center justify-center py-16 px-6 min-h-[320px]">
        <h1 className="font-serif text-[#8b2e2e] text-5xl md:text-6xl font-bold text-center leading-tight">
          {"Viver de"}
          <br />
          {"Cosméticos"}
        </h1>
      </div>

      {/* Content area */}
      <div className="flex flex-col items-center px-6 py-8 text-center gap-4 flex-1">
        <h2 className="text-[#1a1a1a] font-bold text-lg">{step.subtitle}</h2>
        <p className="text-[#6b6560] text-base leading-relaxed max-w-sm">
          {step.description}{" "}
          <span className="font-bold text-[#1a1a1a] underline decoration-[#f0c932] decoration-2 underline-offset-2">
            {step.highlightText}
          </span>
        </p>
        <p className="text-[#6b6560] text-sm">
          {"Conteúdo prático, passo a passo."}
        </p>
      </div>

      {/* Button */}
      <div className="w-full px-6 pb-4">
        <button
          type="button"
          onClick={onNext}
          className="w-full py-4 rounded-full bg-[#f0c932] text-[#8b5e1a] font-semibold text-lg hover:bg-[#e6be25] active:scale-[0.98] transition-all duration-200"
        >
          {step.buttonText}
        </button>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center">
        <p className="text-xs text-black">
          {"© 2026 - Criado via inlead.digital  |  Central de anúncios"}
        </p>
      </footer>
    </div>
  )
}
