import React from 'react'
import Divider from '../uiElements/Divider';

import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

import {
    StyledLink,
    StyledLinkContainer,
    StyledSideLinkWrapper
} from './SideLinkElements';

const SideLinks = () => {
  return (
    <>
        <StyledSideLinkWrapper>
            <StyledLinkContainer>
                <StyledLink href='#'>
                    <AiFillGithub/>
                </StyledLink>
                <StyledLink href='#'>
                    <AiFillLinkedin/>
                </StyledLink>
            </StyledLinkContainer>
            <Divider direction='vertical' height="150px"/>
        </StyledSideLinkWrapper>
        <StyledSideLinkWrapper side="right">
            <StyledLink href="#">natnaelgashu2022@gmail.com</StyledLink>
            <Divider direction='vertical' height="150px"/>
        </StyledSideLinkWrapper>
    </>
  )
}

export default SideLinks;