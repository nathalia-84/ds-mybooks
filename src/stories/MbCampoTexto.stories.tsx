import type { Meta, StoryObj } from "@storybook/react-vite";
import { MbCampoTexto } from "../components/MbCampoTexto";

// Meta configuração da story
const meta: Meta<typeof MbCampoTexto> = {
  title: "Components/MbCampoTexto",
  component: MbCampoTexto,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Componente de campo de texto customizável com suporte a diferentes tipos, validação e estados visuais.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Texto exibido quando o campo está vazio",
    },
    valor: {
      control: "text",
      description: "Valor inicial do campo de texto",
    },
    tipo: {
      control: { type: "select" },
      options: ["text", "email", "password", "search"],
      description: "Tipo do campo de entrada",
    },
    label: {
      control: "text",
      description: "Rótulo exibido acima do campo",
    },
    disabled: {
      control: "boolean",
      description: "Define se o campo está desabilitado",
    },
    erro: {
      control: "text",
      description: "Mensagem de erro a ser exibida",
    },
    onChange: {
      action: "onChange",
      description: "Função chamada quando o valor é alterado",
    },
    onBlur: {
      action: "onBlur",
      description: "Função chamada quando o campo perde o foco",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story principal
export const Default: Story = {
  args: {
    placeholder: "Digite seu texto aqui...",
  },
};

// Story com label
export const ComLabel: Story = {
  args: {
    label: "Nome completo",
    placeholder: "Digite seu nome",
  },
};

// Story com valor inicial
export const ComValorInicial: Story = {
  args: {
    label: "Email",
    valor: "usuario@exemplo.com",
    tipo: "email",
  },
};

// Story com erro
export const ComErro: Story = {
  args: {
    label: "Email",
    valor: "email-invalido",
    tipo: "email",
    erro: "Por favor, insira um email válido",
  },
};

// Story desabilitado
export const Desabilitado: Story = {
  args: {
    label: "Campo desabilitado",
    valor: "Este campo está desabilitado",
    disabled: true,
  },
};

// Story senha
export const CampoSenha: Story = {
  args: {
    label: "Senha",
    tipo: "password",
    placeholder: "Digite sua senha",
  },
};
