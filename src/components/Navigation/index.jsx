import React from "react";
import {
    StyledNavigation,
    StyledNavigationWrap,
    StyledCloseNav
} from './NavigationElements';
import {
    StyledNavItem
}from './../Navbar/NavbarElements'
import {ReactComponent as Logo} from './../../assets/svg/logo.svg'
import { animateScroll } from "react-scroll";
import { IoMdClose} from 'react-icons/io';


import Button from '../uiElements/Button';

const Navigation = ({show=false, close=()=>{}}) => {
  return (
    <StyledNavigation show={show}>
      <StyledNavigationWrap>
        <StyledCloseNav show={show} onClick={close}>
            <IoMdClose/>
        </StyledCloseNav>
      <Logo onClick={()=>{animateScroll.scrollToTop();close();}} style={{height:"100px",width:"100px",marginBottom:"30px", padding:"0"}}/>
        <StyledNavItem
          activeClass="activeNavItem"
          spy={true}
          smooth={true}
          exact="true"
          to="about"
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
