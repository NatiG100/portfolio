import React from 'react'
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
            <p> Styled Project</p>
            <p> Styled Project</p>
            <p> Styled Project</p>
            <p> Styled Project</p>
            <p> Styled Project</p>
            <p> Styled Project</p>
            <p> Styled Project</p>
            <p> Styled Project</p>
        </StyledProjectsSectionWrapper>
    </StyledProjectsSection>
  )
}

export default ProjectsSection;