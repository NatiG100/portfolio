import React, { useEffect, useInsertionEffect, useRef } from 'react'
import ImageDisplay from '../../components/ImageDisplay';
import SectionTitle from '../../components/SectionTitle';
import {
    StyledAboutSection,
    StyledAboutWrapper,
    StyledP
} from './AboutSectionElements';

import profile from './../../assets/img/profile.jpg';
import {useSpring, animated, config} from 'react-spring';
import useIsInviewPort from '../../hooks/useIsInViewPort';

const getBaseAnimation =(start, delay)=>{
  return (
    {
      from:{
        opacity: 0,
        transform: "translateX(-200px)",
      },
      to:{
        opacity: 1,
        transform: "translateX(0px)",
      },
      config: config.gentle,
      delay,
      pause: !start,
      reset:!start,
    }
  );
}

const AboutSection = ({data=""}) => {
  
  const sectionRef = useRef(null);
  const isIntersecting = useIsInviewPort(sectionRef);
  useEffect(()=>{
    console.log(isIntersecting);
  },[isIntersecting]);
  const animation1 = useSpring(getBaseAnimation(isIntersecting,0));
  const animation2 = useSpring(getBaseAnimation(isIntersecting,100));
  return (
      <StyledAboutSection id="about" >
          <SectionTitle title="About Me"/>
          <StyledAboutWrapper ref={sectionRef}>
              <StyledP style={animation2}>
                {data}
              </StyledP>
              <animated.div style={animation1}>
                <ImageDisplay img={profile} dimension="220px"/>
              </animated.div>
          </StyledAboutWrapper>
      </StyledAboutSection>
  )
}

export default AboutSection;