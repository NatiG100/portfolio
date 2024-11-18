import React from "react";
import ImageDisplay from "../../components/ImageDisplay";
import SectionTitle from "../../components/SectionTitle";
import {
  StyledAboutSection,
  StyledAboutWrapper,
  StyledP,
} from "./AboutSectionElements";

import profile from "./../../assets/img/profile.jpg";

const AboutSection = ({ data = "" }) => {
  return (
    <StyledAboutSection id="about">
      <SectionTitle title="About Me" />
      <StyledAboutWrapper>
        <StyledP>{data}</StyledP>
        <ImageDisplay img={profile} dimension="220px" />
      </StyledAboutWrapper>
    </StyledAboutSection>
  );
};

export default AboutSection;
