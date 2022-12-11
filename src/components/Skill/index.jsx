import React, { useRef } from 'react';
import {
    StyledSkillContainer,
    StyledSkillLevel,
    StyledSkillLevelWrapper,
    StyledSkillTitle,
} from './SkillElements';

import {useSpring, config} from 'react-spring';
import useIsInviewPort from '../../hooks/useIsInViewPort';
import { useEffect } from 'react';

const Skill = ({title="Title", number="0", level=5}) => {
    const skillRef = useRef(null);
    const isIntersecting = useIsInviewPort(skillRef);
    const [animation,api] = useSpring(()=>({
        from:{
            y:50,
            opacity: 0,
        }
    }));

    useEffect(()=>{
        if(isIntersecting){
            api({
                y:0,
                opacity:1,
            });
        }
        return ()=>{
            api({
                y:50,
                opacity:0,
            });
        }
    },[isIntersecting, api])
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