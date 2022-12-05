import styled from "styled-components";
import theme from './../../theme';
import {VscProject} from 'react-icons/vsc'

export const StyledProjectCard = styled.div`
    width: 100%;
    max-width: 400px;
    padding: 30px;
    border-radius: 8px;
    background-color: ${theme.colors.surface};
    display: grid;
    grid-template-rows: max-content 1fr;
    gap: 9%;
    height: 290px;
    transition: all 200ms ease-in-out;
    :hover{
        transform: scale(1.03);
        box-shadow:0px 6px 8px #0008;
    }
    :hover .title{
        color: ${theme.colors.primary};
    }
`;

export const StyledProjectCardHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const StyledProjectCardIcon = styled(VscProject)`
    font-size: ${theme.font.xml};
    color: ${theme.colors.primary};
`;

export const StyledProjectCardMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: max-content;
`;

export const StyledProjectLink = styled.a`
    text-decoration: none;
    svg{
        font-size: ${theme.font.anotherlg};
        color: ${theme.colors.textDark};
        transition: all 200ms ease-in-out;
        :hover{
            color: ${theme.colors.text};
        }
    }
`;

export const StyledProjectCardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    align-items: flex-start;
`;

export const StyledH1 = styled.h1`
    font-size: ${theme.font.lg};
    font-weight: 600;
    letter-spacing: 2px;
    color: ${theme.colors.text};
    transition: all 200ms ease-in-out;

    overflow:hidden;
    text-overflow: ellipsis;
    display: -webkit-box !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
`;

export const StyledP = styled.p`
    font-size: ${theme.font.md};
    letter-spacing: 1.5px;
    font-weight: 400;
    color: ${theme.colors.textDark};

    overflow:hidden;
    text-overflow: ellipsis;
    display: -webkit-box !important;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    white-space: normal;
`;
export const StyledTechStack = styled.div`
    width: 100%;
    overflow-y: auto;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10%;
`;
export const StyledTech = styled.div`
    font-size: ${theme.font.md};
    font-weight: 400;
    font-family: monospace;
    color: ${theme.colors.textDark};
    white-space: nowrap;
`;