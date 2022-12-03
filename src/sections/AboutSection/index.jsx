import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import {
    StyledAboutSection,
    StyledAboutWrapper,
    StyledP
} from './AboutSectionElements';

const AboutSection = () => {
  return (
      <StyledAboutSection id="about">
          <SectionTitle title="About Me"/>
          <StyledAboutWrapper>
              <StyledP>
                Hello! My name is Natnael and I enjoy building web applications. 
                I am React Developer with hands-on experience in identifying web-based user 
                interactions alongwith designing & implementing highly responsive 
                user interface components by deploying React concepts.<br/>
                Proficient in translating designs & wireframes 
                into high-quality code, and writing application interface code via 
                Javascriptand ReactJS workflows. Adept at monitoring & maintaining 
                frontend performance and troubleshooting & debugging the same 
                to bolster overall performance.
              </StyledP>
              <p>image Placeholder</p>
          </StyledAboutWrapper>
      </StyledAboutSection>
  )
}

export default AboutSection;