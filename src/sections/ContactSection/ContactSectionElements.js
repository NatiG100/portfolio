import styled from "styled-components";
import theme from "../../theme";
import {animated} from 'react-spring';

export const StyledContactSection = styled.section`
    width: 100%;
    display: grid;
    grid-template-rows:max-content  1fr ;
    grid-template-columns:1fr ;
    justify-content:center ;
    min-height: 100vh;
    max-width: ${theme.size.appMaxWidth};
    margin-left: auto;
    margin-right: auto;
    padding-left: 6%;
    padding-right: 6%;
`;

export const StyledContactSectionWrapper = styled.div`
    width: 100%;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    height: max-content;
    margin-top:auto;
    margin-bottom: auto;
`;

export const StyledH1 = styled(animated.h1)`
    color: ${theme.colors.text};
    font-size: ${theme.font.xxl};
    letter-spacing: 1px;
    white-space: nowrap;
    text-align: center;
    @media ${theme.breakPoints.device.tablet}{
        font-size:${theme.font.xml} ;
    }
`;
export const StyledP = styled(animated.p)`
    font-size: ${theme.font.lg};
    color: ${theme.colors.textDark};
    letter-spacing: 1.5px;
    text-align: center;
    @media ${theme.breakPoints.device.tablet}{
        font-size: ${theme.font.md};
    }
`;