"use client"

import type { QuizStep } from "@/lib/quiz-data"
import { ArrowLeft } from "lucide-react"

interface StepResultProps {
  step: QuizStep
  onBack?: () => void
}

export function StepResult({ step, onBack }: StepResultProps) {
  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 bg-gray-50 overflow-y-auto">
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
        {/* Section 1: Comparison with battery icons */}
        <div className="w-full bg-pink-100 py-6 px-6 mb-6">
          <p className="text-xs text-center font-semibold text-[#1a1a1a] mb-4">
            Sua Plano está pronto
          </p>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-12 border-2 border-gray-400 rounded-sm flex items-center justify-center relative">
                <div className="w-0.5 h-3 bg-red-600 rounded-full" />
              </div>
              <p className="text-xs font-medium text-[#666]">Sem o Método</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-8 h-12 border-2 border-green-600 rounded-sm flex items-center justify-center relative">
                <div className="w-full h-3/4 bg-green-600 rounded-sm" />
              </div>
              <p className="text-xs font-medium text-[#666]">Com o Método</p>
            </div>
          </div>
        </div>

        {/* Section 2: Headline */}
        <div className="w-full px-6 mb-6">
          <h1 className="text-xl font-bold text-center text-[#1a1a1a] leading-tight">
            Elas já estão faturando<br />
            <span className="text-[#22C55E]">+ de R$ 8 mil em 30 dias</span><br />
            e você?
          </h1>
        </div>

        {/* Section 3: VSL Video Placeholder */}
        <div className="w-full px-6 mb-6">
          <div className="w-full aspect-video bg-gray-400 rounded-lg flex items-center justify-center">
            <div className="text-center text-white">
              <p className="font-semibold mb-2">PLACEHOLDER: VÍDEO VSL AQUI</p>
              <p className="text-xs">(Substitua pelo vídeo real)</p>
            </div>
          </div>
        </div>

        {/* Section 4: First Offer Card */}
        <div className="w-full px-6 mb-6">
          <div className="bg-green-50 border-2 border-[#22C55E] rounded-lg p-4">
            <p className="text-xs text-center text-[#1a1a1a] font-bold mb-2">
              OFERTA ESPECIAL - POR TEMPO LIMITADO
            </p>
            <p className="text-center text-sm font-bold text-[#1a1a1a] mb-4">
              POR APENAS<br />
              <span className="text-lg">12x de R$ 49,90</span>
            </p>
            <button className="w-full bg-[#22C55E] hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm">
              QUERO MEU PLANO AGORA
            </button>
          </div>
        </div>

        {/* Section 5: Social Proof - WhatsApp Screenshots */}
        <div className="w-full px-6 mb-6">
          <p className="text-xs text-center text-[#666] font-semibold mb-3">
            Veja o que estão dizendo
          </p>
          <div className="space-y-3">
            {/* Placeholder 1 */}
            <img
              src="/placeholder.svg"
              alt="Print WhatsApp 1"
              className="w-full rounded-lg bg-gray-300 h-32"
            />
            {/* COLOCAR PRINT WHATSAPP 1 AQUI */}

            {/* Placeholder 2 */}
            <img
              src="/placeholder.svg"
              alt="Print WhatsApp 2"
              className="w-full rounded-lg bg-gray-300 h-32"
            />
            {/* COLOCAR PRINT WHATSAPP 2 AQUI */}

            {/* Placeholder 3 */}
            <img
              src="/placeholder.svg"
              alt="Print WhatsApp 3"
              className="w-full rounded-lg bg-gray-300 h-32"
            />
            {/* COLOCAR PRINT WHATSAPP 3 AQUI */}
          </div>
        </div>

        {/* Section 6: Second Offer Card (Repetition) */}
        <div className="w-full px-6 mb-6">
          <div className="bg-green-50 border-2 border-[#22C55E] rounded-lg p-4">
            <p className="text-xs text-center text-[#1a1a1a] font-bold mb-2">
              OFERTA ESPECIAL - POR TEMPO LIMITADO
            </p>
            <p className="text-center text-sm font-bold text-[#1a1a1a] mb-4">
              POR APENAS<br />
              <span className="text-lg">12x de R$ 49,90</span>
            </p>
            <button className="w-full bg-[#22C55E] hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm">
              QUERO MEU PLANO AGORA
            </button>
          </div>
        </div>

        {/* Section 7: Product Section */}
        <div className="w-full px-6 mb-6 text-center">
          <h2 className="text-xl font-bold text-[#1a1a1a] mb-4">
            Transforme Seu Sonho em<br />
            Realidade
          </h2>

          {/* Specialist image placeholder */}
          <img
            src="/placeholder.svg"
            alt="Especialista"
            className="w-full rounded-lg bg-gray-300 h-40 mb-3"
          />
          {/* COLOCAR FOTO DA ESPECIALISTA AQUI */}

          {/* Product image placeholder */}
          <img
            src="/placeholder.svg"
            alt="Produto - Lista de Fornecedores"
            className="w-full rounded-lg bg-gray-300 h-48"
          />
          {/* COLOCAR FOTO DO PRODUTO (LIVRO/BOX) AQUI */}
        </div>

        {/* Section 8: Benefits List */}
        <div className="w-full px-6 mb-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-[#22C55E] font-bold text-lg flex-shrink-0">✓</span>
              <span className="text-sm text-[#666]">Acesso completo ao treinamento em vídeo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#22C55E] font-bold text-lg flex-shrink-0">✓</span>
              <span className="text-sm text-[#666]">Comunidade privada com suporte direto</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#22C55E] font-bold text-lg flex-shrink-0">✓</span>
              <span className="text-sm text-[#666]">Templates e materiais exclusivos prontos para usar</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#22C55E] font-bold text-lg flex-shrink-0">✓</span>
              <span className="text-sm text-[#666]">Acesso a todas as atualizações futuras</span>
            </li>
          </ul>
        </div>

        {/* Section 9: Guarantee Seal */}
        <div className="w-full px-6 mb-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              15
            </div>
          </div>
          <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
            Satisfação garantida!
          </h3>
          <p className="text-xs text-[#666] leading-relaxed">
            Se você não ficar 100% satisfeito nos primeiros 15 dias, devolveremos seu dinheiro integral, sem fazer perguntas.
          </p>
        </div>

        {/* Section 10: Footer with Final CTA */}
        <div className="w-full px-6 mb-6">
          <button className="w-full bg-[#22C55E] hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors text-sm mb-4">
            QUERO MEU PLANO AGORA
          </button>

          {/* Legal notices */}
          <p className="text-xs text-[#999] text-center leading-relaxed">
            © 2026 - Todos os direitos reservados<br />
            Política de Privacidade | Termos de Uso
          </p>
        </div>

        {/* Bottom spacing */}
        <div className="h-4" />
      </div>
    </div>
  )
}
