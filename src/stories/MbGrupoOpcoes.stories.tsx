import type { Meta, StoryObj } from "@storybook/react-vite";
import { MbGrupoOpcoes } from "../components/MbGrupoOpcoes";

// Meta configuração da story
const meta: Meta<typeof MbGrupoOpcoes> = {
  title: "Components/MbGrupoOpcoes",
  component: MbGrupoOpcoes,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente que exibe um grupo de opções de compra com preços e formatos disponíveis. Permite seleção única com estado interno.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    opcoes: {
      control: "object",
      description: "Array de opções a serem exibidas no grupo",
    },
    valorPadrao: {
      control: "object",
      description: "Opção selecionada por padrão ao carregar o componente",
    },
    onChange: {
      action: "onChange",
      description: "Função chamada quando uma opção é selecionada",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Dados de exemplo
const opcoesExemplo = [
  {
    id: 1,
    titulo: "E-book",
    corpo: "R$ 29,90",
    rodape: ".pdf, .epub, .mobi",
  },
  {
    id: 2,
    titulo: "Livro Físico",
    corpo: "R$ 59,90",
    rodape: "Entrega em 15 dias",
  },
  {
    id: 3,
    titulo: "Audiobook",
    corpo: "R$ 39,90",
    rodape: "Disponível em MP3",
  },
];

// Story principal
export const Default: Story = {
  args: {
    opcoes: opcoesExemplo,
  },
};

// Story com valor padrão selecionado
export const ComValorPadrao: Story = {
  args: {
    opcoes: opcoesExemplo,
    valorPadrao: opcoesExemplo[0], // E-book selecionado por padrão
  },
};

// Story com callback onChange
export const ComCallback: Story = {
  args: {
    opcoes: opcoesExemplo,
    valorPadrao: opcoesExemplo[1], // Livro Físico selecionado por padrão
    onChange: (opcao) => {
      console.log("Opção selecionada:", opcao);
    },
  },
};

// Story com apenas duas opções
export const DuasOpcoes: Story = {
  args: {
    opcoes: [
      {
        id: 1,
        titulo: "E-book",
        corpo: "R$ 19,90",
        rodape: ".pdf, .epub",
      },
      {
        id: 2,
        titulo: "Livro Físico",
        corpo: "R$ 49,90",
        rodape: "Frete grátis",
      },
    ],
    valorPadrao: {
      id: 2,
      titulo: "Livro Físico",
      corpo: "R$ 49,90",
      rodape: "Frete grátis",
    },
  },
};
