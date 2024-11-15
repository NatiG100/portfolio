// SkillStyles.js
import styled from "styled-components";

// Container to hold each card
export const SkillContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const SkillCard = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  background-color: ${({ bgColor }) => bgColor || "#f9a825"};

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || "#333"};
    transform: ${({ hoverEffect }) => (hoverEffect ? "scale(1.05)" : "none")};
  }
`;

export const SkillIcon = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 8px;
`;

export const SkillLabel = styled.div`
  font-size: 16px;
  color: white;
`;
