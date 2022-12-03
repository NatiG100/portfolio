import styled from 'styled-components';
import theme from '../../theme';


export const StyledSectionTitleContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    gap: 20px;
    align-items: center;
`;

export const StyledSectionTitle = styled.h3`
    font-size:${theme.font.xl} ;
    color: ${theme.colors.text};
    letter-spacing: 2px;
    em{
        font-style: normal;
        color: ${theme.colors.primary};
    }
`;