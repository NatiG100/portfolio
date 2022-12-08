import styled from "styled-components";
import theme from "../../theme";

export const StyledNavigation = styled.nav`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100vw;
    background-color: ${theme.colors.background};
    overflow-y: auto;
    display: flex;
    justify-content: flex-start;
    justify-content: center;
    padding-top: 5%;
    z-index: 2000;
    transition: all 400ms ease-in-out;
    margin-top:${({show})=>(show?"0":"-100%")};
    opacity:${({show})=>(show?"1":"0")}; ;
`;

export const StyledNavigationWrap = styled.div`
    height: max-content;
    width: 94%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;


