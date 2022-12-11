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
  StyledTech,
  StyledTechStack
} from "./ProjectCardelements"

import {useSpring, config} from 'react-spring';
import useIsInviewPort from '../../hooks/useIsInViewPort';
import { useEffect } from 'react';

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
  },[isInView,api])
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
              {techStack.map((tech)=>(
                <StyledTech key={tech}>{tech}</StyledTech>
                ))}
            </StyledTechStack>
          </StyledProjectCardBody>
    </StyledProjectCard>
  )
}

export default ProjectCard;