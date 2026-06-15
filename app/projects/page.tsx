"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { projectStyles } from "@/styles/dummy-styles";
import { projects } from "@/lib/projects-data";

export default function Projects() {
  const router = useRouter();

  return (
    <div className={projectStyles.pageContainer}>
      <div className={projectStyles.innerContainer}>
        <div className={projectStyles.header}>
          <h1 className={projectStyles.pageTitle}>Projects</h1>
          <p className={projectStyles.pageSubtitle}>A collection of my work and side projects.</p>
        </div>
        
        <div className={projectStyles.projectsGrid}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`${projectStyles.projectCard} cursor-pointer`}
              onClick={() => router.push(`/projects/${project.slug}`)}
            >
              <div className={projectStyles.imageContainer}>
                <Image src={project.image} alt={project.title} layout="fill" className={projectStyles.projectImage} />
                <div className={projectStyles.statusBadgeContainer}>
                  <span className={`${projectStyles.statusBadge} ${project.status === 'active' ? projectStyles.statusActive : projectStyles.statusInactive}`}>
                    {project.status}
                  </span>
                </div>
                <button className={projectStyles.bookmarkButton} onClick={(e) => e.stopPropagation()}>
                  <svg className={projectStyles.bookmarkIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </button>
              </div>
              
              <div className={projectStyles.contentSection}>
                <h3 className={projectStyles.projectTitle}>{project.title}</h3>
                <p className={projectStyles.projectDescription}>{project.description}</p>
                
                <div className={projectStyles.tagsContainer}>
                  {project.tags.map((tag, index) => (
                    <span key={index} className={projectStyles.tag}>{tag}</span>
                  ))}
                </div>
                
                <div className={projectStyles.actionsContainer}>
                  <div className={projectStyles.actionsLinksContainer}>
                    {project.links.visit && (
                      <a href={project.links.visit} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className={projectStyles.visitButton}>
                        Visit
                      </a>
                    )}
                    {project.links.github && (
                      <a href={project.links.github} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className={projectStyles.otherButton}>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
