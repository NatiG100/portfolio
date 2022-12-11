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

const getBaseAnimation =(delay)=>{
  return ()=>(
    {
      from:{
        opacity: 0,
        x:-200
      },
      config: config.gentle,
      delay,
    }
  );
}

const AboutSection = ({data=""}) => {
  
  const sectionRef = useRef(null);
  const isIntersecting = useIsInviewPort(sectionRef);
  const [animation1, api1] = useSpring(getBaseAnimation(0));
  const [animation2, api2] = useSpring(getBaseAnimation(100));
  useEffect(()=>{
    if(isIntersecting){
      api1({opacity: 1,x:0,});
      api2({opacity: 1,x:0,delay:100});

      return ()=>{
        api1({opacity: 0,x:-200});
        api2({opacity: 0,x:-200,});
    }
    }
  },[isIntersecting,api1, api2]);
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