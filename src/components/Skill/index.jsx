// Skill.js
import React from "react";
import PropTypes from "prop-types";
import {
  SkillContainer,
  SkillCard,
  SkillIcon,
  SkillLabel,
} from "./SkillStyles";
import theme from "../../theme";

const Skill = ({ icon, label, bgColor, hoverColor, hoverEffect }) => {
  return (
    <SkillCard
      bgColor={bgColor}
      hoverColor={hoverColor}
      hoverEffect={hoverEffect}
    >
      <SkillIcon src={icon} alt={`${label} Icon`} />
      <SkillLabel>{label}</SkillLabel>
    </SkillCard>
  );
};

// Define the prop types for the component
Skill.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverEffect: PropTypes.bool,
};

Skill.defaultProps = {
  bgColor: "#FFFFFF", // Default background color (e.g., Ubuntu orange)
  hoverColor: theme.colors.primary, // Default hover color (e.g., Flutter blue)
  hoverEffect: true, // Enables the scale effect by default
};

export default Skill;
