import React from 'react';
import Button from '../../components/uiElements/Button';
import SectionTitle from './../../components/SectionTitle';

import {
    StyledContactSection,
    StyledContactSectionWrapper,
    StyledH1,
    StyledP
} from './ContactSectionElements';

const ContactSection = () => {
  return (
    <StyledContactSection>
        <SectionTitle title='Contact Me'/>
        <StyledContactSectionWrapper>
            <StyledH1>Get in Touch</StyledH1>
            <StyledP>I'm currently looking for new opportunities in React web development</StyledP>
            <Button size="lg">Say Hello</Button>
        </StyledContactSectionWrapper>
    </StyledContactSection>
  )
}

export default ContactSection;