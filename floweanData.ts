import { PillarData, AlexStep, ApplicationFront, DiagnosticQuestion, DiagnosticResult } from '../types';

export const BRAND_INFO = {
  name: 'FLOWEAN',
  tagline: 'EXCELÊNCIA OPERACIONAL & TRANSFORMAÇÃO DE PROCESSOS',
  mainSlogan: 'Melhoramos o fluxo. Transformamos o resultado.',
  supportingSlogan: 'Processos melhores. Pessoas mais fortes. Resultados sustentáveis.',
  purpose: 'Conectar pessoas, processos e tecnologia para gerar valor de forma contínua e sustentável.',
  coreIdea: 'Transformar processos que geram esforço em sistemas que geram fluxo.',
  conceptEquation: 'FLOW + LEAN + HUMAN',
  whatsappNumber: '5571985190028',
  whatsappDisplay: '+55 71 98519-0028',
  domain: 'flowean.com.br',
  email: 'contato@flowean.com.br',
  colors: {
    azulProfundo: '#082545',
    azulEnergia: '#0078FF',
    verdeCrescimento: '#00C896',
    cinzaNeutro: '#E5E7EB',
  },
  typography: 'Montserrat'
};

export const getWhatsAppLink = (message: string): string => {
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const WHATSAPP_SERVICE_OPTIONS = [
  {
    id: 'consultoria',
    label: 'Consultoria em Excelência Operacional',
    desc: 'Eliminação de gargalos, mapeamento VSM e ganho de produtividade',
    message: 'Olá! Gostaria de solicitar informações sobre a Consultoria em Excelência Operacional da FLOWEAN para minha empresa.'
  },
  {
    id: 'treinamentos',
    label: 'Treinamentos & Certificações In-Company',
    desc: 'Capacitação prática com LSS-A (Lean Six Sigma + Hábitos Atômicos)',
    message: 'Olá! Gostaria de conhecer os Treinamentos In-Company e Certificações da FLOWEAN.'
  },
  {
    id: 'diagnostico',
    label: 'Diagnóstico Operacional de Processos',
    desc: 'Análise aprofundada dos 8 desperdícios e mapeamento do fluxo',
    message: 'Olá! Gostaria de agendar um Diagnóstico Operacional de Processos com os especialistas da FLOWEAN.'
  },
  {
    id: 'alex',
    label: 'Implementação do Método A.L.E.X.™',
    desc: 'Alinhamento, Lean, Evolução e eXcelência com sustentação contínua',
    message: 'Olá! Tenho interesse em implementar o Método A.L.E.X.™ na nossa operação.'
  },
  {
    id: 'softwares',
    label: 'Softwares & Ferramentas de Gestão',
    desc: 'Dashboards de fluxo em tempo real e rotinas de gestão à vista',
    message: 'Olá! Gostaria de conhecer as ferramentas e soluções de software de fluxo da FLOWEAN.'
  },
  {
    id: 'outros',
    label: 'Outras Dúvidas ou Parcerias',
    desc: 'Falar diretamente com a diretoria de atendimento executivo',
    message: 'Olá! Gostaria de conversar com a equipe FLOWEAN para esclarecer dúvidas sobre soluções para minha empresa.'
  }
];

export const PILLARS: PillarData[] = [
  {
    id: 'fluxo',
    title: 'FLUXO',
    subtitle: 'Mapear e compreender como o trabalho realmente acontece',
    question: 'Como o trabalho flui hoje?',
    description: 'Processos que fluem, geram valor e eliminam desperdícios e gargalos invisíveis no dia a dia.',
    iconName: 'GitMerge',
    badge: 'Dimensão 01 • Flow',
    highlights: [
      'Mapeamento de Fluxo de Valor (VSM)',
      'Identificação e eliminação de gargalos',
      'Redução drástica do tempo de espera (Lead Time)',
      'Fluidez de informação entre áreas e sistemas'
    ]
  },
  {
    id: 'eficiencia',
    title: 'EFICIÊNCIA',
    subtitle: 'Eliminar aquilo que não gera valor para o cliente',
    question: 'O que podemos eliminar, simplificar ou melhorar?',
    description: 'Mais resultado com menos recursos. Aplicação prática dos princípios Lean para enxugar a operação.',
    iconName: 'Target',
    badge: 'Dimensão 02 • Lean',
    highlights: [
      'Eliminação dos 8 desperdícios clássicos',
      'Simplificação de rotinas e tarefas burocráticas',
      'Aumento da produtividade e capacidade instalada',
      'Eficiência de custos com foco na geração de valor'
    ]
  },
  {
    id: 'pessoas',
    title: 'PESSOAS',
    subtitle: 'Transformar a melhoria em pequenas ações repetíveis',
    question: 'Que comportamento precisa acontecer todos os dias para sustentar essa melhoria?',
    description: 'Hábitos e comportamentos que sustentam a transformação. O elo esquecido pelas consultorias tradicionais.',
    iconName: 'Users',
    badge: 'Dimensão 03 • Atomic Habits',
    highlights: [
      'Integração de Hábitos Atômicos ao ambiente corporativo',
      'Rituais diários e micro-ações consistentes',
      'Engajamento genuíno da liderança e operação',
      'Fim do efeito rebote (quando a rotina volta ao padrão antigo)'
    ]
  },
  {
    id: 'excelencia',
    title: 'EXCELÊNCIA',
    subtitle: 'Transformar melhoria pontual em padrão operacional',
    question: 'Como fazemos para que o resultado permaneça?',
    description: 'Melhoria contínua para resultados sustentáveis. Governança e rituais que perpetuam a nova cultura.',
    iconName: 'TrendingUp',
    badge: 'Dimensão 04 • Sustentabilidade',
    highlights: [
      'Padrões de trabalho inteligentes e dinâmicos',
      'Gestão à vista orientada a dados reais',
      'Cultura Kaizen ativa e autônoma',
      'Resultados que continuam crescendo no longo prazo'
    ]
  }
];

export const ALEX_METHOD: AlexStep[] = [
  {
    letter: 'A',
    word: 'Alinhamento',
    subtitle: 'Estratégia, Propósito e Diagnóstico de Fluxo',
    description: 'Compreendemos o estado real da organização, alinhando metas estratégicas com a realidade de quem está na linha de frente.',
    keyAction: 'Diagnóstico 360° do fluxo de valor e definição do norte estratégico (Hoshin Kanri).',
    metric: '100% de clareza nas metas de fluxo'
  },
  {
    letter: 'L',
    word: 'Lean',
    subtitle: 'Eliminação Sistemática de Desperdícios',
    description: 'Aplicamos o ferramental do Lean Six Sigma com rigor técnico para remover retrabalhos, esperas e excessos que sobrecarregam o time.',
    keyAction: 'Kaizens pontuais de alta velocidade e redesenho de processos chave.',
    metric: '-40% a -60% de Lead Time e desperdícios'
  },
  {
    letter: 'E',
    word: 'Evolução',
    subtitle: 'Hábitos Atômicos & Comportamento Sustentável',
    description: 'O grande diferencial Flowean: traduzimos o novo processo em micro-hábitos diários, fáceis de executar e impossíveis de esquecer.',
    keyAction: 'Implementação de rituais atômicos, gatilhos de rotina e feedback loops contínuos.',
    metric: '+85% de taxa de adesão voluntária'
  },
  {
    letter: 'X',
    word: 'eXcelência',
    subtitle: 'Padronização, Métricas e Governança Perene',
    description: 'Blindamos os ganhos com governança leve, dados transparentes e cultura de melhoria contínua onde a excelência vira a nova norma.',
    keyAction: 'Dashboards operacionais, auditorias de processo humanizadas e comitês de melhoria.',
    metric: 'Cultura sustentável e ROI duradouro'
  }
];

export const APPLICATIONS: ApplicationFront[] = [
  {
    id: 'consultoria',
    title: 'Consultoria',
    badge: 'Mão na massa & Estratégia',
    description: 'Diagnóstico e transformação in company dos seus processos mais críticos, com entrega garantida de métricas de fluxo e ROI.',
    iconName: 'Briefcase',
    deliverables: [
      'Diagnóstico de Maturidade Operacional',
      'Mapeamento de Fluxos de Valor (VSM)',
      'Sprints de Transformação Rápida (Kaizens)',
      'Governança de KPIs e Gestão de Rotinas'
    ],
    idealFor: 'Empresas que enfrentam gargalos de crescimento, atrasos em entregas ou baixa rentabilidade operacional.'
  },
  {
    id: 'treinamentos',
    title: 'Treinamentos',
    badge: 'Capacitação & Certificação',
    description: 'Academias corporativas e formações que unem o rigor técnico do Lean Six Sigma ao poder comportamental dos Hábitos Atômicos.',
    iconName: 'GraduationCap',
    deliverables: [
      'Formação LSS-A Practitioner & Green Belt',
      'Liderança para Gestão de Fluxo',
      'Workshops de Hábitos Atômicos no Trabalho',
      'Metodologia prática de resolução de problemas (8D/A3)'
    ],
    idealFor: 'Organizações que desejam formar equipes autônomas, capacitadas para identificar e resolver desperdícios.'
  },
  {
    id: 'livros',
    title: 'Livros e Conteúdo',
    badge: 'Propriedade Intelectual & Guias',
    description: 'Publicações proprietárias, playbooks de aplicação e materiais de referência para disseminação rápida de conhecimento.',
    iconName: 'BookOpen',
    deliverables: [
      'O Livro do Método A.L.E.X.™',
      'Playbooks operacionais prontos para uso',
      'Guias de bolso de Hábitos Operacionais',
      'Artigos, whitepapers e casos práticos de mercado'
    ],
    idealFor: 'Líderes, gestores de operações e profissionais que buscam fundamentos metodológicos sólidos.'
  },
  {
    id: 'softwares',
    title: 'Softwares e Ferramentas',
    badge: 'Tecnologia & Dados',
    description: 'Soluções digitais e templates inteligentes para monitorar o fluxo de trabalho, rituais diários e estabilidade operacional.',
    iconName: 'Cpu',
    deliverables: [
      'Dashboard de Gestão de Fluxo em tempo real',
      'Ferramenta digital de Auditoria de Hábitos',
      'Calculadoras de Lead Time e Eficiência',
      'Templates de Gestão à Vista e Gemba Walk'
    ],
    idealFor: 'Empresas em jornada de transformação digital que precisam dar visibilidade aos seus gargalos.'
  },
  {
    id: 'eventos',
    title: 'Eventos e Workshops',
    badge: 'Imersões & Experiências',
    description: 'Imersões presenciais e online de alto impacto para destravar a mentalidade de fluxo e alinhar lideranças corporativas.',
    iconName: 'CalendarCheck',
    deliverables: [
      'Flow Day Experience: imersão prática de 1 dia',
      'Workshops de Simulação de Fluxo Puxado',
      'Palestras magnéticas sobre Excelência Sustentável',
      'Facilitação de Planejamento Operacional'
    ],
    idealFor: 'Convenções de liderança, kick-offs de projetos estratégicos e eventos de integração de times.'
  }
];

export const FLOW_DIMENSIONS = [
  { name: 'Fluxo de Processos', desc: 'Passagem das tarefas sem acúmulo de estoques ou filas.' },
  { name: 'Fluxo de Informação', desc: 'Dados e comunicação claros e acessíveis a quem decide.' },
  { name: 'Fluxo de Trabalho', desc: 'Ritmo suave das equipes, sem sobrecarga ou ociosidade.' },
  { name: 'Fluxo de Clientes', desc: 'Jornada fluida do cliente, do primeiro contato à entrega.' },
  { name: 'Fluxo Financeiro', desc: 'Ciclo de caixa saudável e redução de capital de giro preso.' },
  { name: 'Fluxo de Decisões', desc: 'Autonomia calibrada e eliminação de aprovações desnecessárias.' },
  { name: 'Fluxo de Materiais', desc: 'Logística enxuta, no tempo certo (Just in Time).' },
  { name: 'Fluxo Digital', desc: 'Sistemas que conversam entre si sem retrabalho de digitação.' },
  { name: 'Fluxo de Conhecimento', desc: 'Lições aprendidas e padrões compartilhados em tempo real.' }
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    dimension: 'Visibilidade do Fluxo',
    question: 'Como a sua empresa enxerga o andamento das tarefas e processos no dia a dia?',
    options: [
      { text: 'Não temos visão clara; ocorrem atrasos frequentes e surpresas diárias.', points: 1 },
      { text: 'Usamos planilhas isoladas, mas cada setor tem sua própria versão da verdade.', points: 2 },
      { text: 'Temos quadros de tarefas, porém com gargalos e gargalos que demoram a ser notados.', points: 3 },
      { text: 'Monitoramos o fluxo ponta a ponta com métricas de tempo e transparência total.', points: 4 }
    ]
  },
  {
    id: 2,
    dimension: 'Desperdícios & Retrabalho',
    question: 'Qual é o nível de retrabalho, esperas e esforço desnecessário na operação?',
    options: [
      { text: 'Muito alto: a equipe passa a maior parte do tempo apagando incêndios.', points: 1 },
      { text: 'Frequente: sabemos que há desperdício, mas falta tempo para corrigir a raiz.', points: 2 },
      { text: 'Moderado: já fizemos melhorias pontuais, mas alguns velhos problemas persistem.', points: 3 },
      { text: 'Baixo: aplicamos melhoria contínua e eliminamos causas-raiz com rigor.', points: 4 }
    ]
  },
  {
    id: 3,
    dimension: 'Sustentação de Hábitos',
    question: 'Quando um novo processo ou regra é implementado, o que acontece 60 dias depois?',
    options: [
      { text: 'Quase todo mundo volta ao jeito antigo; o esforço é perdido (efeito rebote).', points: 1 },
      { text: 'Apenas uma parte segue o padrão quando o gestor cobra ativamente.', points: 2 },
      { text: 'A maioria segue, mas é necessário esforço constante de monitoramento.', points: 3 },
      { text: 'O processo virou hábito natural e rotina incorporada à cultura do time.', points: 4 }
    ]
  },
  {
    id: 4,
    dimension: 'Pessoas & Liderança',
    question: 'Como os colaboradores participam da melhoria dos seus próprios postos de trabalho?',
    options: [
      { text: 'Apenas executam ordens e raramente dão sugestões ou têm autonomia.', points: 1 },
      { text: 'Apontam problemas quando cobrados, mas não sabem como resolvê-los.', points: 2 },
      { text: 'Participam de dinâmicas ocasionais, porém sem rotina diária de melhoria.', points: 3 },
      { text: 'Têm rituais diários e autonomia para testar micro-melhorias continuamente.', points: 4 }
    ]
  },
  {
    id: 5,
    dimension: 'Dados & Indicadores',
    question: 'Como as decisões operacionais são tomadas na rotina da empresa?',
    options: [
      { text: 'Por intuição ou urgência de quem fala mais alto no momento.', points: 1 },
      { text: 'Por relatórios mensais estáticos que chegam tarde demais para agir.', points: 2 },
      { text: 'Temos indicadores chave (KPIs), mas a tomada de decisão nem sempre é ágil.', points: 3 },
      { text: 'Dados em tempo real alimentam decisões imediatas em rituais estruturados.', points: 4 }
    ]
  }
];

export const DIAGNOSTIC_RESULTS: DiagnosticResult[] = [
  {
    title: 'Operação com Fluxo Travado',
    level: 'Nível 1 • Sobrecarga & Retrabalho Crítico',
    scoreRange: '5 a 8 pontos',
    diagnosis: 'Sua operação sofre com o "efeito bombeiro": muito esforço individual gerando pouco fluxo real. Há silos de informação, gargalos ocultos e um alto custo de desperdício.',
    recommendation: 'Início urgente pelo Pilar 1 (FLUXO) e etapa "A" do Método A.L.E.X.™: Diagnóstico do Fluxo de Valor e Mapeamento dos 8 Desperdícios para estancar as perdas imediatas.'
  },
  {
    title: 'Eficiência Ilhada sem Sustentação',
    level: 'Nível 2 • Melhorias Isoladas com Efeito Rebote',
    scoreRange: '9 a 12 pontos',
    diagnosis: 'Sua empresa já tentou implementar ferramentas ou consultorias, mas o resultado não se sustenta. O processo técnico foi desenhado, mas os hábitos das pessoas não acompanharam a mudança.',
    recommendation: 'Aplicação imediata do LSS-A Framework conectando o Pilar 3 (PESSOAS/HÁBITOS). Transformar procedimentos burocráticos em micro-hábitos atômicos diários.'
  },
  {
    title: 'Fluxo em Evolução Estruturada',
    level: 'Nível 3 • Operação Organizada com Oportunidades de Escala',
    scoreRange: '13 a 16 pontos',
    diagnosis: 'Há disciplina e bons processos, porém a operação ainda depende muito da energia dos gestores para não perder o ritmo. Falta afinar a sincronia de dados e a autonomia plena das equipes.',
    recommendation: 'Avanço para as etapas "E" e "X" do Método A.L.E.X.™: governança por rituais autônomos, gestão à vista de fluxo e consolidação da cultura de excelência contínua.'
  },
  {
    title: 'Excelência Operacional Sustentável',
    level: 'Nível 4 • Alta Maturidade de Fluxo & Hábitos',
    scoreRange: '17 a 20 pontos',
    diagnosis: 'Parabéns! Sua organização já entende que fluxo e comportamento andam juntos. A rotina é previsível, os desperdícios são combatidos na origem e a cultura é forte.',
    recommendation: 'Foco na escala contínua, inovação em ferramentas digitais e formação de multiplicadores internos através das certificações LSS-A Practitioner da Flowean.'
  }
];
