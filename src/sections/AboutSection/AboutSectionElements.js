import styled from 'styled-components';
import theme from '../../theme';

export const StyledAboutSection = styled.section`
    width: 100%;
    display: grid;
    grid-template-rows:max-content 1fr ;
    grid-template-columns:1fr ;
    justify-content:center ;
    min-height: 100vh ;
    max-width: ${theme.size.appMaxWidth};
    margin-left: auto;
    margin-right: auto;
    padding: 4%;

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
    min-height: max-content;
    @media ${theme.breakPoints.device.laptop}{
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
`;
export const StyledP = styled.p`
    color: ${theme.colors.textDark};
    font-size: ${theme.font.lg};
    letter-spacing: 1px;
    font-weight: 300;
    @media ${theme.breakPoints.device.laptop}{
        text-align: center;
    }
    em{
        font-style: normal;
        color: ${theme.colors.primary};
    }
`;