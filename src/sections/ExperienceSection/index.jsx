import React, { useState } from 'react'
import ImageDisplay from '../../components/ImageDisplay';
import SectionTitle from './../../components/SectionTitle';
import {
    StyledArrowIcon,
    StyledDate,
    StyledExperienceSection,
    StyledH1,
    StyledHeader,
    StyledJobOverview,
    StyledResponsibilities,
    StyledResponsibility,
    StyledText,
    StyledWhereMenu,
    StyledExperienceSectionWrapper,
    StyledWhereMenuItem
} from './ExperienceSectionElements'

const ExperienceSection = ({data=[]}) => {
    const [selectedExperience, setSelectedExperience] = useState(data[0]);
  return (
      <StyledExperienceSection id="experience">
            <SectionTitle title='Experience'/>
            <StyledWhereMenu>
                {
                    data.map((experience)=>(
                        <StyledWhereMenuItem 
                            selected={experience.company===selectedExperience.company} 
                            onClick={()=>{setSelectedExperience(experience)}}
                            key={experience.company}
                        >
                            {experience.company}
                        </StyledWhereMenuItem>
                    ))
                }
            </StyledWhereMenu>
            <StyledExperienceSectionWrapper>
            <StyledJobOverview>
                <StyledHeader>
                    <StyledH1><em>#</em> {selectedExperience.jobTitle} <em>@{selectedExperience.company}</em></StyledH1>
                    <StyledDate>{selectedExperience.date}</StyledDate> 
                </StyledHeader>
                <StyledResponsibilities>
                    {selectedExperience.responsibilities.map((responsibility)=>(
                        <StyledResponsibility key={responsibility.id}>
                            <StyledArrowIcon/>
                            <StyledText>
                                {responsibility.paragraph}
                            </StyledText>
                        </StyledResponsibility>
                    ))}
                </StyledResponsibilities>
            </StyledJobOverview>
            <ImageDisplay img={selectedExperience.logo} dimension="150px"/>
          </StyledExperienceSectionWrapper>
      </StyledExperienceSection>
  )
}

export default ExperienceSection;