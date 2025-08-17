import { useState } from "react";
import styled from "styled-components";

export interface MbGrupoOpcao {
  id: number;
  titulo?: string;
  corpo?: string;
  rodape?: string;
  selecionado?: boolean;
}

export interface MbGrupoOpcoesProps {
  opcoes: MbGrupoOpcao[];
  valorPadrao?: MbGrupoOpcao | null;
  onChange?: (opcao: MbGrupoOpcao) => void;
}

const SectionEstilizada = styled.section<MbGrupoOpcao>`
  width: 194px;
  height: 88px;
  background: ${(props) =>
    props.selecionado
      ? "linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)"
      : "#fff"};
  border: 1px solid;
  border-color: ${(props) => (props.selecionado ? "#002f52" : "#EB9B00")};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  margin: 10px;
  font-family: sans-serif;
  cursor: pointer;
  header {
    color: ${(props) => (props.selecionado ? "#FFF" : "#EB9B00")};
    font-weight: 400;
    font-size: 12px;
  }
  strong {
    color: ${(props) => (props.selecionado ? "#FFF" : "#EB9B00")};
    font-weight: 700;
    font-size: 16px;
  }
  footer {
    color: ${(props) => (props.selecionado ? "#FFF" : "rgba(0, 0, 0, 0.54)")};
    font-weight: 400;
    font-size: 12px;
  }
`;

export const MbGrupoOpcoes = ({
  opcoes,
  onChange,
  valorPadrao,
}: MbGrupoOpcoesProps) => {
  const [selecao, setSelecao] = useState<MbGrupoOpcao | null>(
    valorPadrao ?? null
  );
  const aoSelecionar = (opcao: MbGrupoOpcao): void => {
    setSelecao(opcao);
    onChange?.(opcao);
  };

  return (
    <>
      {opcoes.map((opcao) => (
        <SectionEstilizada
          onClick={() => aoSelecionar(opcao)}
          key={opcao.id}
          id={opcao.id}
          selecionado={selecao?.id === opcao.id}
        >
          <header>{opcao.titulo}</header>
          <div>
            <strong>{opcao.corpo}</strong>
          </div>
          <footer>{opcao.rodape}</footer>
        </SectionEstilizada>
      ))}
    </>
  );
};
