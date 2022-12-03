import styled from 'styled-components';
import theme from '../../theme';

export const StyledSkillSection = styled.section`
    padding-top: 6vh;
    width: 100%;
    display: grid;
    grid-template-rows:max-content 1fr ;
    grid-template-columns:1fr ;
    justify-content:center ;
    align-items:center ;
    height: calc(100vh - 80px);
    min-height: 400px;
    max-width: ${theme.size.appMaxWidth};
    margin-left: auto;
    margin-right: auto;
    padding-left: 6%;
    padding-right: 6%;
`;

export const StyledSkillList = styled.div`
    width: 100%;
    max-width:700px ;
    margin-left:auto ;
    margin-right: auto;
    display: flex;
    flex-direction:column ;
    gap: 25px;
`;

