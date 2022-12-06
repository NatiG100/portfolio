import styled from "styled-components";
import theme from "../../theme";

export const StyledContactSection = styled.section`
    padding-top: 6vh;
    width: 100%;
    display: grid;
    grid-template-rows:max-content  1fr ;
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
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 3%;
`;

export const StyledH1 = styled.h1`
    color: ${theme.colors.text};
    font-size: ${theme.font.xxl};
    letter-spacing: 1px;
    white-space: nowrap;
    text-align: center;
`;
export const StyledP = styled.p`
    font-size: ${theme.font.lg};
    color: ${theme.colors.textDark};
    letter-spacing: 1.5px;
    text-align: center;
`;