import React, { useRef } from 'react'
import {FaLink, FaGithub} from 'react-icons/fa'
import {
  StyledH1,
  StyledP,
  StyledProjectCard,
  StyledProjectCardBody,
  StyledProjectCardHeader,
  StyledProjectCardIcon,
  StyledProjectCardMenu,
  StyledProjectLink,
  StyledStepScroller,
  StyledTech,
  StyledTechStack,
  StyledTechStackWrapper
} from "./ProjectCardelements"

import {useSpring, config} from 'react-spring';
import useIsInviewPort from '../../hooks/useIsInViewPort';
import { useEffect } from 'react';
import useScroll from '../../hooks/useScroll';

const ProjectCard = ({
    link, 
    repo, 
    title,
    description,
    techStack = [],
    delay
}) => {
  const projectRef = useRef(null);
  const isInView = useIsInviewPort(projectRef);
  const [animation, api] = useSpring(()=>({
    from:{
      y:120,
      opacity:0,
      config:config.wobbly
    },
  }));
  useEffect(()=>{
    if(isInView){
      api({y:0,opacity:1});

      return ()=>{
        api({y:120,opacity:0});
      }
    }
  },[isInView,api]);
  const scrollRef = useRef(null);
  const {end,start,moveLeft,moveRight} = useScroll({ref:scrollRef,amount:50});
  return (
    <StyledProjectCard ref={projectRef} style={animation}>
        <StyledProjectCardHeader>
            <StyledProjectCardIcon/>
            <StyledProjectCardMenu>
                {link&&<StyledProjectLink href={link}><FaLink/></StyledProjectLink>}
                {repo&&<StyledProjectLink href={repo}><FaGithub/></StyledProjectLink>}
            </StyledProjectCardMenu>
        </StyledProjectCardHeader>
        <StyledProjectCardBody>
          <StyledH1 className='title'>{title}</StyledH1>
          <StyledP>{description}</StyledP>
            <StyledTechStack>
              {!start&&<StyledStepScroller position="left" onClick={moveRight}>{'<'}</StyledStepScroller>}
              {!end&&<StyledStepScroller position="right" onClick={moveLeft}>{'>'}</StyledStepScroller>}
              <StyledTechStackWrapper className='hide-scroll' ref={scrollRef}>
                {
                techStack.map((tech)=>(
                  <StyledTech key={tech}>{tech}</StyledTech>
                  ))
                }
              </StyledTechStackWrapper>
            </StyledTechStack>
          </StyledProjectCardBody>
    </StyledProjectCard>
  )
}

export default ProjectCard;