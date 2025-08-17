import { useState } from "react";
import styled from "styled-components";

export interface MbInputQuantidadeProps {
  quantidadeInicial?: number;
  minimo?: number;
  maximo?: number;
  onChange?: (quantidade: number) => void;
  disabled?: boolean;
}

const ContainerEstilizado = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: fit-content;
`;

const TituloEstilizado = styled.h3`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #002f52;
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const ContainerControles = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  border: 2px solid #002f52;
  border-radius: 8px;
  padding: 8px 16px;
  min-width: 140px;

  @media (max-width: 480px) {
    gap: 8px;
    padding: 6px 12px;
    min-width: 120px;
  }
`;

const BotaoQuantidade = styled.button<{ disabled?: boolean }>`
  background: none;
  border: none;
  color: #002f52;
  font-size: 20px;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  min-height: 32px;

  &:hover:not(:disabled) {
    background: rgba(0, 47, 82, 0.1);
    transform: scale(1.1);
  }

  &:focus {
    outline: 2px solid rgba(0, 47, 82, 0.3);
    outline-offset: 2px;
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  @media (max-width: 480px) {
    font-size: 18px;
    min-width: 28px;
    min-height: 28px;
    padding: 2px 6px;
  }
`;

const DisplayQuantidade = styled.div`
  font-family: Poppins, sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #002f52;
  text-align: center;
  min-width: 40px;
  padding: 4px 8px;
  background: rgba(0, 47, 82, 0.05);
  border-radius: 4px;

  @media (max-width: 480px) {
    font-size: 16px;
    min-width: 36px;
    padding: 2px 6px;
  }
`;

export const MbInputQuantidade = ({
  quantidadeInicial = 0,
  minimo = 0,
  maximo = 99,
  onChange,
  disabled = false,
}: MbInputQuantidadeProps) => {
  const [quantidade, setQuantidade] = useState<number>(quantidadeInicial);

  const diminuir = () => {
    if (quantidade > minimo && !disabled) {
      const novaQuantidade = quantidade - 1;
      setQuantidade(novaQuantidade);
      onChange?.(novaQuantidade);
    }
  };

  const aumentar = () => {
    if (quantidade < maximo && !disabled) {
      const novaQuantidade = quantidade + 1;
      setQuantidade(novaQuantidade);
      onChange?.(novaQuantidade);
    }
  };

  const podeAumentar = quantidade < maximo && !disabled;
  const podeDiminuir = quantidade > minimo && !disabled;

  return (
    <ContainerEstilizado>
      <TituloEstilizado>Quantidade</TituloEstilizado>
      <ContainerControles>
        <BotaoQuantidade
          onClick={diminuir}
          disabled={!podeDiminuir}
          title="Diminuir quantidade"
          type="button"
        >
          −
        </BotaoQuantidade>

        <DisplayQuantidade>{quantidade}</DisplayQuantidade>

        <BotaoQuantidade
          onClick={aumentar}
          disabled={!podeAumentar}
          title="Aumentar quantidade"
          type="button"
        >
          +
        </BotaoQuantidade>
      </ContainerControles>
    </ContainerEstilizado>
  );
};
