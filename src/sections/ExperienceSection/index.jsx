import React, { useState } from "react";
import { useRef } from "react";
import ImageDisplay from "../../components/ImageDisplay";
import SectionTitle from "./../../components/SectionTitle";
import {
  StyledArrowIcon,
  StyledDate,
  StyledExperienceSection,
  StyledH1,
  StyledHeader,
  StyledJobOverview,
  StyledResponsibilities,
  StyledResponsibility,
  StyledText,
  StyledWhereMenu,
  StyledExperienceSectionWrapper,
  StyledWhereMenuItem,
  StyledStepScroller,
  StyledWhereMenuWrapper,
} from "./ExperienceSectionElements";

import useIsInViewPort from "../../hooks/useIsInViewPort";
import { useSpring } from "react-spring";
import { useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronCircleRight,
  FaChevronRight,
} from "react-icons/fa";
import useScroll from "../../hooks/useScroll";

const ExperienceSection = ({ data = [] }) => {
  const [selectedExperience, setSelectedExperience] = useState(data[0]);
  const experienceRef = useRef();
  const isInview = useIsInViewPort(experienceRef);
  const [animation, api] = useSpring(() => ({
    from: {
      y: 250,
      opacity: 0,
    },
  }));
  useEffect(() => {
    if (isInview) {
      api({ y: 0, opacity: 1 });

      return () => {
        api({ y: 250, opacity: 0 });
      };
    }
  }, [api, isInview]);
  const menuListRef = useRef(null);
  const { end, start, moveLeft, moveRight } = useScroll({
    ref: menuListRef,
    amount: 800,
  });
  return (
    <StyledExperienceSection id="experience" ref={experienceRef}>
      <SectionTitle title="Experience" />
      <StyledWhereMenu style={animation}>
        {!start && (
          <StyledStepScroller position="left" onClick={moveRight}>
            <FaChevronLeft />
          </StyledStepScroller>
        )}
        {!end && (
          <StyledStepScroller position="right" onClick={moveLeft}>
            <FaChevronRight />
          </StyledStepScroller>
        )}
        <StyledWhereMenuWrapper ref={menuListRef} className="hide-scroll">
          {data.map((experience) => (
            <StyledWhereMenuItem
              selected={experience.company === selectedExperience.company}
              onClick={() => {
                setSelectedExperience(experience);
              }}
              key={experience.company}
            >
              {experience.company}
            </StyledWhereMenuItem>
          ))}
        </StyledWhereMenuWrapper>
      </StyledWhereMenu>
      <StyledExperienceSectionWrapper style={animation}>
        <StyledJobOverview>
          <StyledHeader>
            <StyledH1>
              <em>#</em> {selectedExperience.jobTitle}{" "}
              <em>@{selectedExperience.company}</em>
            </StyledH1>
            <StyledDate>{selectedExperience.date}</StyledDate>
          </StyledHeader>
          <StyledResponsibilities>
            {selectedExperience.responsibilities.map((responsibility) => (
              <StyledResponsibility key={responsibility.id}>
                <StyledArrowIcon />
                <StyledText>{responsibility.paragraph}</StyledText>
              </StyledResponsibility>
            ))}
          </StyledResponsibilities>
        </StyledJobOverview>
        <ImageDisplay img={selectedExperience.logo} dimension="150px" />
      </StyledExperienceSectionWrapper>
    </StyledExperienceSection>
  );
};

export default ExperienceSection;
