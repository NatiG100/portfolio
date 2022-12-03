import React from 'react'
import ImageDisplay from '../../components/ImageDisplay';
import SectionTitle from '../../components/SectionTitle';
import {
    StyledAboutSection,
    StyledAboutWrapper,
    StyledP
} from './AboutSectionElements';

import profile from './../../assets/img/profile.jpg'

const AboutSection = () => {
  return (
      <StyledAboutSection id="about">
          <SectionTitle title="About Me"/>
          <StyledAboutWrapper>
              <StyledP>
                Hello! My name is Natnael and I enjoy building web applications. 
                I am <em>React Developer</em> with hands-on experience in identifying web-based user 
                interactions alongwith designing & implementing <em>highly responsive</em> 
                user interface components by deploying React concepts.<br/><br/>
                Proficient in translating designs & wireframes 
                into high-quality code, and writing application interface code via 
                <em> Javascriptand ReactJS workflows</em>. Adept at monitoring & <em>maintaining 
                frontend performance and troubleshooting & debugging</em> the same 
                to bolster overall performance.
              </StyledP>
              <ImageDisplay img={profile} dimension="280px"/>
          </StyledAboutWrapper>
      </StyledAboutSection>
  )
}

export default AboutSection;