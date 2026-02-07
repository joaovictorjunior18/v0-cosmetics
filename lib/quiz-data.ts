export interface QuizStep {
  id: number
  type: "intro" | "question" | "result"
  title?: string
  subtitle?: string
  description?: string
  highlightText?: string
  buttonText: string
  options?: string[]
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
    title: "Qual é a sua situação atual?",
    options: [
      "Estou empregada, mas quero uma renda extra",
      "Estou desempregada e preciso de renda",
      "Já trabalho com revenda, mas quero crescer",
      "Tenho um negócio, mas quero diversificar",
    ],
    buttonText: "Próxima",
  },
  {
    id: 3,
    type: "question",
    title: "Quanto você pode investir inicialmente?",
    options: [
      "Menos de R$200",
      "Entre R$200 e R$500",
      "Entre R$500 e R$1.000",
      "Mais de R$1.000",
    ],
    buttonText: "Próxima",
  },
  {
    id: 4,
    type: "question",
    title: "Você já tem experiência com vendas?",
    options: [
      "Nunca vendi nada",
      "Já vendi informalmente para amigas",
      "Tenho experiência com vendas",
      "Já trabalho com cosméticos",
    ],
    buttonText: "Próxima",
  },
  {
    id: 5,
    type: "question",
    title: "O que mais te atrai nos cosméticos?",
    options: [
      "O lucro alto dos produtos",
      "Poder trabalhar de casa",
      "Ajudar outras mulheres a se sentirem bonitas",
      "Construir meu próprio negócio",
    ],
    buttonText: "Próxima",
  },
  {
    id: 6,
    type: "question",
    title: "Quanto tempo você pode dedicar por dia?",
    options: [
      "Menos de 1 hora",
      "De 1 a 3 horas",
      "De 3 a 6 horas",
      "Tempo integral",
    ],
    buttonText: "Próxima",
  },
  {
    id: 7,
    type: "question",
    title: "Você usa redes sociais para vender?",
    options: [
      "Não uso redes sociais",
      "Uso, mas não para vender",
      "Já publico alguns produtos",
      "Tenho uma estratégia de vendas online",
    ],
    buttonText: "Próxima",
  },
  {
    id: 8,
    type: "question",
    title: "Qual é o seu maior desafio hoje?",
    options: [
      "Não sei por onde começar",
      "Não consigo atrair clientes",
      "Não sei precificar os produtos",
      "Não consigo manter a consistência",
    ],
    buttonText: "Próxima",
  },
  {
    id: 9,
    type: "question",
    title: "Qual é o seu objetivo em 6 meses?",
    options: [
      "Ter uma renda extra de R$1.000/mês",
      "Ganhar R$3.000 a R$5.000/mês",
      "Largar meu emprego e viver de cosméticos",
      "Abrir minha própria loja",
    ],
    buttonText: "Próxima",
  },
  {
    id: 10,
    type: "question",
    title: "Você prefere vender de que forma?",
    options: [
      "Porta a porta / presencialmente",
      "Pelas redes sociais",
      "Pelo WhatsApp",
      "Um mix de tudo",
    ],
    buttonText: "Próxima",
  },
  {
    id: 11,
    type: "question",
    title: "O que te faria começar hoje?",
    options: [
      "Um passo a passo claro e simples",
      "Saber que posso começar com pouco dinheiro",
      "Ver que outras mulheres conseguiram",
      "Ter suporte e acompanhamento",
    ],
    buttonText: "Próxima",
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
