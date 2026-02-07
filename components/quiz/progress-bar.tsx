"use client"

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="w-full h-2 bg-[#f5f0e8] relative overflow-hidden">
      <div
        className="h-full bg-[#f0c932] transition-all duration-700 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
