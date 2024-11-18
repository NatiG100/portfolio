import React, { useRef } from "react";
import { FaLink, FaGithub } from "react-icons/fa";
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
  StyledTechStackWrapper,
} from "./ProjectCardelements";

import useScroll from "../../hooks/useScroll";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectCard = ({ link, repo, title, description, techStack = [] }) => {
  const scrollRef = useRef(null);
  const { end, start, moveLeft, moveRight } = useScroll({
    ref: scrollRef,
    amount: 45,
  });
  return (
    <StyledProjectCard>
      <StyledProjectCardHeader>
        <StyledProjectCardIcon />
        <StyledProjectCardMenu>
          {link && (
            <StyledProjectLink href={link} target="_blank">
              <FaLink />
            </StyledProjectLink>
          )}
          {repo && (
            <StyledProjectLink href={repo} target="_blank">
              <FaGithub />
            </StyledProjectLink>
          )}
        </StyledProjectCardMenu>
      </StyledProjectCardHeader>
      <StyledProjectCardBody>
        <StyledH1 className="title">{title}</StyledH1>
        <StyledP>{description}</StyledP>
        <StyledTechStack>
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
          <StyledTechStackWrapper className="hide-scroll" ref={scrollRef}>
            {techStack.map((tech) => (
              <StyledTech key={tech}>{tech}</StyledTech>
            ))}
          </StyledTechStackWrapper>
        </StyledTechStack>
      </StyledProjectCardBody>
    </StyledProjectCard>
  );
};

export default ProjectCard;
