import React, { useEffect } from "react";
import Button from "../../components/uiElements/Button";
import Links from "../Links";
import SectionTitle from "./../../components/SectionTitle";
import useIsInViewPort from "./../../hooks/useIsInViewPort";
import {
  StyledContactSection,
  StyledContactSectionWrapper,
  StyledH1,
  StyledP,
} from "./ContactSectionElements";
import { useSpring, config, animated } from "react-spring";
import { useRef } from "react";

const getBaseAnimationFrom = (delay) => ({
  from: {
    y: 120,
    opacity: 0,
  },
  delay,
  config: config.gentle,
});
const getBaseAnimationTo = () => ({
  opacity: 1,
  y: 0,
});
const getBaseAnimationReset = () => ({
  opacity: 0,
  y: 120,
});

const ContactSection = ({
  paragraph = "",
  header = "",
  email = "",
  github = "#",
  linkedin = "#",
}) => {
  const handleSayHello = () => {
    window.open("mailto:" + email, "_self");
  };
  const contactRef = useRef(null);
  const isInView = useIsInViewPort(contactRef);
  const [animation1, api1] = useSpring(() => getBaseAnimationFrom(0));
  const [animation2, api2] = useSpring(() => getBaseAnimationFrom(100));
  const [animation3, api3] = useSpring(() => getBaseAnimationFrom(250));
  useEffect(() => {
    if (isInView) {
      api1(getBaseAnimationTo());
      api2(getBaseAnimationTo());
      api3(getBaseAnimationTo());
      return () => {
        api1(getBaseAnimationReset());
        api2(getBaseAnimationReset());
        api3(getBaseAnimationReset());
      };
    }
  }, [isInView, api1, api2, api3]);
  return (
    <StyledContactSection id="contact">
      <SectionTitle title="Contact Me" />
      <StyledContactSectionWrapper ref={contactRef}>
        <StyledH1 style={animation1}>{header}</StyledH1>
        <StyledP style={animation2}>{paragraph}</StyledP>
        <Links mail={email} github={github} linkedIn={linkedin} />
        <animated.div
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            ...animation3,
          }}
        >
          <Button size="lg" onClick={handleSayHello}>
            Say Hello
          </Button>
        </animated.div>
      </StyledContactSectionWrapper>
    </StyledContactSection>
  );
};

export default ContactSection;
