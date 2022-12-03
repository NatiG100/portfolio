import React from 'react';
import {
    StyledSkillContainer,
    StyledSkillLevel,
    StyledSkillLevelWrapper,
    StyledSkillTitle,
} from './SkillElements';

const Skill = ({title="Title", number="0", level=5}) => {
  return (
      <StyledSkillContainer>
          <StyledSkillTitle><em>#{number}</em> {title}</StyledSkillTitle>
          <StyledSkillLevelWrapper>
              <StyledSkillLevel level={level}/>
          </StyledSkillLevelWrapper>
      </StyledSkillContainer>
  )
}

export default Skill;