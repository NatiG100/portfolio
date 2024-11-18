import styled from "styled-components";
import theme from "../../theme";
import { animated } from "react-spring";

export const StyledAboutSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: ${theme.size.appMaxWidth};
  margin-left: auto;
  margin-right: auto;
  padding: 4%;

  padding-top: 55px;
  padding-bottom: 55px;
`;

export const StyledAboutWrapper = styled.div`
  border: 1px solid #303034;

  background-color: ${theme.colors.surface};
  border-radius: 10px;
  padding: 25px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 680px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr max-content;
  align-items: center;
  justify-content: center;
  @media ${theme.breakPoints.device.laptop} {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;
export const StyledP = styled(animated.p)`
  color: ${theme.colors.textDark};
  font-size: 18px;
  letter-spacing: 1.2px;
  font-weight: 300;
  text-justify: newspaper;
  @media ${theme.breakPoints.device.laptop} {
    text-align: center;
    letter-spacing: 0px;
    font-size: ${theme.font.lg};
  }
  em {
    font-style: normal;
    color: ${theme.colors.primary};
  }
`;
