import styled from 'styled-components';
import theme from '../../theme';

export const StyledAboutSection = styled.section`
    padding-top: 6vh;
    width: 100%;
    display: grid;
    grid-template-rows:max-content 1fr ;
    grid-template-columns:1fr ;
    justify-content:center ;
    height: calc(100vh - 80px);
    min-height: 400px;
    max-width: ${theme.size.appMaxWidth};
    margin-left: auto;
    margin-right: auto;
    padding-left: 6%;
    padding-right: 6%;
`;

export const StyledAboutWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    max-width: 800px;
    display:grid;
    grid-template-columns:1fr max-content ;
    align-items: center;
    justify-content: center;
`;
export const StyledP = styled.p`
    color: ${theme.colors.textDark};
    font-size: ${theme.font.lg};
    letter-spacing: 2px;
    font-weight: 300;
    em{
        font-style: normal;
        color: ${theme.colors.primary};
    }
`;