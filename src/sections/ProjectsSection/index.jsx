import React from 'react'
import ProjectCard from '../../components/ProjectCard';
import SectionTitle from './../../components/SectionTitle';

import {
    StyledProjectsSection,
    StyledProjectsSectionWrapper
} from './ProjectsSectionElemens';

const ProjectsSection = () => {
  return (
    <StyledProjectsSection>
        <SectionTitle title="My Projects"/>
        <StyledProjectsSectionWrapper>
            <ProjectCard
              title="A simple recepie React Application"
              description="This is my first react application. You can create a new user and post recepies. You can also view other people’s recipie"
              link="#"
              repo="#"
              techStack={["React", "Material UI", "GrapQL"]}
            />
            <ProjectCard
              title="A simple recepie React Application"
              description="This is my first react application. You can create a new user and post recepies. You can also view other people’s recipie"
              link="#"
              repo="#"
              techStack={["React", "Material UI", "GrapQL"]}
            />
            <ProjectCard
              title="A simple recepie React Application"
              description="This is my first react application. You can create a new user and post recepies. You can also view other people’s recipie"
              link="#"
              repo="#"
              techStack={["React", "Material UI", "GrapQL"]}
            />
            <ProjectCard
              title="A simple recepie React Application"
              description="This is my first react application. You can create a new user and post recepies. You can also view other people’s recipie"
              link="#"
              repo="#"
              techStack={["React", "Material UI", "GrapQL"]}
            />
            <ProjectCard
              title="A simple recepie React Application"
              description="This is my first react application. You can create a new user and post recepies. You can also view other people’s recipie"
              link="#"
              repo="#"
              techStack={["React", "Material UI", "GrapQL"]}
            />
            <ProjectCard
              title="A simple recepie React Application"
              description="This is my first react application. You can create a new user and post recepies. You can also view other people’s recipie"
              link="#"
              repo="#"
              techStack={["React", "Material UI", "GrapQL"]}
            />
            <ProjectCard
              title="A simple recepie React Application"
              description="This is my first react application. You can create a new user and post recepies. You can also view other people’s recipie"
              link="#"
              repo="#"
              techStack={["React", "Material UI", "GrapQL"]}
            />
            <ProjectCard
              title="A simple recepie React Application"
              description="This is my first react application. You can create a new user and post recepies. You can also view other people’s recipie"
              link="#"
              repo="#"
              techStack={["React", "Material UI", "GrapQL"]}
            />
        </StyledProjectsSectionWrapper>
    </StyledProjectsSection>
  )
}

export default ProjectsSection;