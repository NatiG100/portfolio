import styled from 'styled-components';
import theme from '../../theme';

export const StyledLinks = styled.div`
    width: 100%;
    padding-bottom: 20px;
    display: none;
    @media ${theme.breakPoints.device.tablet}{
        display:block ;
    }
`;

export const StyledLinksWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    gap: 35px;
`;

export const StyledLink = styled.a`
    text-decoration: none;
    font-size:${theme.font.xl} ;
    color: ${theme.colors.textDarker};
    transition: all 200ms ease-in-out;
    :hover{
        color: ${theme.colors.primary};
    }
`;