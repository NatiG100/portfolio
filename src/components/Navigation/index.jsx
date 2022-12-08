import React from "react";
import {
    StyledNavigation,
    StyledNavigationWrap
} from './NavigationElements';
import {
    StyledNavItem
}from './../Navbar/NavbarElements'

import Button from '../uiElements/Button';

const Navifation = () => {
  return (
    <StyledNavigation>
      <StyledNavigationWrap>
        <StyledNavItem
          activeClass="activeNavItem"
          spy={true}
          smooth={true}
          exact="true"
          to="about"
          offset={-80}
        >
          <em># </em>about
        </StyledNavItem>
        <StyledNavItem
          activeClass="activeNavItem"
          spy={true}
          smooth={true}
          exact="true"
          to="skills"
          offset={-80}
        >
          <em># </em>skills
        </StyledNavItem>
        <StyledNavItem
          activeClass="activeNavItem"
          spy={true}
          smooth={true}
          exact="true"
          to="experience"
          offset={-80}
        >
          <em># </em>experience
        </StyledNavItem>
        <StyledNavItem
          activeClass="activeNavItem"
          spy={true}
          smooth={true}
          exact="true"
          to="projects"
          offset={-80}
        >
          <em># </em>projects
        </StyledNavItem>
        <StyledNavItem
          activeClass="activeNavItem"
          spy={true}
          smooth={true}
          exact="true"
          to="contact"
          offset={-80}
        >
          <em># </em>contact
        </StyledNavItem>
        <Button>Resume</Button>
      </StyledNavigationWrap>
    </StyledNavigation>
  );
};

export default Navifation;
