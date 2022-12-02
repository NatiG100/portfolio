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
    <StyledNavbar id="about">
        <StyledNavbarWrapper>
            <Logo/>
            <StyledNavItemContainer>
                <StyledNavItem href="#about"><em># </em>about</StyledNavItem>
                <StyledNavItem href="#skills"><em># </em>skills</StyledNavItem>
                <StyledNavItem href="#experience"><em># </em>experience</StyledNavItem>
                <StyledNavItem href="#projects"><em># </em>projects</StyledNavItem>
                <StyledNavItem href="#contact"><em># </em>contact</StyledNavItem>
                <Button>Resume</Button>
            </StyledNavItemContainer>
        </StyledNavbarWrapper>
    </StyledNavbar>
  )
}

export default Navbar;