import React from "react";

import {
  StyledBottomRight,
  StyledFooter,
  StyledFooterTextContainer,
  StyledFooterWrapper,
  StyledLink,
  StyledP,
  StyledTopLeft,
} from "./FooterElements";

import { FaGithub } from "react-icons/fa";
import { useRef } from "react";
import useIsInviewPort from "../../hooks/useIsInViewPort";
import { config, useSpring } from "react-spring";
import { useEffect } from "react";

const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useIsInviewPort(footerRef);
  const [animation, api] = useSpring(() => ({
    from: {
      scale: 0,
      opacity: 0,
    },
    config:config.gentle
  }));
  useEffect(() => {
    if (isInView) {
      api({ scale: 1, opacity: 1 });
    }
    return () => {
      api({ scale: 0, opacity: 0 });
    };
  }, [isInView, api]);
  return (
    <StyledFooter>
      <StyledFooterWrapper ref={footerRef} style={animation}>
        <StyledTopLeft />
        <StyledBottomRight />
        <StyledFooterTextContainer>
          <StyledP>Designed & built by Natnael Gashu</StyledP>
          <StyledLink href="#">
            <FaGithub /> <p>View GitHub Repo</p>
          </StyledLink>
        </StyledFooterTextContainer>
      </StyledFooterWrapper>
    </StyledFooter>
  );
};

export default Footer;
