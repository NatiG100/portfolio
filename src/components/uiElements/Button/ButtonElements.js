import styled from "styled-components";
import theme from "../../../theme";

export const StyledButton = styled.button`
    outline: none;
    border: 1px solid ${theme.colors.primary};
    border-radius: 5px;
    padding: 15px;
    padding-top: 12px;
    padding-bottom: 12px;
    transition: all 200ms ease-in-out;
    color: ${theme.colors.primary};
    font-size: ${theme.font.md};    
    background: none;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 500;
    cursor: pointer;
    :hover{
        background-color: #ffffff14;
    }
`;