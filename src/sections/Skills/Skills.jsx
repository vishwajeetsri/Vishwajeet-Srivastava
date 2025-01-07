import React from "react";
import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";

import SkillsList from "../../common/SkillsList";

const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skills="HTML" />
        <SkillsList src={checkMarkIcon} skills="CSS" />
        <SkillsList src={checkMarkIcon} skills="Javascript" />

        <hr />
        <SkillsList src={checkMarkIcon} skills="Tailwind CSS" />
        <SkillsList src={checkMarkIcon} skills="Bootstrap" />
        <SkillsList src={checkMarkIcon} skills="React" />

        <hr />

        <SkillsList src={checkMarkIcon} skills="Redux-Toolkit" />
        <SkillsList src={checkMarkIcon} skills="Gsap" />
        <SkillsList src={checkMarkIcon} skills="Locomotive Scroll" />
        <SkillsList src={checkMarkIcon} skills="Git-Github" />
      </div>
    </section>
  );
};

export default Skills;
