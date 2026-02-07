"use client"

import { useState, useCallback } from "react"
import type { QuizStep } from "@/lib/quiz-data"
import { ArrowLeft } from "lucide-react"

interface StepQuestionProps {
  step: QuizStep
  onNext: () => void
  onBack?: () => void
}

/**
 * Renders text with **bold** markdown syntax into React elements.
 */
function renderBoldText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g)
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return (
        <strong key={i} className="font-bold">
          {part}
        </strong>
      )
    }
    return part
  })
}

export function StepQuestion({ step, onNext, onBack }: StepQuestionProps) {
  const [selected, setSelected] = useState<number | null>(null)

  const handleSelect = useCallback(
    (index: number) => {
      setSelected(index)
      if (step.autoAdvance) {
        setTimeout(() => {
          onNext()
        }, 400)
      }
    },
    [step.autoAdvance, onNext],
  )

  const isLetter = step.optionStyle === "letter"

  return (
    <div className="flex flex-col flex-1 animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Back button area */}
      {onBack && (
        <div className="px-6 pt-4">
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

      {/* Spacer to push content down like in screenshots */}
      <div className="flex-1 min-h-[80px]" />

      {/* Question title */}
      <div className="px-8 pb-2">
        <h2 className="text-[#1a1a1a] font-bold text-lg text-center text-balance leading-snug">
          {step.title ? renderBoldText(step.title) : null}
        </h2>
      </div>

      {/* Subtitle if present */}
      {step.subtitle && (
        <div className="px-8 pb-6">
          <p
            className={`text-center text-base italic ${
              step.subtitleColor === "red"
                ? "text-[#c94040]"
                : "text-[#c4956a]"
            }`}
          >
            {step.subtitle}
          </p>
        </div>
      )}

      {/* If no subtitle, just add spacing */}
      {!step.subtitle && <div className="pb-4" />}

      {/* Options */}
      <div className="flex flex-col gap-3 px-6">
        {step.options?.map((option, index) => (
          <button
            key={option.text}
            type="button"
            onClick={() => handleSelect(index)}
            className={`w-full text-left flex items-center gap-3 px-4 py-4 rounded-xl border transition-all duration-200 text-[15px] ${
              selected === index
                ? "border-[#f0c932] bg-[#fdf8e8]"
                : "border-[#e8e2d8] bg-[#faf8f5] hover:border-[#d4c9b8]"
            }`}
          >
            {/* Left indicator: radio circle or letter badge */}
            {isLetter ? (
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors duration-200 ${
                  selected === index
                    ? "bg-[#f0c932] text-[#1a1a1a]"
                    : "bg-[#f0ece4] text-[#8a8070]"
                }`}
              >
                {option.label}
              </span>
            ) : (
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                  selected === index
                    ? "border-[#f0c932] bg-[#f0c932]"
                    : "border-[#d4cfc6] bg-transparent"
                }`}
              >
                {selected === index && (
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fff]" />
                )}
              </span>
            )}

            {/* Emoji */}
            <span className="text-lg flex-shrink-0">{option.emoji}</span>

            {/* Text - supports **bold** syntax */}
            <span className="text-[#1a1a1a] font-medium">
              {renderBoldText(option.text)}
            </span>
          </button>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1 min-h-[40px]" />

      {/* Continuar button (only for non-autoAdvance steps) */}
      {!step.autoAdvance && step.buttonText && (
        <div className="w-full px-6 pb-6">
          <button
            type="button"
            onClick={() => {
              if (selected !== null) onNext()
            }}
            disabled={selected === null}
            className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-200 ${
              selected !== null
                ? "bg-[#f0c932] text-[#8b5e1a] hover:bg-[#e6be25] active:scale-[0.98]"
                : "bg-[#f5f0e8] text-[#b0a898] cursor-not-allowed"
            }`}
          >
            {step.buttonText}
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="py-4 text-center">
        <p className="text-xs text-[#b0a898]">
          {"© 2026 - Criado via inlead.digital  |  Central de anúncios"}
        </p>
      </footer>
    </div>
  )
}
