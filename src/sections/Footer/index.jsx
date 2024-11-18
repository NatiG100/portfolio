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

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterWrapper>
        <StyledTopLeft />
        <StyledBottomRight />
        <StyledFooterTextContainer>
          <StyledP>Designed & built by Natnael Gashu</StyledP>
          <StyledLink
            href="https://github.com/NatiG100/portfolio"
            target="_blank"
          >
            <FaGithub /> <p>View GitHub Repo</p>
          </StyledLink>
        </StyledFooterTextContainer>
      </StyledFooterWrapper>
    </StyledFooter>
  );
};

export default Footer;
