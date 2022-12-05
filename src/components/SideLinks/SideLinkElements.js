import styled from 'styled-components';
import theme from './../../theme';

export const StyledSideLinkWrapper = styled.div`
    position: fixed;
    bottom: 0px;
    ${({side})=>(side==="right"?`
        right: max(calc((100% - ${theme.size.appMaxWidth}) / 2), 10px);
    `:`
        left: max(calc((100% - ${theme.size.appMaxWidth}) / 2), 10px);;
    `)}
    display: grid;
    grid-template-rows:repeat(2, max-content);
    justify-items:center ;
    gap:25px;
`;

export const StyledLinkContainer = styled.div`
    height: 100%;
    width: 32px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: ${theme.font.xl};
`;

export const StyledLink = styled.a`
    color: ${theme.colors.textDarker};
    font-size: ${theme.font.lg};
    writing-mode: vertical-rl;
    text-decoration: none;
    transition: all 200ms ease-in-out;
    :hover{
        color: ${theme.colors.text};
    }
`;
