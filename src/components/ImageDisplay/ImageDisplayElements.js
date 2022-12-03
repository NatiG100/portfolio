import styled from 'styled-components';
import theme from '../../theme';

export const StyledImageDisplay = styled.div`
    height:${({dimension})=>(dimension)};
    width:${({dimension})=>(dimension)};
    position: relative;
    :hover div{
        bottom: 3%;
    }
    :hover span{
        opacity:0 ;
    }
`;

export const StyledImageBorder = styled.div`
    position: absolute;
    right: calc(4%);
    bottom: 0px;
    height:92% ;
    width: 92%;
    border: 1px solid ${theme.colors.primary};
    border-radius:100% ;
    transition: all 200ms ease-in-out;
`;
export const StyledImage = styled.img`
    position: absolute;
    top: 0px;
    right: calc(4%);
    height:92% ;
    width: 92%;
    border-radius:100% ;
    object-fit:cover ;
`;

export const StyledImageOverlay = styled.span`
    position: absolute;
    top: 0px;
    right: calc(4%);
    height:92% ;
    width: 92%;
    border-radius:100% ;
    background-color:${theme.colors.primary}44 ;
    transition: all 200ms ease-in-out;
`;