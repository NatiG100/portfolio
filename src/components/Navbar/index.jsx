import React from 'react';
import Button from '../uiElements/Button';
import {
    StyledNavItem,
    StyledNavItemContainer,
    StyledNavbar,
    StyledNavbarWrapper,
} from './NavbarElements';
import {ReactComponent as Logo} from './../../assets/svg/logo.svg';

const Navbar = () => {
  return (
    <StyledNavbar>
        <StyledNavbarWrapper>
            <Logo/>
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