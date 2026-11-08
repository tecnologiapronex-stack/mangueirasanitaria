/**
 * Dados centrais do site. Toda informação técnica aqui vem de fonte oficial:
 *  - DataSheet Pronex "Mangueiras Sanitárias Atóxicas" (jan/2025)
 *  - Ficha Técnica "Kit Conexão para Mangueira Sanitária" (mar/2025)
 *  - Respostas da Pronex em 08/11/2026
 * Não acrescente dado técnico sem fonte. Pendências ficam em PENDENCIAS.md.
 */

export const SITE = {
  url: "https://mangueirasanitaria.com.br",
  nome: "Mangueiras Sanitárias Pronex",
  marca: "Grupo Pronex",
  tagline: "Força que movimenta a indústria",
};

export const EMPRESA = {
  razaoSocial: "PRONEX Importação e Exportação de Equipamentos Industriais Ltda",
  cnpj: "37.367.280/0001-80",
  endereco: "Rua Azevedo Soares, 1040, cj. 95",
  bairro: "Vila Gomes Cardim",
  cidade: "São Paulo",
  uf: "SP",
  cep: "03322-001",
  fundacao: 2012,
  siteInstitucional: "https://www.pronex.com.br",
};

/** Contatos confirmados pela Pronex em 08/11/2026 para este site. */
export const CONTATO = {
  telefone: "(11) 4114-9633",
  telefoneHref: "tel:+551141149633",
  email: "comercial@pronex.com.br",
  whatsapp: "(11) 96622-8002",
  whatsappDigitos: "5511966228002",
};

export function whatsappUrl(texto: string) {
  return `https://wa.me/${CONTATO.whatsappDigitos}?text=${encodeURIComponent(texto)}`;
}

export const WHATSAPP_SAUDACAO = "Olá! Vim do site Mangueiras Sanitárias Pronex e gostaria de ajuda.";

/**
 * Downloads das fichas. Ficam desligados até a Pronex reeditar os PDFs com os
 * contatos do site (os PDFs atuais trazem outros telefones e e-mails).
 * Para ligar: coloque os PDFs em /public/docs/ e mude para true.
 */
export const DOWNLOADS_LIBERADOS = false;

export const DOCUMENTOS = [
  {
    id: "datasheet",
    titulo: "DataSheet: Mangueiras Sanitárias Atóxicas",
    descricao: "Construção, condições de uso, fluidos indicados e tabela por bitola. Vale para FlexMilk, FlexFood e FlexPharma.",
    versao: "jan/2025",
    arquivo: "/docs/datasheet-mangueiras-sanitarias-2025-01.pdf",
  },
  {
    id: "kit",
    titulo: "Ficha técnica: Kit de conexão ConeX by Pronex",
    descricao: "Materiais do espigão e da capa e padrões de terminal.",
    versao: "mar/2025",
    arquivo: "/docs/ficha-kit-conexao-2025-03.pdf",
  },
];

/* ---------- Mangueira: dados comuns às três linhas ---------- */

export const CONSTRUCAO = [
  { item: "Tubo interno", texto: "Borracha branca EPDM ou butílica, lisa e 100% atóxica, para não transferir sabor ou odor ao produto e dificultar a aderência de resíduos." },
  { item: "Reforço", texto: "Camadas têxteis de alta resistência com arame helicoidal embutido, que mantêm a mangueira aberta na sucção." },
  { item: "Capa externa", texto: "Borracha sintética azul, resistente à abrasão, a intempéries, ao ozônio e a resíduos oleosos." },
  { item: "Marcação", texto: "Identificação em letras brancas ao longo da capa." },
];

export const CONDICOES = {
  uso: "Sucção e descarga",
  pressaoTrabalho: "10 bar",
  pressaoRuptura: "30 bar",
  temperatura: "−30 °C a 120 °C",
  esterilizacao: "Pode ser esterilizada a 130 °C por no máximo 30 minutos",
  vacuo: "0,9 bar",
  tracao: "4.000 N, com encolhimento temporário de diâmetro de 3,5%",
  bitolas: '3/4" a 3"',
};

export const TABELA = [
  { bitola: '3/4"', di: 19, de: 31, parede: 6, peso: "0,63", raio: 40 },
  { bitola: '1"', di: 25, de: 37, parede: 6, peso: "0,77", raio: 55 },
  { bitola: '1.1/2"', di: 38, de: 52, parede: 7, peso: "1,32", raio: 80 },
  { bitola: '2"', di: 51, de: 65, parede: 7, peso: "1,84", raio: 110 },
  { bitola: '3"', di: 76, de: 95, parede: 7, peso: "2,91", raio: 150 },
];

export const FLUIDOS_FICHA = [
  "Água potável",
  "Vinho e cerveja",
  "Álcool até 98%",
  "Sucos de frutas, bebidas não alcoólicas e refrigerantes",
  "Substâncias vegetais e animais",
  "Alimentos oleosos e gordurosos",
  "Leite, iogurte e derivados",
];

export const CONFORMIDADE =
  "Conformidade com FDA, BfR XXI cat. 2 e Regulamento CE 1935/2004, livre de ftalatos e BPA, declarada pelo Grupo Pronex.";

export const AVISO_INDICACAO =
  "As informações desta página orientam a especificação. A adequação ao seu processo é confirmada pela equipe técnica da Pronex, considerando fluido, temperatura, pressão, limpeza e montagem.";

/* ---------- Linhas ---------- */

export type Linha = {
  slug: "flexmilk" | "flexfood" | "flexpharma";
  nome: string;
  segmento: string;
  logo: string;
  resumo: string;
};

export const LINHAS: Linha[] = [
  {
    slug: "flexmilk",
    nome: "FlexMilk",
    segmento: "Laticínios",
    logo: "/img/logo-flexmilk.webp",
    resumo: "Para a condução de leite e derivados em laticínios e cooperativas. Tubo interno liso, que facilita a limpeza entre lotes.",
  },
  {
    slug: "flexfood",
    nome: "FlexFood",
    segmento: "Alimentos e bebidas",
    logo: "/img/logo-flexfood.webp",
    resumo: "Para o transporte de alimentos e bebidas em fábricas, cervejarias e envasadoras, com tubo atóxico que não transfere sabor ou odor ao produto.",
  },
  {
    slug: "flexpharma",
    nome: "FlexPharma",
    segmento: "Farmacêutico e cosmético",
    logo: "/img/logo-flexpharma.webp",
    resumo: "Para transferência de produtos em ambientes farmacêuticos e cosméticos, onde pureza e higiene orientam a especificação.",
  },
];

/* ---------- Conexões ---------- */

export type Familia = {
  slug: string;
  nome: string;
  referencia: string;
  card: string;
  metaDescription: string;
  h1: string;
  abertura: string;
  quando: string;
  informe: string;
  aviso?: string;
  /** Texto ainda não confirmado: não publicar como dado. */
  pendente?: string;
};

export const MATERIAL_KIT = "Espigão em aço inox 316 e capa em aço inox 304";

export const FAMILIAS: Familia[] = [
  {
    slug: "tri-clamp",
    nome: "Tri-Clamp",
    referencia: "TC ISO 2852",
    card: "União por abraçadeira, de montagem e desmontagem rápidas.",
    metaDescription: "Mangueira sanitária com terminal Tri-Clamp (referência TC ISO 2852), espigão em inox 316 e capa em inox 304. FlexMilk, FlexFood e FlexPharma montadas sob medida pela Pronex.",
    h1: "Mangueira sanitária com terminal Tri-Clamp",
    abertura: "O Tri-Clamp une dois terminais com uma abraçadeira e uma vedação entre as faces. A montagem e a desmontagem são rápidas, o que facilita a rotina de limpeza da linha. O kit ConeX by Pronex segue a referência TC ISO 2852.",
    quando: "Quando o equipamento já tem faces Tri-Clamp ou quando a linha é desmontada com frequência.",
    informe: "A bitola da face do equipamento e se você também precisa de abraçadeira e vedação.",
  },
  {
    slug: "sms",
    nome: "SMS",
    referencia: "SMS 1145",
    card: "União roscada sanitária de padrão sueco, comum em laticínios.",
    metaDescription: "Mangueira sanitária com terminal SMS (referência SMS 1145), espigão em inox 316 e capa em inox 304. Montagem sob medida pela Pronex.",
    h1: "Mangueira sanitária com terminal SMS",
    abertura: "O SMS é uma união sanitária roscada, de origem sueca, muito presente em laticínios. O kit ConeX by Pronex segue a referência SMS 1145.",
    quando: "Quando a planta usa uniões SMS nos tanques, bombas e tubulações.",
    informe: "A bitola e se a ponta da mangueira deve ser macho ou porca.",
  },
  {
    slug: "din",
    nome: "DIN",
    referencia: "DIN 11851 e DIN 11864",
    card: "Uniões sanitárias de padrão alemão.",
    metaDescription: "Mangueira sanitária com terminal DIN (referências DIN 11851 e DIN 11864), espigão em inox 316 e capa em inox 304. Montagem sob medida pela Pronex.",
    h1: "Mangueira sanitária com terminal DIN",
    abertura: "As uniões DIN são de padrão alemão. A ficha ConeX by Pronex cita duas referências: DIN 11851 e DIN 11864. São normas diferentes, e o pedido precisa dizer qual delas o equipamento usa.",
    quando: "Quando o equipamento tem uniões DIN, comuns em máquinas de origem europeia.",
    informe: "A norma (11851 ou 11864), a bitola e se a ponta deve ser macho ou porca.",
  },
  {
    slug: "rjt",
    nome: "RJT",
    referencia: "BS 1864",
    card: "União roscada sanitária de padrão britânico.",
    metaDescription: "Mangueira sanitária com terminal RJT (referência BS 1864), espigão em inox 316 e capa em inox 304. Montagem sob medida pela Pronex.",
    h1: "Mangueira sanitária com terminal RJT",
    abertura: "O RJT é uma união sanitária roscada de padrão britânico. O kit ConeX by Pronex segue a referência BS 1864.",
    quando: "Quando a linha ou o equipamento usa uniões RJT.",
    informe: "A bitola e se a ponta deve ser macho ou porca.",
  },
  {
    slug: "bsp",
    nome: "BSP",
    referencia: "Rosca BSP, macho ou fêmea conforme a bitola",
    card: "Ponta roscada para equipamentos com rosca BSP.",
    metaDescription: "Mangueira sanitária com ponta roscada BSP, macho ou fêmea conforme a bitola. FlexMilk, FlexFood e FlexPharma montadas sob medida pela Pronex.",
    h1: "Mangueira sanitária com ponta roscada BSP",
    abertura: "A ponta roscada BSP liga a mangueira direto a equipamentos, válvulas e adaptadores com essa rosca. A Pronex fornece a ponta em macho ou fêmea, conforme a bitola.",
    quando: "Quando o ponto de ligação tem rosca BSP.",
    informe: "A bitola, macho ou fêmea e, se souber, se a rosca é paralela ou cônica.",
    aviso: "BSP e NPT têm medidas parecidas, mas não são intercambiáveis. Se tiver dúvida, envie uma foto da rosca.",
  },
  {
    slug: "npt",
    nome: "NPT",
    referencia: "Rosca NPT, macho ou fêmea conforme a bitola",
    card: "Ponta roscada para equipamentos com rosca NPT.",
    metaDescription: "Mangueira sanitária com ponta roscada NPT, macho ou fêmea conforme a bitola. Montagem sob medida pela Pronex.",
    h1: "Mangueira sanitária com ponta roscada NPT",
    abertura: "A ponta roscada NPT segue o padrão americano de rosca e liga a mangueira a equipamentos e adaptadores com essa rosca. A Pronex fornece a ponta em macho ou fêmea, conforme a bitola.",
    quando: "Quando o ponto de ligação tem rosca NPT, comum em equipamentos de origem americana.",
    informe: "A bitola e se a ponta deve ser macho ou fêmea.",
    aviso: "BSP e NPT têm medidas parecidas, mas não são intercambiáveis. Se tiver dúvida, envie uma foto da rosca.",
  },
  {
    slug: "camlock",
    nome: "Camlock",
    referencia: "Engate rápido",
    card: "Engate rápido para carga e descarga.",
    metaDescription: "Mangueira sanitária com engate rápido Camlock para carga e descarga. FlexMilk, FlexFood e FlexPharma montadas sob medida pela Pronex.",
    h1: "Mangueira sanitária com engate rápido Camlock",
    abertura: "O Camlock é um engate rápido por alavancas. Ele liga e solta a mangueira sem ferramenta, o que agiliza operações de carga e descarga.",
    quando: "Quando a mangueira é ligada e desligada várias vezes por turno, como em caminhões-tanque e estações de transferência.",
    informe: "A bitola, o tipo de engate do ponto de ligação e, de preferência, uma foto.",
    pendente: "Os tipos de Camlock fornecidos serão confirmados pela engenharia da Pronex. Informe o tipo que você usa no pedido.",
  },
];

export const AVISO_COMPATIBILIDADE =
  "A referência de norma indica o padrão de fabricação do terminal. A compatibilidade com o seu equipamento é confirmada pela equipe técnica antes da proposta.";

/* ---------- Navegação ---------- */

export const NAV = [
  {
    label: "Mangueiras",
    href: "/mangueiras-sanitarias",
    sub: [
      { label: "FlexMilk · laticínios", href: "/flexmilk" },
      { label: "FlexFood · alimentos e bebidas", href: "/flexfood" },
      { label: "FlexPharma · farmacêutico e cosmético", href: "/flexpharma" },
      { label: "Comparar as linhas", href: "/mangueiras-sanitarias#comparar" },
    ],
  },
  {
    label: "Conexões",
    href: "/conexoes",
    sub: [
      ...FAMILIAS.map((f) => ({ label: f.nome, href: `/conexoes/${f.slug}` })),
      { label: "Como identificar sua conexão", href: "/conexoes#identificar" },
    ],
  },
  { label: "Aplicações", href: "/aplicacoes" },
  { label: "Materiais técnicos", href: "/materiais-tecnicos" },
  { label: "Sobre", href: "/sobre" },
];
