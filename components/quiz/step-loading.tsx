"use client"

import { useState, useEffect, useRef } from "react"
import type { QuizStep } from "@/lib/quiz-data"
import { ArrowLeft } from "lucide-react"

interface StepLoadingProps {
  step: QuizStep
  onNext: () => void
  onBack?: () => void
}

export function StepLoading({ step, onNext, onBack }: StepLoadingProps) {
  const [progress, setProgress] = useState(0)
  const hasAdvanced = useRef(false)

  useEffect(() => {
    hasAdvanced.current = false
    setProgress(0)

    // Animate from 0 to 100 over ~4 seconds with easing
    const totalDuration = 4000
    const intervalMs = 50
    const totalTicks = totalDuration / intervalMs
    let tick = 0

    const interval = setInterval(() => {
      tick++
      // Use ease-out cubic for natural deceleration feel
      const t = tick / totalTicks
      const eased = 1 - Math.pow(1 - t, 3)
      const value = Math.min(Math.round(eased * 100), 100)
      setProgress(value)

      if (value >= 100) {
        clearInterval(interval)
        // Auto-advance after reaching 100%
        setTimeout(() => {
          if (!hasAdvanced.current) {
            hasAdvanced.current = true
            onNext()
          }
        }, 600)
      }
    }, intervalMs)

    return () => clearInterval(interval)
  }, [onNext])

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500">
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

      {/* Spacer to push content to vertical center-ish */}
      <div className="flex-1 min-h-[120px]" />

      {/* Loading section */}
      <div className="px-6">
        {/* AGUARDE... + percentage */}
        <div className="flex items-baseline justify-between mb-3">
          <span className="text-[#1a1a1a] font-bold text-sm tracking-wide">
            {"AGUARDE..."}
          </span>
          <span className="text-[#1a1a1a] font-semibold text-sm tabular-nums">
            {progress}%
          </span>
        </div>

        {/* Loading bar */}
        <div className="w-full h-3 bg-[#f5f0e8] rounded-sm overflow-hidden">
          <div
            className="h-full bg-[#f0c932] transition-[width] duration-100 ease-linear rounded-sm"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Message */}
        <p className="mt-5 text-center text-[#c4956a] text-base leading-relaxed px-2">
          {step.loadingMessage}
        </p>
      </div>

      {/* Spacer */}
      <div className="flex-[2] min-h-[120px]" />

      {/* Footer */}
      <footer className="py-4 text-center">
        <p className="text-xs text-[#b0a898]">
          {"© 2026 - Criado via inlead.digital  |  Central de anúncios"}
        </p>
      </footer>
    </div>
  )
}
