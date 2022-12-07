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

import  insa from './../../assets/img/profile.jpg'

const ExperienceSection = () => {
    const experiences= ["INSA","2F CAPITAL", "TECHAWKS"];
    const [selectedCompany, setSelectedCompany] = useState("INSA");
  return (
      <StyledExperienceSection id="experience">
            <SectionTitle title='Experience'/>
            <StyledWhereMenu>
                {
                    experiences.map((experience)=>(
                        <StyledWhereMenuItem selected={experience===selectedCompany} onClick={()=>{setSelectedCompany(experience)}}>{experience}</StyledWhereMenuItem>
                    ))
                }
            </StyledWhereMenu>
            <StyledExperienceSectionWrapper>
            <StyledJobOverview>
                <StyledHeader>
                    <StyledH1><em>#1</em> Software Developer <em>@{selectedCompany}</em></StyledH1>
                    <StyledDate>July - December 2015</StyledDate> 
                </StyledHeader>
                <StyledResponsibilities>
                    <StyledResponsibility>
                        <StyledArrowIcon/>
                        <StyledText>
                            Follow Microservice architecture in order to implement highly 
                            reusable and highly performant web and mobile applications.
                        </StyledText>
                    </StyledResponsibility>
                    <StyledResponsibility>
                        <StyledArrowIcon/>
                        <StyledText>
                            Follow Microservice architecture in order to implement highly 
                            reusable and highly performant web and mobile applications.
                        </StyledText>
                    </StyledResponsibility>
                    <StyledResponsibility>
                        <StyledArrowIcon/>
                        <StyledText>
                            Follow Microservice architecture in order to implement highly 
                            reusable and highly performant web and mobile applications.
                        </StyledText>
                    </StyledResponsibility>
                </StyledResponsibilities>
            </StyledJobOverview>
            <ImageDisplay img={insa} dimension="150px"/>
          </StyledExperienceSectionWrapper>
      </StyledExperienceSection>
  )
}

export default ExperienceSection;