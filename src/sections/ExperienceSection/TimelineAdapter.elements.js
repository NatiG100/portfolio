import styled from "styled-components";
import theme from "../../theme";

export const StyledTimelineAdapterHeader = styled.p`
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

export const StyledTImelineAdapterCard = styled.div`
  border: 1px solid #303034;
  background-color: ${theme.colors.surface};
  margin-top: 20px;
  padding: 20px;
  border-radius: 12px;
`;
export const StyledTimelineAdapterCardParagraph = styled.div`
  color: ${theme.colors.textDark};
`;
export const StyledTimelineAdapterCardTitle = styled.div`
  margin-bottom: 10px;
  color: ${theme.colors.text};
  font-size: 14px;
  font-weight: bold;
`;

export const StyledTimelineAdapterTime = styled.p`
  color: ${theme.colors.textDark};
`;

export const HiddenOnTablet = styled.span`
  display: inline-block;

  @media (${theme.breakPoints.device.tablet}) {
    display: none;
  }
`;
