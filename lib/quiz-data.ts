export interface QuizOption {
  emoji: string
  text: string
  label?: string
}

export interface QuizStep {
  id: number
  type: "intro" | "question" | "loading" | "result"
  /** Use **bold** syntax for bold parts in the title */
  title?: string
  subtitle?: string
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
}

export const quizSteps: QuizStep[] = [
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
  {
    id: 5,
    type: "question",
    title: "Qual é a sua **situação atual**?",
    autoAdvance: true,
    optionStyle: "radio",
    options: [
      { emoji: "\u{1F4BC}", text: "Estou empregada, mas quero uma renda extra" },
      { emoji: "\u{1F614}", text: "Estou desempregada e preciso de renda" },
      { emoji: "\u{1F4C8}", text: "Já trabalho com revenda, mas quero crescer" },
      { emoji: "\u{1F3AF}", text: "Tenho um negócio, mas quero diversificar" },
    ],
  },
  {
    id: 6,
    type: "question",
    title: "Quanto você pode **investir inicialmente**?",
    autoAdvance: false,
    optionStyle: "letter",
    buttonText: "Continuar",
    options: [
      { emoji: "\u{1F4B8}", text: "Menos de R$200", label: "A" },
      { emoji: "\u{1F4B5}", text: "Entre R$200 e R$500", label: "B" },
      { emoji: "\u{1F4B0}", text: "Entre R$500 e R$1.000", label: "C" },
      { emoji: "\u{1F911}", text: "Mais de R$1.000", label: "D" },
    ],
  },
  {
    id: 7,
    type: "question",
    title: "Você já tem **experiência com vendas**?",
    autoAdvance: true,
    optionStyle: "radio",
    options: [
      { emoji: "\u{1F645}", text: "Nunca vendi nada" },
      { emoji: "\u{1F937}", text: "Já vendi informalmente para amigas" },
      { emoji: "\u{1F4AA}", text: "Tenho experiência com vendas" },
      { emoji: "\u{1F484}", text: "Já trabalho com cosméticos" },
    ],
  },
  {
    id: 8,
    type: "question",
    title: "O que mais te **atrai nos cosméticos**?",
    autoAdvance: true,
    optionStyle: "radio",
    options: [
      { emoji: "\u{1F4B0}", text: "O lucro alto dos produtos" },
      { emoji: "\u{1F3E0}", text: "Poder trabalhar de casa" },
      { emoji: "\u{1F495}", text: "Ajudar outras mulheres a se sentirem bonitas" },
      { emoji: "\u{1F680}", text: "Construir meu próprio negócio" },
    ],
  },
  {
    id: 9,
    type: "loading",
    loadingMessage:
      "Estou analisando suas respostas e gerando um planejamento estratégico!",
  },
  {
    id: 10,
    type: "question",
    title: "Você usa **redes sociais** para vender?",
    autoAdvance: true,
    optionStyle: "radio",
    options: [
      { emoji: "\u{274C}", text: "Não uso redes sociais" },
      { emoji: "\u{1F4F1}", text: "Uso, mas não para vender" },
      { emoji: "\u{1F4E2}", text: "Já publico alguns produtos" },
      { emoji: "\u{1F4CA}", text: "Tenho uma estratégia de vendas online" },
    ],
  },
  {
    id: 11,
    type: "question",
    title: "Qual é o seu **objetivo em 6 meses**?",
    autoAdvance: false,
    optionStyle: "letter",
    buttonText: "Continuar",
    options: [
      { emoji: "\u{1F4B5}", text: "Ter uma renda extra de R$1.000/mês", label: "A" },
      { emoji: "\u{1F4B0}", text: "Ganhar R$3.000 a R$5.000/mês", label: "B" },
      { emoji: "\u{1F680}", text: "Largar meu emprego e viver de cosméticos", label: "C" },
      { emoji: "\u{1F3EA}", text: "Abrir minha própria loja", label: "D" },
    ],
  },
  {
    id: 12,
    type: "result",
    title: "Seu resultado está pronto!",
    subtitle: "Parabéns por dar o primeiro passo!",
    description:
      "Com base nas suas respostas, montei um plano personalizado para você começar a viver de cosméticos. Clique abaixo para acessar o conteúdo exclusivo.",
    buttonText: "Ver meu plano",
  },
]
