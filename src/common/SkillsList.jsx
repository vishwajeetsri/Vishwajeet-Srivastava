import React from "react";

const SkillsList = ({ src, skills }) => {
  return (
    <span>
      <img src={src} alt="checkmark icon" />
      <p>{skills}</p>
    </span>
  );
};

export default SkillsList;
