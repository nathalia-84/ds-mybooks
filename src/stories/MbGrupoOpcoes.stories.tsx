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
          "Componente que exibe um grupo de opções de compra com preços e formatos disponíveis.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    selecionado: {
      control: "boolean",
      description:
        "Define se o componente está selecionado (com estilo destacado)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story principal
export const Default: Story = {
  args: {
    selecionado: true,
  },
};

// Story não selecionado
export const NaoSelecionado: Story = {
  args: {
    selecionado: false,
  },
};
