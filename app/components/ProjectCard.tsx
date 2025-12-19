'use client';

import { Project } from '../types/project';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={`${styles.projectCard}`}>
      <div className={styles.cardFront}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className={styles.techStack}>
          {project.techStack.map((tech, index) => (
            <span key={index} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className={styles.cardEdgeTop}></div>
      <div className={styles.cardEdgeBottom}></div>
      <div className={styles.cardEdgeLeft}></div>
      <div className={styles.cardEdgeRight}></div>
      <div className={styles.cardBack}></div>
    </div>
  );
}