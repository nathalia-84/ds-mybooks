import styled, { css } from "styled-components";

export interface MbBotaoProps {
  texto?: string;
  tipo?: "primario" | "secundario";
  onClick?: () => void;
}

const BotaoEstilizado = styled.button<MbBotaoProps>`
  background: ${(props: MbBotaoProps) =>
    props.tipo === "primario" ? "#EB9B00" : "#fff"};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: ${(props: MbBotaoProps) =>
    props.tipo === "primario" ? "#FFF" : " #EB9B00"};
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 8px;
  ${(props: MbBotaoProps) =>
    props.tipo === "primario"
      ? css`
          &:hover {
            background: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background: #fff;
            border: 2px solid #b87900;
            color: #b87900;
          }
        `};
`;

export const MbBotao = ({
  texto,
  onClick,
  tipo = "primario",
}: MbBotaoProps) => {
  return (
    <BotaoEstilizado onClick={onClick} tipo={tipo}>
      {texto || "Clique Aqui"}
    </BotaoEstilizado>
  );
};
