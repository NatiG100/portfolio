import styled from "styled-components";

export const StyledFlex = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ gap }) => gap};
  direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;
