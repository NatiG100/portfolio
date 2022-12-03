import styled from 'styled-components';
import theme from '../../theme';

export const StyledAboutSection = styled.section`
    padding-top: 6vh;
    width: 100%;
    display: grid;
    grid-template-rows:max-content 1fr ;
    justify-content:center ;
    height: calc(100vh - 80px);
    min-height: 400px;
`;

export const StyledAboutWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    display:flex;
    align-items: center;
    justify-content: center;
    gap: 15%;
`;
export const StyledP = styled.p`
    color: ${theme.colors.textDark};
    font-size: ${theme.font.md};
    letter-spacing: 2px;
    em{
        font-style: normal;
        color: ${theme.colors.primary};
    }
`;