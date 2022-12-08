import React from "react";
import {
    StyledNavigation,
    StyledNavigationWrap
} from './NavigationElements';
import {
    StyledNavItem
}from './../Navbar/NavbarElements'

import Button from '../uiElements/Button';

const Navigation = ({show=false, close=()=>{}}) => {
  return (
    <StyledNavigation show={show}>
      <StyledNavigationWrap>
        <StyledNavItem
          activeClass="activeNavItem"
          spy={true}
          smooth={true}
          exact="true"
          to="about"
          offset={-80}
          onClick={close}
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
          onClick={close}
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
          onClick={close}
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
          onClick={close}
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
          onClick={close}
        >
          <em># </em>contact
        </StyledNavItem>
        <Button>Resume</Button>
      </StyledNavigationWrap>
    </StyledNavigation>
  );
};

export default Navigation;
