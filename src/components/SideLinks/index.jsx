import React from 'react'
import Divider from '../uiElements/Divider';

import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

import {
    StyledLink,
    StyledLinkContainer,
    StyledSideLinkWrapper
} from './SideLinkElements';

const SideLinks = ({email="#", linkedIn="#",gitHub="#"}) => {
  return (
    <>
        <StyledSideLinkWrapper>
            <StyledLinkContainer>
                <StyledLink href={gitHub} target="_blank">
                    <AiFillGithub/>
                </StyledLink>
                <StyledLink href={linkedIn} target="_blank">
                    <AiFillLinkedin/>
                </StyledLink>
            </StyledLinkContainer>
            <Divider direction='vertical' height="150px"/>
        </StyledSideLinkWrapper>
        <StyledSideLinkWrapper side="right">
            <StyledLink href={`mailto:${email}`}>{email}</StyledLink>
            <Divider direction='vertical' height="150px"/>
        </StyledSideLinkWrapper>
    </>
  )
}

export default SideLinks;