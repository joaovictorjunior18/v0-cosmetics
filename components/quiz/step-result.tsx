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
            src="/images/imagem-2001.png"
            alt="Seu Plano está pronto"
            className="w-full h-auto rounded-lg"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* VSL Video - Vimeo */}
        <div className="w-full px-4 mb-6">
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/1162735381?badge=0&autopause=0&player_id=0&app_id=58479"
              width="408"
              height="720"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Cosmeticos"
              className="w-full h-auto"
              style={{ aspectRatio: "408/720" }}
            />
          </div>
        </div>

        {/* Imagem 02 - Offer Section */}
        <div className="w-full px-4 mb-6">
          <img
            src="/images/imagem-2002.png"
            alt="Oferta por tempo limitado"
            className="w-full h-auto rounded-lg"
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* CTA Button */}
        <div className="w-full px-4 mb-4">
          <button className="w-full bg-[#22C55E] hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-base">
            QUERO MEU PLANO AGORA
          </button>
        </div>

        {/* Image 03 - Julia testimonial */}
        <div className="w-full px-4 mb-4">
          <img
            src="/images/03.png"
            alt="Depoimento da Julia - Aluna VRC mostrando pedido que chegou certinho"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* CTA button after image 03 */}
        <div className="w-full px-4 mb-4">
          <button className="w-full bg-[#22C55E] hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-base">
            ACESSAR MEU PLANO AGORA!
          </button>
        </div>

        {/* Image 04 - Andressa testimonial */}
        <div className="w-full px-4 mb-4">
          <img
            src="/images/04.png"
            alt="Depoimento da Andressa - Aluna VRC com faturamento de R$ 3.741,70"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Image 05 - Beatriz testimonial */}
        <div className="w-full px-4 mb-4">
          <img
            src="/images/05.png"
            alt="Depoimento da Beatriz - Aluna mostrando encomenda com frete gratis"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Image 06 - Transforme Seu Sonho */}
        <div className="w-full px-4 mb-4">
          <img
            src="/images/06.png"
            alt="Transforme Seu Sonho em Realidade: Acesso a Fornecedores de Fabrica"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Image 07 - Mulher na loja de cosmeticos */}
        <div className="w-full px-4 mb-4">
          <img
            src="/images/07.png"
            alt="Empresaria de sucesso na loja de cosmeticos com saldo bancario"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Image 08 - Lista de Fornecedores livro */}
        <div className="w-full px-4 mb-4">
          <img
            src="/images/08.png"
            alt="Lista de Fornecedores Maquiagem Maiores do Brasil 2025"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Image 09 - Incluso no seu plano + pricing */}
        <div className="w-full px-4 mb-4">
          <img
            src="/images/09.png"
            alt="Incluso no seu plano - lista de beneficios e oferta por R$47"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* CTA button after image 09 */}
        <div className="w-full px-4 mb-4">
          <button className="w-full bg-[#22C55E] hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-base">
            ACESSAR MEU PLANO AGORA!
          </button>
        </div>

        {/* Image 10 - Satisfacao garantida */}
        <div className="w-full px-4 mb-4">
          <img
            src="/images/10.png"
            alt="Satisfacao garantida - 15 dias incondicional"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Final CTA button after image 10 */}
        <div className="w-full px-4 mb-6">
          <button className="w-full bg-[#22C55E] hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors text-base">
            ACESSAR MEU PLANO AGORA!
          </button>
        </div>
      </div>
    </div>
  )
}
