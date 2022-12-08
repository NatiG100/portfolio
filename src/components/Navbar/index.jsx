import React from 'react';
import Button from '../uiElements/Button';
import {RiMenu4Fill} from 'react-icons/ri';
import {
    StyledNavItem,
    StyledNavItemContainer,
    StyledNavbar,
    StyledNavbarWrapper,
    StyledMenu
} from './NavbarElements';
import {ReactComponent as Logo} from './../../assets/svg/logo.svg';

import { animateScroll } from 'react-scroll';

const Navbar = ({show=true, showShadow=false, onMenuClick=()=>{}}) => {
  return (
    <StyledNavbar show={show} showShadow={showShadow}>
        <StyledNavbarWrapper>
            <Logo onClick={animateScroll.scrollToTop}/>
            <StyledMenu onClick={onMenuClick}>
              <RiMenu4Fill/>
            </StyledMenu>
            <StyledNavItemContainer>
                <StyledNavItem activeClass="activeNavItem" spy={true}smooth={true} exact="true" to="about" offset={-80}><em># </em>about</StyledNavItem>
                <StyledNavItem activeClass="activeNavItem" spy={true}smooth={true} exact="true" to="skills" offset={-80}><em># </em>skills</StyledNavItem>
                <StyledNavItem activeClass="activeNavItem" spy={true}smooth={true} exact="true" to="experience" offset={-80}><em># </em>experience</StyledNavItem>
                <StyledNavItem activeClass="activeNavItem" spy={true}smooth={true} exact="true" to="projects" offset={-80}><em># </em>projects</StyledNavItem>
                <StyledNavItem activeClass="activeNavItem" spy={true}smooth={true} exact="true" to="contact" offset={-80}><em># </em>contact</StyledNavItem>
                <Button>Resume</Button>
            </StyledNavItemContainer>
        </StyledNavbarWrapper>
    </StyledNavbar>
  )
}

export default Navbar;