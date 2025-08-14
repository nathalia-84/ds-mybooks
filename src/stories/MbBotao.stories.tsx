import type { Meta, StoryObj } from "@storybook/react-vite";
import { MbBotao } from "../components/MbBotao";

// Meta configuração da story
const meta: Meta<typeof MbBotao> = {
  title: "Components/MbBotao",
  component: MbBotao,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de botão customizável com variações primária e secundária.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    tipo: {
      control: { type: "select" },
      options: ["primario", "secundario"],
      description: "Variação visual do botão",
    },
    texto: {
      control: "text",
      description: "Texto exibido no botão",
    },
    onClick: {
      action: "clicked",
      description: "Função executada ao clicar no botão",
    },
  },
  args: {
    onClick: () => console.log("Botão clicado!"),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story principal - Primário
export const Primario: Story = {
  args: {
    tipo: "primario",
    texto: "Botão Primário",
  },
};

// Story secundária
export const Secundario: Story = {
  args: {
    tipo: "secundario",
    texto: "Botão Secundário",
  },
};

// Story com texto personalizado
export const TextoPersonalizado: Story = {
  args: {
    tipo: "primario",
    texto: "Comprar Agora",
  },
};

// Story com texto longo
export const TextoLongo: Story = {
  args: {
    tipo: "primario",
    texto: "Este é um botão com texto muito longo para testar o comportamento",
  },
};

// Story sem texto (padrão)
export const TextoPadrao: Story = {
  args: {
    tipo: "primario",
  },
};

// Story para testar interações
export const Interativo: Story = {
  args: {
    tipo: "primario",
    texto: "Clique em mim!",
    onClick: () => alert("Botão foi clicado!"),
  },
};

// Story mostrando todas as variações
export const TodasVariacoes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "16px" }}>
        <MbBotao
          tipo="primario"
          texto="Primário"
          onClick={() => console.log("Primário clicado")}
        />
        <MbBotao
          tipo="secundario"
          texto="Secundário"
          onClick={() => console.log("Secundário clicado")}
        />
      </div>
      <div style={{ display: "flex", gap: "16px" }}>
        <MbBotao
          tipo="primario"
          texto="Ação Principal"
          onClick={() => console.log("Ação Principal")}
        />
        <MbBotao
          tipo="secundario"
          texto="Ação Secundária"
          onClick={() => console.log("Ação Secundária")}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstração de todas as variações do componente MbBotao.",
      },
    },
  },
};
