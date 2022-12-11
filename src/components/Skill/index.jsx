import React, { useRef } from 'react';
import {
    StyledSkillContainer,
    StyledSkillLevel,
    StyledSkillLevelWrapper,
    StyledSkillTitle,
} from './SkillElements';

import {useSpring, config} from 'react-spring';
import useIsInviewPort from '../../hooks/useIsInViewPort';

const Skill = ({title="Title", number="0", level=5}) => {
    const skillRef = useRef(null);
    const isIntersecting = useIsInviewPort(skillRef);
    const animation = useSpring({
        from:{
            opacity: 0,
            transform:"translateY(50px)",
        },
        to:{
            opacity: 1,
            transform:"translateY(0px)",
        },
        reset: !isIntersecting,
        pause: !isIntersecting,
    })
    return (
      <StyledSkillContainer ref={skillRef} style={animation}>
          <StyledSkillTitle><em>#{number}</em> {title}</StyledSkillTitle>
          <StyledSkillLevelWrapper>
              <StyledSkillLevel level={level}/>
          </StyledSkillLevelWrapper>
      </StyledSkillContainer>
  )
}

export default Skill;