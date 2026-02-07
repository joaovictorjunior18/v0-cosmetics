"use client"

import { useState } from "react"
import { quizSteps } from "@/lib/quiz-data"
import { ProgressBar } from "./progress-bar"
import { StepIntro } from "./step-intro"
import { StepQuestion } from "./step-question"
import { StepResult } from "./step-result"

export function QuizContainer() {
  const [currentStep, setCurrentStep] = useState(0)

  const step = quizSteps[currentStep]

  const handleNext = () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep((prev) => prev + 1)
    }
  }

  return (
    <div className="min-h-dvh flex flex-col bg-background max-w-md mx-auto relative">
      {/* Header / Logo */}
      <header className="flex items-center justify-center py-4 px-6">
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
        {step.type === "intro" && <StepIntro step={step} onNext={handleNext} />}
        {step.type === "question" && (
          <StepQuestion step={step} onNext={handleNext} />
        )}
        {step.type === "result" && <StepResult step={step} />}
      </div>
    </div>
  )
}
