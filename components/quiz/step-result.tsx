"use client"

import type { QuizStep } from "@/lib/quiz-data"
import { ArrowLeft } from "lucide-react"

interface StepResultProps {
  step: QuizStep
  onBack?: () => void
}

export function StepResult({ step, onBack }: StepResultProps) {
  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-white overflow-y-auto">
      {/* Back button area */}
      {onBack && (
        <div className="sticky top-0 w-full px-6 pt-4 bg-white z-10 border-b border-gray-200">
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

      {/* Content */}
      <div className="flex flex-col items-center w-full py-6">
        {/* Imagem 01 - Comparison Section */}
        <div className="w-full px-4 mb-6">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem%2001-otN5gI93EmhoRVyn3gNPSmQN0b2Tkv.png"
            alt="Seu Plano está pronto"
            className="w-full h-auto rounded-lg"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* VSL Video Placeholder */}
        <div className="w-full px-4 mb-6">
          <div className="w-full aspect-video bg-black rounded-lg flex items-center justify-center overflow-hidden">
            <div className="text-center text-white">
              <p className="font-semibold">VÍDEO VSL</p>
            </div>
          </div>
        </div>

        {/* Imagem 02 - Offer Section */}
        <div className="w-full px-4 mb-6">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imagem%2002-MsMpaF14TTIJSrPrmn4QCKQBopMHcA.png"
            alt="Oferta por tempo limitado"
            className="w-full h-auto rounded-lg"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* CTA Button */}
        <div className="w-full px-4">
          <button className="w-full bg-[#22C55E] hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-base">
            QUERO MEU PLANO AGORA
          </button>
        </div>

        {/* Bottom spacing */}
        <div className="h-6" />
      </div>
    </div>
  )
}
