import styled from "styled-components";
import theme from "../../theme";
import { AiFillCaretRight as ArrowIcon } from "react-icons/ai";
import { animated } from "react-spring";

export const StyledExperienceSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-rows: max-content max-content 1fr;
  grid-template-columns: 1fr;
  justify-content: center;
  min-height: 100vh;
  max-width: ${theme.size.appMaxWidth};
  padding-top: 50px;
  padding-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 6%;
  padding-right: 6%;
`;
export const StyledExperienceTimelineWrapper = styled.div`
  width: 100%;
  max-width: 800px;

  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledExperienceSectionWrapper = styled(animated.div)`
  width: 100%;
  max-width: ${theme.size.appMaxWidth};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8%;
  height: max-content;
  margin-top: 3%;
  padding-left: 15px;
  padding-right: 15px;
  @media ${theme.breakPoints.device.tablet} {
    flex-direction: column-reverse;
    gap: 35px;
  }
`;

export const StyledWhereMenu = styled(animated.div)`
  height: max-content;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  margin-bottom: 5%;
`;
export const StyledWhereMenuWrapper = styled(animated.div)`
  max-width: 450px;
  width: 100%;
  overflow-x: auto;
  display: flex;
`;
export const StyledStepScroller = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 50px;
  background: linear-gradient(
    ${({ position }) => (position === "left" ? "to right" : "to left")},
    #0b0c10 70%,
    #0b0c1000
  );
  ${({ position }) => (position === "left" ? "left:0px;" : "right:0px;")};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #777;
  cursor: pointer;
  font-size: 12px;
  :hover {
    color: white;
  }
`;
export const StyledWhereMenuItem = styled.button`
  outline: none;
  background-color: ${theme.colors.primary}${({ selected }) => !selected && "77"};
  color: ${theme.colors.background};
  border-radius: 5px;
  font-size: ${theme.font.lg};
  letter-spacing: 2px;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: 600;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  white-space: nowrap;
  :hover {
    background-color: ${theme.colors.primary}${({ selected }) => !selected && "aa"};
  }
`;
export const StyledJobOverview = styled.div`
  flex-shrink: 1;
  display: grid;
  grid-template-rows: max-content max-content;
  max-width: 600px;
  width: 100%;
  gap: 26px;
`;

export const StyledHeader = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  gap: 5px;
`;

export const StyledH1 = styled.h1`
  font-size: ${theme.font.lg};
  font-weight: 600;
  color: ${theme.colors.text};
  letter-spacing: 2px;

  em {
    font-style: normal;
    color: ${theme.colors.primary};
  }
`;

export const StyledDate = styled.p`
  font-size: ${theme.font.md};
  margin-left: 28px;
  color: ${theme.colors.textDarker};
  letter-spacing: 1.5px;
`;

export const StyledResponsibilities = styled.div`
  width: 100%;
  padding-left: 7%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const StyledResponsibility = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  gap: 5px;
`;

export const StyledArrowIcon = styled(ArrowIcon)`
  font-size: ${theme.font.lg};
  margin-right: 4px;
  color: ${theme.colors.primary};
`;

export const StyledText = styled.p`
  font-size: ${theme.font.lg};
  font-weight: 400;
  letter-spacing: 1px;
  color: ${theme.colors.textDark};
`;
