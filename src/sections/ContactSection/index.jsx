import React from 'react';
import Button from '../../components/uiElements/Button';
import SectionTitle from './../../components/SectionTitle';

import {
    StyledContactSection,
    StyledContactSectionWrapper,
    StyledH1,
    StyledP
} from './ContactSectionElements';

const ContactSection = ({paragraph="", header="", email=""}) => {
  const handleSayHello = ()=>{
    window.open("mailto:"+email,"_self");
  }
  return (
    <StyledContactSection id="contact">
        <SectionTitle title='Contact Me'/>
        <StyledContactSectionWrapper>
            <StyledH1>{header}</StyledH1>
            <StyledP>{paragraph}</StyledP>
            <Button size="lg" onClick={handleSayHello}>Say Hello</Button>
        </StyledContactSectionWrapper>
    </StyledContactSection>
  )
}

export default ContactSection;