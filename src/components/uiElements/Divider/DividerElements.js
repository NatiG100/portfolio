import styled from 'styled-components';

export const StyledDivider = styled.div`
    ${({direction, width, height})=>(direction==="horizontal"?`
        border-top: 1px solid #fff2;
        width: ${width};
        height:0px;
    `:`
        border-left: 1px solid #fff4;
        height: ${height} ;
        width: 0px;
    `)}
`;