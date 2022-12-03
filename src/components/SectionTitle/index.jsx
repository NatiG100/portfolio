import React from 'react'
import Divider from '../uiElements/Divider';

import {
    StyledSectionTitle,
    StyledSectionTitleContainer
} from './SectionTitleElements';

const SectionTitle = ({title="Title"}) => {
  return (
      <StyledSectionTitleContainer>
          <Divider/>
          <StyledSectionTitle><em>#</em> {title}</StyledSectionTitle>
          <Divider/>
      </StyledSectionTitleContainer>
  )
}

export default SectionTitle;