import React from 'react'
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
    StyledWhereMenuItem
} from './ExperienceSectionElements'

const ExperienceSection = () => {
  return (
      <StyledExperienceSection id="experience">
          <SectionTitle title='Experience'/>
          <StyledWhereMenu>
              <StyledWhereMenuItem selected="true">INSA</StyledWhereMenuItem>
              <StyledWhereMenuItem>2F CAPITAL</StyledWhereMenuItem>
              <StyledWhereMenuItem>TECHAWKS</StyledWhereMenuItem>
          </StyledWhereMenu>
          <StyledJobOverview>
              <StyledHeader>
                  <StyledH1><em>#1</em> Software Developer <em>@INSA</em></StyledH1>
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
      </StyledExperienceSection>
  )
}

export default ExperienceSection;