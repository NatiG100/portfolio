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

import {useSpring, config} from 'react-spring';

const getBaseAnimation = (delay)=>{
  return (
    {
      to:{
        opacity:1,
        transform: "translateY(0px)",
      },
      from:{
        opacity:0,
        transform: "translateY(70px)",
      },
      config:config.gentle,
      delay
    }
  );
}

const HeroSection = ({data}) => {
  const animation = useSpring(getBaseAnimation(0));
  const animation2 = useSpring(getBaseAnimation(100));
  const animation3 = useSpring(getBaseAnimation(200));
  const animation4 = useSpring(getBaseAnimation(300));
  const animation5 = useSpring(getBaseAnimation(350));
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
            <StyledP style={animation}>Hi, my name is</StyledP>
            <StyledH style={animation2}><em>{data.name}</em></StyledH>
            <StyledH style={animation3}>{data.whatDoYouDo}</StyledH>
            <StyledAbout style={animation4}>
              {
                data.aboutYouBrief
              }
            </StyledAbout>
            <StyledButtonWrapper style={animation5}>
                <Button size='lg' onClick={scrolltoProjects}>view projects</Button>
            </StyledButtonWrapper>
        </StyledHeroSectionWrapper>
    </StyledHeroSection>
  )
}

export default HeroSection;