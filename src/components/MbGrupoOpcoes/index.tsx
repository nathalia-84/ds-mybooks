import styled from "styled-components";

export type MbGrupoOpcoesProps = {
  selecionado?: boolean;
};

const SectionEstilizada = styled.section<MbGrupoOpcoesProps>`
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

export const MbGrupoOpcoes = ({ selecionado = true }: MbGrupoOpcoesProps) => {
  return (
    <>
      <SectionEstilizada selecionado={selecionado}>
        <header>E-book</header>
        <div>
          <strong>R$ 00,00</strong>
        </div>
        <footer>.pdf, .epub, .mobi</footer>
      </SectionEstilizada>
      <SectionEstilizada selecionado={selecionado}>
        <header>E-book</header>
        <div>
          <strong>R$ 00,00</strong>
        </div>
        <footer>.pdf, .epub, .mobi</footer>
      </SectionEstilizada>
      <SectionEstilizada selecionado={selecionado}>
        <header>E-book</header>
        <div>
          <strong>R$ 00,00</strong>
        </div>
        <footer>.pdf, .epub, .mobi</footer>
      </SectionEstilizada>
    </>
  );
};
