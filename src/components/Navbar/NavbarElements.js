import styled from "styled-components";
import theme from "../../theme";
import {Link} from 'react-scroll';

export const StyledNavbar = styled.nav`
position:fixed;
    top:0;
    left:0;
    right:0;
    width: 100%;
    height: 80px;
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
    background-color:${theme.colors.background}de ;
    backdrop-filter: blur(8px);
    ${({showShadow})=>(!showShadow&&"box-shadow: 0px 6px 20px #00000099;")}
    z-index: 1000;
    transition: all 100ms ease-out;
    ${({show})=>(show?"":"margin-top:-80px;")}
`;

export const StyledNavbarWrapper = styled.div`
    margin-left:auto;
    margin-right:auto;
    max-width: ${theme.size.appMaxWidth};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    svg{
        height: 65px;
        width: 65px;
        cursor: pointer;
    }
`;

export const StyledNavItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    @media ${theme.breakPoints.device.laptop}{
        display: none;
    }
`;

export const StyledMenu = styled.button`
    border: none;
    outline: none;
    background-color: #fff0;
    svg{
        height: 45px;
        color: ${theme.colors.primary};
    };
    display: none;
    @media ${theme.breakPoints.device.laptop}{
        display: block;
    }
`;

export const StyledNavItem = styled(Link)`
    font-size:${theme.font.md};
    text-transform:uppercase;
    color: ${theme.colors.textDark};
    font-weight: 600;
    text-decoration:none;
    letter-spacing: 1px;
    cursor: pointer;
    &.activeNavItem{
        color: ${theme.colors.text};
    }
    em{
        color: ${theme.colors.primary};
    }
`;
