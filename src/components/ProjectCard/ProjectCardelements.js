import styled from "styled-components";
import theme from "./../../theme";
import { VscProject } from "react-icons/vsc";
import { animated } from "react-spring";

export const StyledProjectCard = styled(animated.div)`
  overflow: hidden;
  width: 100%;
  border-radius: 8px;
  background-color: ${theme.colors.surface};
  display: grid;
  grid-template-rows: max-content max-content 1fr;
  gap: 9%;
  height: 200px;
  transition: scale 200ms ease-in-out, color 200ms ease-in-out;
  :hover {
    scale: 1.05;
    box-shadow: 0px 6px 8px #0008;
  }
  :hover .title {
    color: ${theme.colors.primary};
  }
`;

export const StyledProjectCardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledCardImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    background: linear-gradient(to bottom, #15171f44 99%, #15171f 100%);
  }
  &:hover::after {
    background: linear-gradient(to bottom, #15171f00 99%, #15171f 100%);
  }
`;

export const StyledCardWrapper = styled.div`
  padding: 20px 20px;
`;

export const StyledProjectCardIcon = styled(VscProject)`
  font-size: ${theme.font.xml};
  color: ${theme.colors.primary};
`;

export const StyledProjectCardMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: max-content;
`;

export const StyledProjectLink = styled.a`
  text-decoration: none;
  svg {
    font-size: ${theme.font.anotherlg};
    color: ${theme.colors.textDark};
    transition: all 200ms ease-in-out;
    :hover {
      color: ${theme.colors.text};
    }
  }
`;

export const StyledProjectCardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  align-items: flex-start;
  box-sizing: border-box;
  width: 100%;
`;

export const StyledH1 = styled.h1`
  font-size: ${theme.font.lg};
  font-weight: 600;
  letter-spacing: 2px;
  color: ${theme.colors.text};
  transition: all 200ms ease-in-out;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
`;

export const StyledP = styled.p`
  font-size: ${theme.font.md};
  letter-spacing: 1px;
  font-weight: 400;
  color: ${theme.colors.textDark};

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box !important;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
`;
export const StyledTechStack = styled.div`
  width: 100%;
  position: relative;
  display: grid;
`;
export const StyledTechStackWrapper = styled.div`
  overflow-y: auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8%;
  scrollbar-width: none;
  transition: all 200ms ease-in-out;
`;
export const StyledStepScroller = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 40px;
  background: linear-gradient(
    ${({ position }) => (position === "left" ? "to right" : "to left")},
    ${theme.colors.surface} 70%,
    ${theme.colors.surface}22
  );
  ${({ position }) => (position === "left" ? "left:-1px;" : "right:-1px;")};
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #777;
  cursor: pointer;
  font-size: 10px;
  :hover {
    color: white;
  }
`;
export const StyledTech = styled.div`
  font-size: ${theme.font.md};
  font-weight: 400;
  font-family: monospace;
  color: ${theme.colors.textDark};
  white-space: nowrap;
`;
