import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import Skill from '../../components/Skill';

import {
    StyledSkillSection,
    StyledSkillList
} from './SkillSectionElements';

const SkillSection = ({data}) => {
  return (
      <StyledSkillSection id="skills">
          <SectionTitle title="My Skills"/>
          <StyledSkillList>
              {data.map((skill)=>(
                <Skill level={skill.level} title={skill.title} number={skill.id} key={skill.id}/>
              ))}
          </StyledSkillList>
      </StyledSkillSection>
  )
}

export default SkillSection