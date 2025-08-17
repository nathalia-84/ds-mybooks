import { useState } from "react";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export interface MbCampoTextoProps {
  placeholder?: string;
  valor?: string;
  tipo?: "email" | "password";
  label?: string;
  onChange?: (valor: string) => void;
  onBlur?: (valor: string) => void;
  disabled?: boolean;
  erro?: string;
}

const ContainerEstilizado = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 100%;
    gap: 6px;
    padding: 0 4px;
  }

  @media (max-width: 480px) {
    gap: 4px;
    padding: 0 2px;
  }
`;

const LabelEstilizada = styled.label`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #002f52;
  margin-left: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-left: 12px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    margin-left: 8px;
  }
`;

const ContainerInput = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`;

const InputEstilizado = styled.input<{ hasError: boolean; hasIcon: boolean }>`
  width: 100%;
  box-sizing: border-box;
  padding: 10px 24px;
  padding-right: ${(props) => (props.hasIcon ? "50px" : "24px")};
  border: 1px solid ${(props) => (props.hasError ? "#e74c3c" : "#002F52")};
  border-radius: 40px;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  color: #a4a4a4;
  transition: border-color 0.2s ease;
  min-height: 48px;

  &:focus {
    outline: none;
    border-color: ${(props) => (props.hasError ? "#e74c3c" : "#002f52")};
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.hasError ? "rgba(231, 76, 60, 0.2)" : "rgba(0, 47, 82, 0.2)"};
  }

  &:disabled {
    background: #f5f5f5;
    color: #999;
    cursor: not-allowed;
    border-color: #ddd;
  }

  &::placeholder {
    color: #999;
    font-style: italic;
  }

  @media (max-width: 768px) {
    padding: 8px 20px;
    padding-right: ${(props) => (props.hasIcon ? "45px" : "20px")};
    font-size: 15px;
    min-height: 44px;
    border-radius: 35px;
  }

  @media (max-width: 480px) {
    padding: 6px 16px;
    padding-right: ${(props) => (props.hasIcon ? "40px" : "16px")};
    font-size: 14px;
    min-height: 40px;
    border-radius: 30px;
  }
`;

const BotaoToggleSenha = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  transition: color 0.2s ease;
  font-size: 18px;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;

  &:hover {
    color: #002f52;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    right: 14px;
    font-size: 16px;
    padding: 3px;
    min-width: 22px;
    min-height: 22px;
  }

  @media (max-width: 480px) {
    right: 12px;
    font-size: 14px;
    padding: 2px;
    min-width: 20px;
    min-height: 20px;
  }
`;

const MensagemErro = styled.span`
  font-family: sans-serif;
  font-size: 12px;
  color: #e74c3c;
  font-weight: 400;
  margin-left: 16px;

  @media (max-width: 768px) {
    font-size: 11px;
    margin-left: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    margin-left: 8px;
  }
`;

export const MbCampoTexto = ({
  placeholder = "Digite aqui...",
  valor: valorInicial = "",
  tipo = "email",
  label,
  onChange,
  onBlur,
  disabled = false,
  erro,
}: MbCampoTextoProps) => {
  const [valor, setValor] = useState<string>(valorInicial);
  const [senhaVisivel, setSenhaVisivel] = useState<boolean>(false);

  const aoAlterarValor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novoValor = event.target.value;
    setValor(novoValor);
    onChange?.(novoValor);
  };

  const aoPerderFoco = (event: React.FocusEvent<HTMLInputElement>) => {
    const valorAtual = event.target.value;
    onBlur?.(valorAtual);
  };

  const toggleSenhaVisivel = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  const tipoInput = tipo === "password" && senhaVisivel ? "text" : tipo;
  const temIcone = tipo === "password";

  return (
    <ContainerEstilizado>
      {label && <LabelEstilizada>{label}</LabelEstilizada>}
      <ContainerInput>
        <InputEstilizado
          type={tipoInput}
          placeholder={placeholder}
          value={valor}
          onChange={aoAlterarValor}
          onBlur={aoPerderFoco}
          disabled={disabled}
          hasError={!!erro}
          hasIcon={temIcone}
        />
        {temIcone && (
          <BotaoToggleSenha
            type="button"
            onClick={toggleSenhaVisivel}
            disabled={disabled}
            title={senhaVisivel ? "Ocultar senha" : "Mostrar senha"}
          >
            {senhaVisivel ? <FaEye /> : <FaEyeSlash />}
          </BotaoToggleSenha>
        )}
      </ContainerInput>
      {erro && <MensagemErro>{erro}</MensagemErro>}
    </ContainerEstilizado>
  );
};
