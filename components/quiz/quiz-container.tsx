"use client"

import { useState, useCallback } from "react"
import { quizSteps } from "@/lib/quiz-data"
import { ProgressBar } from "./progress-bar"
import { StepIntro } from "./step-intro"
import { StepQuestion } from "./step-question"
import { StepResult } from "./step-result"
import { StepLoading } from "./step-loading"
import { StepProfile } from "./step-profile"
import { StepLoadingSocial } from "./step-loading-social"
import { ArrowLeft } from "lucide-react"

export function QuizContainer() {
  const [currentStep, setCurrentStep] = useState(0)

  const step = quizSteps[currentStep]

  const handleNext = useCallback(() => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }, [currentStep])

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }, [currentStep])

  const showBackArrow =
    currentStep > 0 &&
    step.type !== "result" &&
    step.type !== "loading" &&
    step.type !== "loading-social"

  return (
    <div className="min-h-dvh flex flex-col bg-[#ffffff] max-w-md mx-auto relative">
      {/* Header */}
      <header className="relative flex items-center justify-center py-4 px-6">
        {/* Back arrow */}
        {showBackArrow && (
          <button
            type="button"
            onClick={handleBack}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-1 text-[#1a1a1a] hover:text-[#8b2e2e] transition-colors"
            aria-label="Voltar"
          >
            <ArrowLeft className="w-5 h-5" strokeWidth={2} />
          </button>
        )}

        {/* Logo */}
        <div className="flex flex-col items-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
            className="mb-1"
          >
            <path
              d="M14 2C14 2 8 8 8 14C8 18.5 10.5 22 14 26C17.5 22 20 18.5 20 14C20 8 14 2 14 2Z"
              fill="#f0c932"
              stroke="#8b2e2e"
              strokeWidth="1"
            />
            <path
              d="M14 6C14 6 11 10 11 14C11 17 12.5 19.5 14 22C15.5 19.5 17 17 17 14C17 10 14 6 14 6Z"
              fill="#8b2e2e"
              opacity="0.3"
            />
          </svg>
          <span className="font-serif text-[#8b2e2e] text-xs font-semibold leading-tight text-center">
            {"Viver de"}
            <br />
            {"Cosméticos"}
          </span>
        </div>
      </header>

      {/* Progress Bar */}
      <ProgressBar currentStep={currentStep} totalSteps={quizSteps.length - 1} />

      {/* Step Content */}
      <div className="flex flex-col flex-1" key={currentStep}>
        {step.type === "intro" && <StepIntro step={step} onNext={handleNext} onBack={handleBack} />}
        {step.type === "question" && (
          <StepQuestion step={step} onNext={handleNext} onBack={handleBack} />
        )}
        {step.type === "loading" && (
          <StepLoading step={step} onNext={handleNext} onBack={handleBack} />
        )}
        {step.type === "profile" && (
          <StepProfile step={step} onNext={handleNext} onBack={handleBack} />
        )}
        {step.type === "loading-social" && (
          <StepLoadingSocial step={step} onNext={handleNext} onBack={handleBack} />
        )}
        {step.type === "result" && <StepResult step={step} onBack={handleBack} />}
      </div>
    </div>
  )
}
