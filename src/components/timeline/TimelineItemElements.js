import styled from "styled-components";
import theme from "../../theme";

export const StyledTimelineContainer = styled.div`
  border-left: ${({ last }) =>
    last ? "transparent solid 3px" : `${theme.colors.primary} solid 3px`};
  position: relative;
  padding: 25px;
`;

export const StyledTimelineCircle = styled.div`
  position: absolute;
  top: 0;
  left: -7px;
  background-color: ${theme.colors.text};
  height: 12px;
  width: 12px;
  border-radius: 100%;
  box-shadow: 0px 0px 12px ${theme.colors.primary};
`;
export const StyledTimelineBranch = styled.img`
  position: absolute;
  top: 12px;
  left: -2px;
  width: 19px;
  height: auto;
`;

export const StyledTimelineTime = styled.div`
  position: absolute;
  top: 0px;
  left: 15px;
`;

export const StyledTimelineContent = styled.div``;
export const StyledTimelineHeader = styled.p`
  color: ${theme.colors.text};
  font-weight: bold;
`;
