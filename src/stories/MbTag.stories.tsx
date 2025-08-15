import type { Meta, StoryObj } from "@storybook/react-vite";
import { MbTag } from "../components/MbTag";

// Meta configuração da story
const meta: Meta<typeof MbTag> = {
  title: "Components/MbTag",
  component: MbTag,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de tag/etiqueta para categorização e identificação visual.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    texto: {
      control: "text",
      description: "Texto exibido na tag",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story principal
export const Default: Story = {
  args: {
    texto: "Tag Exemplo",
  },
};

// Story com categoria
export const Categoria: Story = {
  args: {
    texto: "Ficção",
  },
};

// Story com gênero
export const Genero: Story = {
  args: {
    texto: "Romance",
  },
};

// Story com texto longo
export const TextoLongo: Story = {
  args: {
    texto: "Literatura Brasileira Contemporânea",
  },
};

// Story com texto curto
export const TextoCurto: Story = {
  args: {
    texto: "Novo",
  },
};

// Story com diferentes categorias
export const Multiplas: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <MbTag texto="Bestseller" />
      <MbTag texto="Ficção" />
      <MbTag texto="Romance" />
      <MbTag texto="Aventura" />
      <MbTag texto="Mistério" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstração de múltiplas tags em uso.",
      },
    },
  },
};

// Story com casos de uso comuns
export const CasosDeUso: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "flex-start",
      }}
    >
      <div>
        <h3 style={{ margin: "0 0 12px 0", fontFamily: "sans-serif" }}>
          Gêneros Literários:
        </h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <MbTag texto="Ficção" />
          <MbTag texto="Não-ficção" />
          <MbTag texto="Biografia" />
        </div>
      </div>

      <div>
        <h3 style={{ margin: "0 0 12px 0", fontFamily: "sans-serif" }}>
          Status:
        </h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <MbTag texto="Disponível" />
          <MbTag texto="Esgotado" />
          <MbTag texto="Pré-venda" />
        </div>
      </div>

      <div>
        <h3 style={{ margin: "0 0 12px 0", fontFamily: "sans-serif" }}>
          Popularidade:
        </h3>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <MbTag texto="Bestseller" />
          <MbTag texto="Editor's Choice" />
          <MbTag texto="Tendência" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Exemplos de como as tags podem ser usadas em diferentes contextos.",
      },
    },
  },
};
