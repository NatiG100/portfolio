import styled from "styled-components";
import theme from "../../theme";
import {Link} from 'react-scroll'

export const StyledNavbar = styled.nav`
position:fixed;
top:0;
left:0;
right:0;
    width: 100%;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;

`;

export const StyledNavbarWrapper = styled.div`
    margin-left:auto;
    margin-right:auto;
    max-width: ${theme.size.appMaxWidth};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    svg{
        height: 80px;
        width: 80px;
    }
`;

export const StyledNavItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
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