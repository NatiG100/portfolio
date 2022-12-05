import React from 'react'
import Button from './../../components/uiElements/Button';
import {scroller} from 'react-scroll';

import {
    StyledButtonWrapper,
    StyledH,
    StyledHeroSection,
    StyledHeroSectionWrapper,
    StyledP,
    StyledAbout,
} from './HeroSectionElements';

const HeroSection = () => {
  const scrolltoProjects = ()=>{
    scroller.scrollTo(
      "projects",
      {
        smooth:true,
      }
    );
  }
  return (
    <StyledHeroSection>
        <StyledHeroSectionWrapper>
            <StyledP>Hi, my name is</StyledP>
            <StyledH><em>natnael gashu</em></StyledH>
            <StyledH>I build web applications</StyledH>
            <StyledAbout>
            React Developer with hands-on experience in identifying web-based user 
            interactions along with designing & implementing highly-responsive 
            user interface components by deploying <em>React concepts</em>. 
            </StyledAbout>
            <StyledButtonWrapper>
                <Button size='lg' onClick={scrolltoProjects}>view projects</Button>
            </StyledButtonWrapper>
        </StyledHeroSectionWrapper>
    </StyledHeroSection>
  )
}

export default HeroSection;