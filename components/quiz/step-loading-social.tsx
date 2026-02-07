"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import type { QuizStep } from "@/lib/quiz-data"

interface StepLoadingSocialProps {
  step: QuizStep
  onNext: () => void
}

export function StepLoadingSocial({ step, onNext }: StepLoadingSocialProps) {
  const [progress, setProgress] = useState(0)
  const hasAdvanced = useRef(false)

  useEffect(() => {
    hasAdvanced.current = false
    setProgress(0)

    const totalDuration = 6000
    const intervalMs = 60
    const totalTicks = totalDuration / intervalMs
    let tick = 0

    const interval = setInterval(() => {
      tick++
      const t = tick / totalTicks
      const eased = 1 - Math.pow(1 - t, 3)
      const value = Math.min(Math.round(eased * 100), 100)
      setProgress(value)

      if (value >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          if (!hasAdvanced.current) {
            hasAdvanced.current = true
            onNext()
          }
        }, 800)
      }
    }, intervalMs)

    return () => clearInterval(interval)
  }, [onNext])

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500">
      {/* Loading header */}
      <div className="px-6 pt-2">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-[#1a1a1a] font-semibold text-sm">
            {step.loadingMessage || "Carregando seu plano exclusivo"}
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
      </div>

      {/* Social proof image */}
      {step.socialImage && (
        <div className="px-0 mt-4 flex-1">
          <div className="relative w-full h-full min-h-[450px]">
            <Image
              src={step.socialImage || "/placeholder.svg"}
              alt="Depoimento de aluna - Prova social"
              fill
              className="object-contain object-top"
              sizes="(max-width: 448px) 100vw, 448px"
              priority
            />
          </div>
        </div>
      )}
    </div>
  )
}
