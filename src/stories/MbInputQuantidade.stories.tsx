import type { Meta, StoryObj } from "@storybook/react-vite";
import { MbInputQuantidade } from "../components/MbInputQuantidade";

// Meta configuração da story
const meta: Meta<typeof MbInputQuantidade> = {
  title: "Components/MbInputQuantidade",
  component: MbInputQuantidade,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de input de quantidade com botões para aumentar e diminuir valores. Permite controle de limites mínimo e máximo.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    quantidadeInicial: {
      control: "number",
      description: "Valor inicial da quantidade",
    },
    minimo: {
      control: "number",
      description: "Valor mínimo permitido",
    },
    maximo: {
      control: "number",
      description: "Valor máximo permitido",
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o componente",
    },
    onChange: {
      action: "onChange",
      description: "Função chamada quando a quantidade muda",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story principal
export const Default: Story = {
  args: {
    quantidadeInicial: 0,
    minimo: 0,
    maximo: 99,
  },
};

// Story com valor inicial diferente
export const ComValorInicial: Story = {
  args: {
    quantidadeInicial: 5,
    minimo: 0,
    maximo: 99,
  },
};

// Story com limites personalizados
export const LimitesPersonalizados: Story = {
  args: {
    quantidadeInicial: 3,
    minimo: 0,
    maximo: 10,
  },
};

// Story com range pequeno
export const RangePequeno: Story = {
  args: {
    quantidadeInicial: 1,
    minimo: 0,
    maximo: 3,
  },
};

// Story desabilitado
export const Desabilitado: Story = {
  args: {
    quantidadeInicial: 2,
    minimo: 0,
    maximo: 10,
    disabled: true,
  },
};

// Story no limite máximo
export const NoLimiteMaximo: Story = {
  args: {
    quantidadeInicial: 5,
    minimo: 0,
    maximo: 5,
  },
};

// Story no limite mínimo
export const NoLimiteMinimo: Story = {
  args: {
    quantidadeInicial: 1,
    minimo: 0,
    maximo: 10,
  },
};
