import React from "react";
import SectionTitle from "./../../components/SectionTitle";
import {
  StyledExperienceSection,
  StyledExperienceTimelineWrapper,
} from "./ExperienceSectionElements";

import Timeline from "../../components/timeline/Timeline";
import timelineProps from "./TimelineAdapter";
import branchIcon from "./branch-icon.svg";

const ExperienceSection = ({ data = [] }) => {
  return (
    <StyledExperienceSection id="experience">
      <SectionTitle title="MyExperience" />
      <StyledExperienceTimelineWrapper>
        <Timeline branchImageSrc={branchIcon} data={timelineProps} />
      </StyledExperienceTimelineWrapper>
    </StyledExperienceSection>
  );
};

export default ExperienceSection;
