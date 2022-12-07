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
            data.map((project)=>(
              <ProjectCard {...project} key={project.title}/>
            ))
          }
        </StyledProjectsSectionWrapper>
    </StyledProjectsSection>
  )
}

export default ProjectsSection;