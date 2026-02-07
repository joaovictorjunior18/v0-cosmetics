"use client"

import React from "react"

import Image from "next/image"
import { Check, Play } from "lucide-react"

export function StepSales() {
  const ctaUrl = "https://example.com/checkout"

  return (
    <div className="flex flex-col flex-1 animate-in fade-in duration-500 overflow-y-auto">
      {/* Orange discount banner */}
      <div className="bg-[#ff6b35] text-[#fff] text-center py-2 px-4">
        <p className="text-sm font-semibold">Resgate agora seu desconto</p>
      </div>

      {/* Hero section */}
      <div className="px-6 pt-6 pb-4">
        <h1 className="text-[#1a1a1a] font-bold text-xl text-center leading-tight">
          Seu Plano est&aacute; pronto
        </h1>
        <p className="text-[#6b6560] text-sm text-center mt-2">
          Os melhores produtos e <strong>Fornecedores</strong> para voc&ecirc;
          come&ccedil;ar a vida de empres&aacute;ria de sucesso!
        </p>

        {/* Stats cards */}
        <div className="flex gap-3 mt-5">
          <div className="flex-1 bg-[#fff3e0] rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-[#ff6b35]">94%</p>
            <p className="text-[10px] text-[#6b6560] mt-1 leading-tight">
              Iniciam com pouco investimento e conseguem retorno
            </p>
          </div>
          <div className="flex-1 bg-[#e8f5e9] rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-[#2e7d32]">81.5%</p>
            <p className="text-[10px] text-[#6b6560] mt-1 leading-tight">
              Saem da revenda e montam a pr&oacute;pria loja em at&eacute; 6
              meses
            </p>
          </div>
        </div>
      </div>

      {/* Video thumbnail */}
      <div className="px-6 pb-4">
        <div className="relative rounded-xl overflow-hidden aspect-video bg-[#1a1a1a]">
          <Image
            src="/images/video-thumb.jpg"
            alt="Video de apresentacao"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-[#000]/30">
            <div className="w-16 h-16 rounded-full bg-[#ff6b35] flex items-center justify-center shadow-lg">
              <Play className="w-7 h-7 text-[#fff] ml-1" fill="#fff" />
            </div>
          </div>
        </div>
      </div>

      {/* Social proof heading */}
      <div className="px-6 pb-2">
        <h2 className="text-[#1a1a1a] font-bold text-lg text-center leading-snug">
          Elas j&aacute; est&atilde;o faturando + de R$ 6 mil em 30 dias e
          voc&ecirc;?
        </h2>
        <p className="text-[#ff6b35] text-xs text-center mt-1 font-medium">
          VEJA ABAIXO
        </p>
      </div>

      {/* First pricing CTA */}
      <PricingCard ctaUrl={ctaUrl} />

      {/* Testimonial 1 - Julia */}
      <TestimonialImage
        src="/images/testimonial-julia.jpg"
        alt="Depoimento da Julia - Aluna VRC"
      />

      {/* Second pricing CTA */}
      <PricingCard ctaUrl={ctaUrl} />

      {/* Testimonial 2 - Andressa */}
      <TestimonialImage
        src="/images/testimonial-andressa.jpg"
        alt="Depoimento da Andressa - Aluna VRC"
      />

      {/* Testimonial 3 - Beatriz */}
      <TestimonialImage
        src="/images/testimonial-beatriz.jpg"
        alt="Depoimento da Beatriz - Aluna VRC"
      />

      {/* Transform section */}
      <div className="px-6 py-8">
        <h2 className="text-[#1a1a1a] font-bold text-xl text-center leading-snug">
          Transforme Seu Sonho em Realidade:
        </h2>
        <p className="text-[#2e7d32] font-extrabold text-lg text-center mt-1">
          ACESSO A FORNECEDORES DE F&Aacute;BRICA.
        </p>
      </div>

      {/* Product images */}
      <div className="px-6 pb-4">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/images/cosmetics-products.jpg"
            alt="Produtos cosmeticos disponiveis"
            width={448}
            height={300}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Fornecedores list image */}
      <div className="px-6 pb-6">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/images/fornecedores-lista.jpg"
            alt="Lista de fornecedores atacadistas maiores do Brasil"
            width={448}
            height={400}
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Included in your plan */}
      <div className="px-6 pb-6">
        <h3 className="text-[#8b2e2e] font-bold text-base text-center mb-4 uppercase">
          Incluso no seu plano:
        </h3>
        <ul className="flex flex-col gap-3">
          <PlanItem>
            +120 Fornecedores <strong>direto de F&aacute;brica</strong>,
            atualizado
          </PlanItem>
          <PlanItem>
            30 Fornecedores de <strong>Bijuterias</strong>
          </PlanItem>
          <PlanItem>
            25 Produtos <strong>campe&otilde;es f&aacute;ceis de vender</strong>
          </PlanItem>
          <PlanItem>
            Fornecedores <strong>perto de voc&ecirc; de pre&ccedil;o &uacute;nico</strong>
          </PlanItem>
          <PlanItem>
            Fornecedores de <strong>perfumes &aacute;rabes</strong>
          </PlanItem>
          <PlanItem>
            <strong>ACESSO IMEDIATO</strong>
          </PlanItem>
          <PlanItem>
            Estrat&eacute;gias de vendas
          </PlanItem>
        </ul>
      </div>

      {/* Final pricing CTA */}
      <PricingCard ctaUrl={ctaUrl} />

      {/* Satisfaction guarantee */}
      <div className="px-6 py-8 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-[#2e7d32] flex items-center justify-center mb-4">
          <div className="text-center">
            <p className="text-[#fff] text-2xl font-extrabold leading-none">15</p>
            <p className="text-[#fff] text-[8px] font-semibold uppercase mt-0.5">dias</p>
          </div>
        </div>
        <h3 className="text-[#1a1a1a] font-bold text-lg text-center">
          Satisfa&ccedil;&atilde;o garantida!
        </h3>
        <p className="text-[#6b6560] text-sm text-center mt-3 leading-relaxed max-w-sm">
          Voc&ecirc; ter&aacute; acesso imediato ao curso completo Viver de
          Cosm&eacute;ticos para CONHECER ESPECIAL DE PRAZOS E TER O SEU EBOOK
          EXCLUSIVO.
        </p>
        <p className="text-[#6b6560] text-sm text-center mt-3 leading-relaxed max-w-sm">
          Se por algum motivo, voc&ecirc; achar que isso n&atilde;o &eacute;
          pra voc&ecirc;, no que n&atilde;o vem, sinta-se livre pra
          devolver, basta entrar em contato conosco.
        </p>
        <p className="text-[#1a1a1a] text-sm text-center mt-4 font-bold leading-relaxed max-w-sm">
          AGORA A DECIS&Atilde;O DE MUDAR DE VIDA &Eacute; SUA!
        </p>
        <p className="text-[#6b6560] text-sm text-center mt-2 leading-relaxed max-w-sm">
          Eu estou tirando todo o risco das suas m&atilde;os e colocando nas
          minhas.
        </p>
        <p className="text-[#6b6560] text-sm text-center mt-2 leading-relaxed max-w-sm">
          Fa&ccedil;a sua inscri&ccedil;&atilde;o agora mesmo e vide com seus
          pr&oacute;prios olhos.
        </p>
      </div>

      {/* Final CTA button */}
      <div className="px-6 pb-6">
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 rounded-full bg-[#2e7d32] text-[#fff] font-bold text-center text-base hover:bg-[#256b29] active:scale-[0.98] transition-all duration-200"
        >
          ACESSAR O MEU PLANO AGORA!
        </a>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center border-t border-[#f0ebe4]">
        <p className="text-xs text-[#b0a898]">
          {"© 2026 - Criado via inlead.digital  |  Central de anúncios"}
        </p>
      </footer>
    </div>
  )
}

/* ---- Subcomponents ---- */

function PricingCard({ ctaUrl }: { ctaUrl: string }) {
  return (
    <div className="px-6 py-6">
      <div className="bg-[#fffde7] border border-[#f0c932] rounded-xl p-5 text-center">
        <p className="text-[#ff6b35] text-xs font-bold uppercase tracking-wide">
          Desconto exclusivo para voc&ecirc; agora
        </p>
        <p className="text-[#1a1a1a] font-bold text-sm mt-2 uppercase">
          OFERTAÇO!
        </p>
        <p className="text-[#1a1a1a] font-bold text-sm">
          POR TEMPO LIMITADO!
        </p>
        <p className="text-[#999] text-sm mt-2 line-through">
          DE R$149
        </p>
        <p className="text-[#1a1a1a] text-xs mt-0.5">POR</p>
        <p className="text-[#2e7d32] text-4xl font-extrabold mt-1">
          47,00
        </p>
        <p className="text-[#6b6560] text-xs mt-0.5">Parcele em at&eacute; 6x</p>

        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block w-full py-3.5 rounded-full bg-[#2e7d32] text-[#fff] font-bold text-sm hover:bg-[#256b29] active:scale-[0.98] transition-all duration-200"
        >
          ACESSAR O MEU PLANO AGORA!
        </a>
      </div>
    </div>
  )
}

function TestimonialImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="px-4 py-3">
      <div className="rounded-xl overflow-hidden shadow-md border border-[#e0ddd7]">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={448}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  )
}

function PlanItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-5 h-5 rounded bg-[#2e7d32] flex items-center justify-center flex-shrink-0 mt-0.5">
        <Check className="w-3.5 h-3.5 text-[#fff]" strokeWidth={3} />
      </div>
      <span className="text-[#1a1a1a] text-sm leading-relaxed">{children}</span>
    </li>
  )
}
