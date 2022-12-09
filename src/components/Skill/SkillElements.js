import styled from 'styled-components';
import theme from '../../theme';

export const StyledSkillContainer = styled.div`
    display:grid;
    grid-template-columns:180px 1fr ;
    align-items: center;
    gap: 3%;
    width: 100%;
    @media ${theme.breakPoints.device.tablet}{
        grid-template-columns:125px 1fr ;
    }
`;

export const StyledSkillTitle = styled.p`
    font-size:${theme.font.lg} ;
    font-weight: 500;
    color: ${theme.colors.text};
    letter-spacing:3px ;
    em{
        font-style:normal;
        color: ${theme.colors.primary};
    }
    @media ${theme.breakPoints.device.tablet}{
        letter-spacing: 1.5px;
        font-size:1em;
    }
`;

export const StyledSkillLevelWrapper = styled.div`
    width: 100%;
    height: 18px;
    border-radius: 3px;
    background-color:#ffffff10 ;
    display:flex ;
    justify-content:flex-start ;
`;

export const StyledSkillLevel = styled.div`
    height:100% ;
    border-radius: 3px;
    background-color:${({level})=>(level===5?"#00E0FF":level===4?"#66FF63":"#EDFF7E")} ;
    width:calc(${({level})=>(level)} * 20%);
`;