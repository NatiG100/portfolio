import React from 'react';
import {AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai'
import {
     StyledLink,
     StyledLinks,
     StyledLinksWrapper
} from './LinksElements';

const Links = ({mail="#",linkedIn="#", github="#"}) => {
  return (
      <StyledLinks>
          <StyledLinksWrapper>
              <StyledLink href={github} target="_blank">
                <AiFillGithub/>
              </StyledLink>
              <StyledLink href={linkedIn} target="_blank">
                <AiFillLinkedin/>
              </StyledLink>
              <StyledLink href={mail} target="_blank">
                <AiFillMail/>
              </StyledLink>
          </StyledLinksWrapper>
      </StyledLinks>
  )
}

export default Links;