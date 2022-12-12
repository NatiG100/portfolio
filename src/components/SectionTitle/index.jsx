import React, { useRef } from "react";
import { useEffect } from "react";
import { easings, useSpring } from "react-spring";
import useIsInviewPort from "../../hooks/useIsInViewPort";
import Divider from "../uiElements/Divider";

import {
  StyledSectionTitle,
  StyledSectionTitleContainer,
} from "./SectionTitleElements";

const SectionTitle = ({ title = "Title" }) => {
  const titleRef = useRef(null);
  const isInView = useIsInviewPort(titleRef);
  const [animation, api] = useSpring(() => ({
    from: {
      scale: 0,
      opacity: 0,
    },
    config: {
      duration: 400,
      easing: easings.easeInBounce,
    },
  }));
  useEffect(() => {
    if (isInView) {
      api({ scale: 1, opacity: 1 });

      return () => {
        api({ scale: 0, opacity: 0 });
      };
    }
  }, [isInView, api]);

  return (
    <StyledSectionTitleContainer ref={titleRef} style={animation}>
      <Divider />
      <StyledSectionTitle>
        <em>#</em> {title}
      </StyledSectionTitle>
      <Divider />
    </StyledSectionTitleContainer>
  );
};

export default SectionTitle;
