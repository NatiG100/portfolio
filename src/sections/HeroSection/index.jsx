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

const HeroSection = ({data}) => {
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
            <StyledH><em>{data.name}</em></StyledH>
            <StyledH>{data.whatDoYouDo}</StyledH>
            <StyledAbout>
              {
                data.aboutYouBrief
              }
            </StyledAbout>
            <StyledButtonWrapper>
                <Button size='lg' onClick={scrolltoProjects}>view projects</Button>
            </StyledButtonWrapper>
        </StyledHeroSectionWrapper>
    </StyledHeroSection>
  )
}

export default HeroSection;