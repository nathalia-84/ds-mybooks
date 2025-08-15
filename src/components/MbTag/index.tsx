import styled from "styled-components";

export interface MbTagProps {
  texto: string;
}

const TagStyled = styled.div`
  padding: 1.5rem 2rem;
  color: #fff;
  background: linear-gradient(90deg, #eb9b00 0%, #ffbe42 100%);
  font-weight: 700;
  font-size: 1.5rem;
  display: inline-block;
  border-radius: 0.75rem;
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  letter-spacing: 0.02em;
  transition: background 0.3s;
`;

export const MbTag = ({ texto }: MbTagProps) => {
  return <TagStyled>{texto}</TagStyled>;
};
