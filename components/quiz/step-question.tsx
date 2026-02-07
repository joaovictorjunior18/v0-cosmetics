"use client"

import { useState } from "react"
import type { QuizStep } from "@/lib/quiz-data"

interface StepQuestionProps {
  step: QuizStep
  onNext: () => void
}

export function StepQuestion({ step, onNext }: StepQuestionProps) {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="flex flex-col flex-1 animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Question title */}
      <div className="px-6 pt-8 pb-6">
        <h2 className="text-foreground font-bold text-xl text-center text-balance">
          {step.title}
        </h2>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-3 px-6 flex-1">
        {step.options?.map((option, index) => (
          <button
            key={option}
            type="button"
            onClick={() => setSelected(index)}
            className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 text-sm font-medium ${
              selected === index
                ? "border-[#8b2e2e] bg-[#faf6f0] text-[#8b2e2e]"
                : "border-border bg-background text-foreground hover:border-[#d4a574]"
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Button */}
      <div className="w-full px-6 py-8">
        <button
          type="button"
          onClick={() => {
            if (selected !== null) onNext()
          }}
          disabled={selected === null}
          className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-200 ${
            selected !== null
              ? "bg-[#f0c932] text-[#1a1a1a] hover:bg-[#e6be25] active:scale-[0.98]"
              : "bg-[#f5f0e8] text-[#b0a898] cursor-not-allowed"
          }`}
        >
          {step.buttonText}
        </button>
      </div>
    </div>
  )
}
