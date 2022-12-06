import styled from "styled-components";
import theme from "../../theme";

export const StyledFooter = styled.div`
    width: 100%;
    max-width: ${theme.size.appMaxWidth};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 80px;
    margin-left:auto;
    margin-right: auto;
`;

export const StyledFooterWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    position: relative;
    height: 50px;
    margin-left: auto;
    margin-right: auto;
`;

export const StyledTopLeft = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 40px;
    width: 10%;
    border-top: 2px solid #fff2;
    border-left: 2px solid #fff2;
`;

export const StyledBottomRight = styled.div`
    position: absolute;
    top: 100%;
    right: 0px;
    height: 40px;
    width: 10%;
    border-bottom: 2px solid #fff2;
    border-right: 2px solid #fff2;
`;

export const StyledFooterTextContainer = styled.div`
    width: 100%;
    height: max-content;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const StyledP = styled.p`
    color: ${theme.colors.textDark};
    letter-spacing: 2.5px;
    font-size: ${theme.font.md};
`;

export const StyledLink = styled.a`
    color: ${theme.colors.textDark};
    letter-spacing: 2.5px;
    font-size: ${theme.font.lg};
    color: ${theme.colors.text};
    svg{
        font-size: ${theme.font.xl};
    }
`;

