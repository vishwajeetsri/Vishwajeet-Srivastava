import React from "react";
import styles from "./ProjectsStyles.module.css";
import youtube from "../../assets/Youtube (1).jpg";
import netflix from "../../assets/Netflix (3).png";
import ecommerce from "../../assets/Ecommerce (3).jpg";
import chitra from "../../assets/Chitra stream.png";
import ProjectCard from "../../common/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={youtube}
          link="https://github.com/vishwajeetsri/Youtube-clone1"
          h3="Youtube Clone"
          p="Video Streaming App"
        />

        <ProjectCard
          src={netflix}
          link="https://github.com/vishwajeetsri/Netflix-clone"
          h3="Netflix Clone"
          p="Movies Streaming App"
        />

        <ProjectCard
          src={ecommerce}
          link="https://github.com/vishwajeetsri/Ecommerce"
          h3="Forever"
          p="E-Commerce Website"
        />

        <ProjectCard
          src={chitra}
          link="https://github.com/vishwajeetsri/Chitra-Stream"
          h3="Chitra Stream"
          p="Movies Streaming App"
        />
      </div>
    </section>
  );
};

export default Projects;
