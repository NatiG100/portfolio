import styled from "styled-components";
import theme from "../../theme";

export const StyledContactSection = styled.section`
    padding-top: 6vh;
    width: 100%;
    display: grid;
    grid-template-rows:max-content max-content 1fr ;
    grid-template-columns:1fr ;
    justify-content:center ;
    min-height: 100vh;
    max-width: ${theme.size.appMaxWidth};
    margin-left: auto;
    margin-right: auto;
    padding-left: 6%;
    padding-right: 6%;
`;

export const StyledContactSectionWrapper = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: 5%;
`;

export const StyledH1 = styled.h1`
    color: ${theme.colors.text};
    font-size: ${theme.font.xl};
    letter-spacing: 1.5px;
`;
export const StyledP = styled.p`
    font-size: ${theme.font.md};
    color: ${theme.colors.textDark};
    letter-spacing: 1.5px;
    text-align: center;
`;