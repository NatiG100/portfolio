import styled from "styled-components";
import theme from "../../theme";

export const StyledNavbar = styled.nav`
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

export const StyledNavItem = styled.a`
    font-size:${theme.font.md};
    text-transform:uppercase;
    color: ${theme.colors.textDark};
    font-weight: 600;
    text-decoration:none;
    letter-spacing: 1px;
    :active{
        color: ${theme.colors.text}
    }
    em{
        color: ${theme.colors.primary};
    }
`;