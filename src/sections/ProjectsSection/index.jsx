import React from 'react'
import ProjectCard from '../../components/ProjectCard';
import SectionTitle from './../../components/SectionTitle';

import {
    StyledProjectsSection,
    StyledProjectsSectionWrapper
} from './ProjectsSectionElemens';

const ProjectsSection = ({data=[]}) => {
  return (
    <StyledProjectsSection id="projects">
        <SectionTitle title="My Projects"/>
        <StyledProjectsSectionWrapper>
          {
            data.map((project, index)=>(
              <ProjectCard {...project} key={project.title} delay={index}/>
            ))
          }
        </StyledProjectsSectionWrapper>
    </StyledProjectsSection>
  )
}

export default ProjectsSection;