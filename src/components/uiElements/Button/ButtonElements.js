import styled from "styled-components";
import theme from "../../../theme";

export const StyledButton = styled.button`
    outline: none;
    border: 1px solid ${theme.colors.primary};
    border-radius: 5px;
    padding: ${({size})=>(size==='lg'?"25px":"15px")};
    padding-top: ${({size})=>(size==='lg'?"15px":"12px")};
    padding-bottom: ${({size})=>(size==='lg'?"15px":"12px")};;
    transition: all 200ms ease-in-out;
    color: ${theme.colors.primary};
    font-size: ${({size})=>(size==='lg'?theme.font.lg:theme.font.md)};    
    background: none;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 500;
    cursor: pointer;
    :hover{
        background-color: #ffffff14;
    }
`;