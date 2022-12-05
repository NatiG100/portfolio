import styled from "styled-components";
import theme from "../../theme";

export const StyledProjectsSection = styled.section`
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

export const StyledProjectsSectionWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 4%;
    min-height: 100%;
    padding-top: max(30px, 10%);
    padding-left: max(15px, 3%);
    padding-right: max(15px, 3%);
`;