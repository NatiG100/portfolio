import React from 'react'
import { data } from '../../assets/data/data';
import SectionTitle from '../../components/SectionTitle'
import Skill from '../../components/Skill';

import {
    StyledSkillSection,
    StyledSkillList
} from './SkillSectionElements';

const SkillSection = () => {
  return (
      <StyledSkillSection id="skills">
          <SectionTitle title="My Skills"/>
          <StyledSkillList>
              {data.skills.map((skill)=>(
                <Skill level={skill.level} title={skill.title} number={skill.id} key={skill.id}/>
              ))}
          </StyledSkillList>
      </StyledSkillSection>
  )
}

export default SkillSection