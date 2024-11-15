import styled from "styled-components";
import theme from "../../theme";

export const StyledSkillSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-rows: max-content 1fr;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: max-content;
  max-width: ${theme.size.appMaxWidth};
  margin-left: auto;
  margin-right: auto;
  padding-left: 6%;
  padding-right: 6%;
`;

export const StyledSkillList = styled.div`
  width: 100%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  @media ${theme.breakPoints.device.tablet} {
    gap: 15px;
  }
`;
