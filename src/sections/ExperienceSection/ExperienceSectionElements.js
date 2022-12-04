import styled from 'styled-components';
import theme from '../../theme';
import {AiFillCaretRight as ArrowIcon} from 'react-icons/ai'

export const StyledExperienceSection = styled.section`
    margin-top: 80px;
    width: 100%;
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: flex-end;
    height: calc(100vh - 80px);
    min-height: 400px;
`;

export const StyledWhereMenu = styled.div`
    width: max-content;
    max-width:100% ;
    overflow-x: auto;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    gap: 0px;
`;
export const StyledWhereMenuItem = styled.button`
    outline: none;
    background-color:${theme.colors.primary}${({selected})=>(!selected&&"77")} ;
    color: ${theme.colors.background};
    border-radius: 5px;
    font-size:${theme.font.lg} ;
    letter-spacing:2px ;
    height: 40px;
    padding-left:20px ;
    padding-right:20px ;
    font-weight:600 ;
    border: none;
    border-radius:0 ;
`;
export const StyledJobOverview = styled.div`
    display:grid ;
    grid-template-rows: max-content max-content;
    max-width: 600px;
    width: 100%;
    gap: 15px;
`;

export const StyledHeader = styled.div`
    display: grid;
    grid-template-rows:max-content max-content ;
    gap: 5px;
`;

export const StyledH1 = styled.h1`
    font-size:${theme.font.lg} ;
    font-weight:600 ;
    color: ${theme.colors.text};
    letter-spacing:2px ;

    em{
        font-style: normal;
        color: ${theme.colors.primary};
    }
`;

export const StyledDate = styled.p`
    font-size:${theme.font.sm} ;
    color: ${theme.colors.textDarker};
    letter-spacing: 1.5px;
`;

export const StyledResponsibilities = styled.div`
    width: 100%;
    padding-left:10% ;
    display: flex;
    flex-direction:column ;
    gap: 20px;
`;

export const StyledResponsibility = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 5px;
`;

export const StyledArrowIcon = styled(ArrowIcon)`
    font-size:${theme.font.xl} ;
    color: ${theme.colors.primary};
`;

export const StyledText = styled.p`
    font-size:${theme.font.lg} ;
    font-weight:600 ;
    letter-spacing: 2px;
    color: ${theme.colors.textDark};
`;



