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
      <div className="flex flex-col items-center w-full pb-8">
        {/* Logo area */}
        <div className="pt-6 pb-4">
          <div className="text-center text-xs font-semibold text-[#8b2e2e] tracking-wider">
            Vida & <span className="text-[#FFC61A]">Conhecimento</span>
          </div>
        </div>

        {/* Orange divider line */}
        <div className="w-16 h-1 bg-[#FFC61A] mb-6" />

        {/* Main heading */}
        <h1 className="text-3xl font-bold text-center px-6 mb-2 text-[#1a1a1a]">
          Seu Plano está pronto
        </h1>

        {/* Subtitle */}
        <p className="text-xs text-center text-[#666] px-6 mb-6 leading-relaxed">
          Acabamos de criar um plano exclusivo e personalizado para você de acordo com suas respostas
        </p>

        {/* Stats section */}
        <div className="flex justify-center gap-6 mb-8 px-6 w-full">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-lg bg-[#FFE5E5] flex items-center justify-center mb-2">
              <span className="text-lg">📊</span>
            </div>
            <p className="text-xs text-center text-[#666] max-w-24 font-medium">
              Análise Completa do seu perfil
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-lg bg-[#E5F5E5] flex items-center justify-center mb-2">
              <span className="text-lg">✓</span>
            </div>
            <p className="text-xs text-center text-[#666] max-w-24 font-medium">
              Plano personalizado e pronto
            </p>
          </div>
        </div>

        {/* Video section */}
        <div className="w-full px-6 mb-8">
          <div className="w-full aspect-video bg-black rounded-lg flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black" />
            <button className="relative z-10 w-16 h-16 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all">
              <span className="text-white text-xl">▶</span>
            </button>
          </div>
          <p className="text-xs text-center text-[#666] mt-2 font-medium">
            Veja as histórias de sucesso
          </p>
        </div>

        {/* Results highlight */}
        <div className="w-full px-6 mb-8 text-center">
          <h2 className="text-lg font-bold text-[#1a1a1a] mb-1">
            Eles já estão faturando
          </h2>
          <p className="text-2xl font-bold text-[#22863A] mb-1">
            + de R$ 8 mil em 30 dias
          </p>
          <p className="text-lg font-bold text-[#1a1a1a]">
            e Você?
          </p>
        </div>

        {/* Limited time offer */}
        <div className="w-full px-6 mb-6">
          <div className="w-full bg-[#FFC61A] rounded p-3 text-center">
            <p className="text-xs font-bold text-[#1a1a1a] tracking-wider">
              🎁 OFERTA ESPECIAL - POR TEMPO LIMITADO
            </p>
          </div>
        </div>

        {/* Limited offer box */}
        <div className="w-full px-6 mb-6">
          <div className="w-full bg-[#F0F9F0] border-2 border-[#22863A] rounded p-3 text-center">
            <p className="text-xs font-bold text-[#22863A] mb-1">
              ⏰ POR TEMPO LIMITADO
            </p>
            <p className="text-sm text-[#1a1a1a] font-semibold">
              DE: R$ 997,00
            </p>
          </div>
        </div>

        {/* Primary CTA button */}
        <button className="w-full max-w-md mx-6 bg-[#22863A] hover:bg-[#1a6630] text-white font-bold py-3 px-6 rounded transition-colors mb-8">
          Acessar Agora o Seu Plano
        </button>

        {/* Testimonial 1 */}
        <div className="w-full px-6 mb-6">
          <div className="flex gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs font-bold text-[#1a1a1a]">Josy, Agora 2M+</p>
              <p className="text-xs text-[#666] leading-relaxed mt-1">
                "Achei incrível, mudou totalmente meu jeito de ver os negócios digitais"
              </p>
            </div>
          </div>
          <div className="bg-[#F0F9F0] p-3 rounded text-xs text-[#666] leading-relaxed">
            <p>Mudou minha vida em 30 dias</p>
            <p className="text-[#22863A] font-semibold mt-2">Comece agora e sinta a mudança!</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="w-full px-6 mb-8">
          <div className="flex gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gray-400 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-xs font-bold text-[#1a1a1a]">Anderson, Agora 2M+</p>
              <p className="text-xs text-[#666] leading-relaxed mt-1">
                "Recomendo para todos que querem começar no digital"
              </p>
            </div>
          </div>
          <div className="bg-[#F0F9F0] p-3 rounded text-xs text-[#666] leading-relaxed">
            <p>Começou do zero e agora fatura muito</p>
            <p className="text-[#22863A] font-semibold mt-2">Seus resultados podem ser maiores ainda!</p>
          </div>
        </div>

        {/* Orange divider */}
        <div className="w-16 h-1 bg-[#FFC61A] mb-8" />

        {/* Second offer section */}
        <div className="w-full px-6 mb-8">
          <div className="w-full bg-[#FFC61A] rounded p-3 text-center mb-3">
            <p className="text-xs font-bold text-[#1a1a1a] tracking-wider">
              🎁 OFERTA ESPECIAL - POR TEMPO LIMITADO
            </p>
          </div>
          <div className="w-full bg-[#F0F9F0] border-2 border-[#22863A] rounded p-3 text-center mb-4">
            <p className="text-xs font-bold text-[#22863A] mb-1">
              ⏰ POR TEMPO LIMITADO
            </p>
            <p className="text-sm text-[#1a1a1a] font-semibold">
              DE: R$ 997,00
            </p>
          </div>
          <button className="w-full bg-[#22863A] hover:bg-[#1a6630] text-white font-bold py-3 px-6 rounded transition-colors">
            Acessar Agora o Seu Plano
          </button>
        </div>

        {/* Inclusions section */}
        <div className="w-full px-6 mb-8">
          <h3 className="text-lg font-bold text-center text-[#1a1a1a] mb-4">
            Inclusos no Seu Plano
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#22863A] font-bold mt-0.5 flex-shrink-0">✓</span>
              <span className="text-sm text-[#666]">Acesso completo ao treinamento em vídeo com todas as aulas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#22863A] font-bold mt-0.5 flex-shrink-0">✓</span>
              <span className="text-sm text-[#666]">Materiais de apoio exclusivos e templates prontos para usar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#22863A] font-bold mt-0.5 flex-shrink-0">✓</span>
              <span className="text-sm text-[#666]">Comunidade privada com suporte direto de especialistas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#22863A] font-bold mt-0.5 flex-shrink-0">✓</span>
              <span className="text-sm text-[#666]">Acesso a todas as atualizações futuras do programa</span>
            </li>
          </ul>
        </div>

        {/* Product image placeholder */}
        <div className="w-full px-6 mb-8">
          <div className="w-full aspect-square bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg flex items-center justify-center text-white text-sm">
            [Imagem do Produto]
          </div>
        </div>

        {/* Satisfaction guarantee */}
        <div className="w-full px-6 mb-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              15
            </div>
          </div>
          <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
            Satisfação garantida!
          </h3>
          <p className="text-xs text-[#666] leading-relaxed">
            Se você não ficar 100% satisfeito nos primeiros 15 dias, devolvemos seu dinheiro integral, sem fazer perguntas.
          </p>
        </div>

        {/* Inclusions checklist */}
        <div className="w-full px-6 mb-8 bg-[#F5F5F5] p-4 rounded">
          <ul className="space-y-2 text-xs text-[#666]">
            <li className="flex items-center gap-2">
              <span className="text-[#22863A]">✓</span>
              <span>Treinamento completo em vídeo HD</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#22863A]">✓</span>
              <span>Suporte via comunidade privada</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#22863A]">✓</span>
              <span>Atualizações de por vida</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#22863A]">✓</span>
              <span>Garantia de 15 dias</span>
            </li>
          </ul>
        </div>

        {/* Final CTA */}
        <div className="w-full px-6 mb-8">
          <button className="w-full bg-[#22863A] hover:bg-[#1a6630] text-white font-bold py-3 px-6 rounded transition-colors">
            Acessar Agora o Seu Plano
          </button>
        </div>

        {/* Bottom spacing */}
        <div className="h-4" />
      </div>
    </div>
  )
}
