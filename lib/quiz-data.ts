export interface QuizOption {
  emoji: string
  text: string
  label?: string
}

export interface QuizStep {
  id: number
  type: "intro" | "question" | "loading" | "loading-social" | "profile" | "result"
  /** Use **bold** syntax for bold parts in the title */
  title?: string
  subtitle?: string
  /** Subtitle color: "golden" (default) or "red" */
  subtitleColor?: "golden" | "red"
  description?: string
  highlightText?: string
  buttonText?: string
  options?: QuizOption[]
  /** If true, selecting an option auto-advances (no button needed) */
  autoAdvance?: boolean
  /** "radio" shows empty circles, "letter" shows A/B/C labels */
  optionStyle?: "radio" | "letter"
  /** Message shown on loading screen */
  loadingMessage?: string
  /** Image path for social proof */
  socialImage?: string
}

export const quizSteps: QuizStep[] = [
  // ETAPA 01 - Intro
  {
    id: 1,
    type: "intro",
    title: "Viver de\nCosméticos",
    subtitle: "Cansada de depender de emprego?",
    description:
      "Te mostro como começar na revenda e evoluir até a sua loja do jeito que me levou a",
    highlightText: "R$10 mil/mês.",
    buttonText: "Estou pronta",
  },
  // ETAPA 02 - Question (radio, auto-advance, 3 options)
  {
    id: 2,
    type: "question",
    title: "Você sabe como comprar maquiagem **direto da fábrica**?",
    autoAdvance: true,
    optionStyle: "radio",
    options: [
      { emoji: "\u{1F92F}", text: "Não, e tá difícil de conseguir" },
      { emoji: "\u{1F601}", text: "Compro na revista" },
      { emoji: "\u{1F61F}", text: "Só acho maquiagem cara" },
    ],
  },
  // ETAPA 03 - Question (radio, auto-advance, 2 options)
  {
    id: 3,
    type: "question",
    title: "Os seus fornecedores **tem limite** de compra mínima?",
    autoAdvance: true,
    optionStyle: "radio",
    options: [
      { emoji: "\u{1F92F}", text: "SIM!" },
      { emoji: "\u{1F600}", text: "NÃO!" },
    ],
  },
  // ETAPA 04 - Question (letter labels, button, 3 options)
  {
    id: 4,
    type: "question",
    title: "O que mais te **impede de começar** a empreender com cosméticos?",
    autoAdvance: false,
    optionStyle: "letter",
    buttonText: "Continuar",
    options: [
      { emoji: "\u{1F4B0}", text: "Falta de capital", label: "A" },
      { emoji: "\u{1F913}", text: "Falta de conhecimento", label: "B" },
      { emoji: "\u{1F61F}", text: "Falta de tempo", label: "C" },
    ],
  },
  // ETAPA 05 - Question (radio, auto-advance, 2 options, RED subtitle)
  {
    id: 5,
    type: "question",
    title:
      "Você sente que está perdendo oportunidades por não iniciar seu negócio?",
    subtitle: "Tempo é dinheiro.",
    subtitleColor: "red",
    autoAdvance: true,
    optionStyle: "radio",
    options: [
      { emoji: "\u{1F625}", text: "Sim, mas não sei onde começar" },
      { emoji: "\u{1F525}", text: "Talvez" },
    ],
  },
  // ETAPA 06 - Question (radio, auto-advance, 3 options, golden subtitle)
  {
    id: 6,
    type: "question",
    title: "Quanto você gostaria de ganhar revendendo Cosméticos?",
    subtitle: "Seja sincera, é muito importante.",
    subtitleColor: "golden",
    autoAdvance: true,
    optionStyle: "radio",
    options: [
      { emoji: "\u{1F48E}", text: "Acima de R$ 3.000 por mês." },
      { emoji: "\u{1F929}", text: "Entre R$ 5.000 e R$ 8.000 por mês." },
      { emoji: "\u{1F4B0}", text: "Acima de R$ 10.000 por mês." },
    ],
  },
  // ETAPA 07 - Question (radio, auto-advance, 3 options, golden subtitle)
  {
    id: 7,
    type: "question",
    title: "Em 2 meses, como você gostaria de estar?",
    subtitle: "Seja sincera, é muito importante.",
    subtitleColor: "golden",
    autoAdvance: true,
    optionStyle: "radio",
    options: [
      {
        emoji: "\u{1F929}",
        text: "Sendo dona da minha própria loja de maquiagem.",
      },
      {
        emoji: "\u{1F63B}",
        text: "Aumentando minha renda significativamente",
      },
      { emoji: "\u{1F615}", text: "Ainda não pensei sobre isso..." },
    ],
  },
  // ETAPA 08 - Question (radio, auto-advance, 2 options, no subtitle)
  {
    id: 8,
    type: "question",
    title:
      "Concorda que com Fornecedores e orientação certa, é possível ter resultados mais rápidos?",
    autoAdvance: true,
    optionStyle: "radio",
    options: [
      { emoji: "\u{1F929}", text: "Sim, com certeza!" },
      { emoji: "\u{1F914}", text: "Não tenho certeza" },
    ],
  },
  // ETAPA 09 - Loading/Analyzing
  {
    id: 9,
    type: "loading",
    loadingMessage:
      "Estou analisando suas respostas e gerando um planejamento estratégico!",
  },
  // ETAPA 10 - Profile Analysis Result
  {
    id: 10,
    type: "profile",
    buttonText: "Continuar",
  },
  // ETAPA 11 - Question (radio, auto-advance, 2 options, golden subtitle, bold in options)
  {
    id: 11,
    type: "question",
    title:
      "Você se compromete a seguir o plano que vamos desenvolver para você?",
    subtitle: "Seja sincera...",
    subtitleColor: "golden",
    autoAdvance: true,
    optionStyle: "radio",
    options: [
      { emoji: "\u{1F929}", text: "**Sim,** me comprometo." },
      { emoji: "\u{1F914}", text: "**Tenho duvidas** se vou conseguir." },
    ],
  },
  // ETAPA 12 - Loading with Social Proof
  {
    id: 12,
    type: "loading-social",
    loadingMessage: "Carregando seu plano exclusivo",
    socialImage: "/images/prova-social.png",
  },
]
