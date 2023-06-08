import styled from "styled-components";
import theme from "../../theme";

export const StyledProjectsSection = styled.section`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-rows:max-content 1fr ;
    min-height: 100vh;
    max-width: ${theme.size.appMaxWidth};
    margin-left: auto;
    margin-right: auto;
    padding-left: 6%;
    padding-right: 6%;
    padding-top: 50px;
    padding-bottom: 50px;
    overflow:hide ;
`;

export const StyledProjectsSectionWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 45px;
    justify-items:center ;
    height:max-content ;
    padding-top: max(30px, 10%);
    padding-bottom: max(30px, 10%);
    @media ${theme.breakPoints.device.laptop}{
        grid-template-columns: 1fr 1fr;
    }
    @media ${theme.breakPoints.device.tablet}{
        grid-template-columns: 1fr;
    }
`;