import React from 'react'
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

const ProjectCard = ({
    link, 
    repo, 
    title,
    description,
    techStack = []
}) => {
  return (
    <StyledProjectCard>
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