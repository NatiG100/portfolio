import styled from 'styled-components';
import theme from '../../theme';

export const StyledHeroSection = styled.section`
    margin-top: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: calc(100vh - 80px);
    min-height: 400px;
`;

export const StyledHeroSectionWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`;

export const StyledP = styled.p`
    color: ${theme.colors.primary};
    font-size: ${theme.font.lg};
    letter-spacing: 2px;
    font-weight: 500;
`;
export const StyledAbout = styled.p`
    color: ${theme.colors.textDark};
    font-size: ${theme.font.lg};
    font-weight: 300;
    text-align: center;
    text-overflow: wrap;
    white-space: pre-wrap;
    margin-top: 5px;
    max-width: 600px;
    letter-spacing: 0.5px;
    em{
        font-style: normal;
        color: ${theme.colors.primary};
    }
`;

export const StyledH = styled.h1`
    text-transform: capitalize;
    color: ${theme.colors.textDark};
    font-size: ${theme.font.xxl};
    letter-spacing: 2px;
    font-weight: 800;
    em{
        color: ${theme.colors.text};
        font-style: normal;
    }
`;

export const StyledButtonWrapper = styled.div`
    margin-top: 7%;
    margin-bottom: 7%;
    width: fit-content;
    height: fit-content;
`;