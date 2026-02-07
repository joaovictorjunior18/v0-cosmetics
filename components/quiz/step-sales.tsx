"use client"

import React from "react"
import { Check } from "lucide-react" // Import Check component
import Image from "next/image"
import { Play } from "lucide-react"
import { trackPixelEvent } from "@/lib/facebook-pixel"

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

      {/* Image 03 - Julia testimonial */}
      <div className="px-4 py-3">
        <div className="rounded-xl overflow-hidden shadow-md border border-[#e0ddd7]">
          <Image
            src="/images/03.png"
            alt="Depoimento da Julia - Aluna VRC mostrando pedido que chegou certinho"
            width={448}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* CTA button after image 03 */}
      <div className="px-6 py-4">
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackPixelEvent('InitiateCheckout')}
          className="block w-full py-4 rounded-full bg-[#2e7d32] text-[#fff] font-bold text-center text-base hover:bg-[#256b29] active:scale-[0.98] transition-all duration-200"
        >
          ACESSAR MEU PLANO AGORA!
        </a>
      </div>

      {/* Image 04 - Andressa testimonial */}
      <div className="px-4 py-3">
        <div className="rounded-xl overflow-hidden shadow-md border border-[#e0ddd7]">
          <Image
            src="/images/04.png"
            alt="Depoimento da Andressa - Aluna VRC com faturamento de R$ 3.741,70"
            width={448}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Image 05 - Beatriz testimonial */}
      <div className="px-4 py-3">
        <div className="rounded-xl overflow-hidden shadow-md border border-[#e0ddd7]">
          <Image
            src="/images/05.png"
            alt="Depoimento da Beatriz - Aluna mostrando encomenda com frete gratis"
            width={448}
            height={900}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Image 06 - Transforme Seu Sonho */}
      <div className="px-4 py-3">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/images/06.png"
            alt="Transforme Seu Sonho em Realidade: Acesso a Fornecedores de Fabrica"
            width={448}
            height={200}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Image 07 - Mulher na loja de cosmeticos */}
      <div className="px-4 py-3">
        <div className="rounded-xl overflow-hidden shadow-md border border-[#e0ddd7]">
          <Image
            src="/images/07.png"
            alt="Empresaria de sucesso na loja de cosmeticos com saldo bancario"
            width={448}
            height={448}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Image 08 - Lista de Fornecedores livro */}
      <div className="px-4 py-3">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/images/08.png"
            alt="Lista de Fornecedores Maquiagem Maiores do Brasil 2025"
            width={448}
            height={448}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Image 09 - Incluso no seu plano + pricing */}
      <div className="px-4 py-3">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/images/09.png"
            alt="Incluso no seu plano - lista de beneficios e oferta por R$47"
            width={448}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* CTA button after image 09 */}
      <div className="px-6 py-4">
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackPixelEvent('InitiateCheckout')}
          className="block w-full py-4 rounded-full bg-[#2e7d32] text-[#fff] font-bold text-center text-base hover:bg-[#256b29] active:scale-[0.98] transition-all duration-200"
        >
          ACESSAR MEU PLANO AGORA!
        </a>
      </div>

      {/* Image 10 - Satisfacao garantida */}
      <div className="px-4 py-3">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/images/10.png"
            alt="Satisfacao garantida - 15 dias incondicional"
            width={448}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Final CTA button after image 10 */}
      <div className="px-6 py-4 pb-6">
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackPixelEvent('InitiateCheckout')}
          className="block w-full py-4 rounded-full bg-[#2e7d32] text-[#fff] font-bold text-center text-base hover:bg-[#256b29] active:scale-[0.98] transition-all duration-200"
        >
          ACESSAR MEU PLANO AGORA!
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
        <p className="text-[#6b6560] text-xs mt-0.5">POR</p>
        <p className="text-[#2e7d32] text-4xl font-extrabold mt-1">
          47,00
        </p>
        <p className="text-[#6b6560] text-xs mt-0.5">Parcele em at&eacute; 6x</p>

        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackPixelEvent('InitiateCheckout')}
          className="mt-4 block w-full py-3.5 rounded-full bg-[#2e7d32] text-[#fff] font-bold text-sm hover:bg-[#256b29] active:scale-[0.98] transition-all duration-200"
        >
          ACESSAR O MEU PLANO AGORA!
        </a>
      </div>
    </div>
  )
}


