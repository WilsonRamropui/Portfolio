import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ExternalLink, Video, Code, Package, ArrowLeft, Info, CheckCircle2 } from "lucide-react";
import { projectDetailStyles as s } from "@/styles/dummy-styles";
import { projects, getProjectBySlug } from "@/lib/projects-data";

export function generateStaticParams() {
  if (projects.length === 0) {
    return [{ slug: 'empty-project' }];
  }
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className={s.pageContainer}>
      <div className={s.innerContainer}>
        <Link href="/projects" className={s.backButton}>
          <ArrowLeft className={s.backIcon} />
          Back to Projects
        </Link>

        <div className={s.projectHeader}>
          <div className={s.headerFlex}>
            <div className={s.headerLeft}>
              <div className={s.titleContainer}>
                <h1 className={s.projectTitle}>{project.title}</h1>
                <span className={`${s.statusBadge} ${project.status === 'active' ? s.statusActive : s.statusInactive}`}>
                  {project.status}
                </span>
              </div>
              <p className={s.projectDescription}>{project.description}</p>
              
              <div className={s.tagsContainer}>
                {project.tags.map((tag, i) => (
                  <span key={i} className={s.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className={s.actionButtonsContainer}>
              {project.links.visit && (
                <a
                  href={project.links.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.visitButton}
                >
                  <ExternalLink className={s.buttonIcon} />
                  Visit Live
                </a>
              )}
              {project.links.howIBuilt && (
                <a
                  href={project.links.howIBuilt}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.secondaryButton}
                >
                  <Video className={s.buttonIcon} />
                  How I Built
                </a>
              )}
            </div>
          </div>
        </div>

        <div className={s.imageContainer}>
          <Image 
            src={project.image} 
            alt={project.title} 
            layout="fill" 
            className={s.projectImage} 
          />
        </div>

        <div className={s.gridContainer}>
          <div className={s.mainContent}>
            <section className={s.prose}>
              <h2 className={s.sectionTitle}>
                <Info className="w-6 h-6 text-zinc-400" />
                About the Project
              </h2>
              <p className={s.proseText}>{project.detailedDescription}</p>
            </section>

            {project.learningOutcomes && project.learningOutcomes.length > 0 && (
              <section className={`${s.prose} mt-8`}>
                <h2 className={s.sectionTitle}>
                  <CheckCircle2 className="w-6 h-6 text-zinc-400" />
                  Learning Outcomes
                </h2>
                <div className={s.learningOutcomesGrid}>
                  {project.learningOutcomes.map((outcome, idx) => (
                    <div key={idx} className={s.learningOutcomeCard}>
                      <div className={s.learningOutcomeNumber}>
                        <span className={s.learningOutcomeNumberText}>{idx + 1}</span>
                      </div>
                      <span className={s.learningOutcomeText}>{outcome}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className={s.sidebar}>
            <div className={s.sidebarSection}>
              <h3 className={s.sidebarSectionTitle}>Links</h3>
              <div className={s.linksContainer}>
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkCard}
                  >
                    <Code className={s.linkIcon} />
                    <span className={s.linkText}>View Source Code</span>
                  </a>
                )}
                {project.links.visit && (
                  <a
                    href={project.links.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkCard}
                  >
                    <ExternalLink className={s.linkIcon} />
                    <span className={s.linkText}>Live Demo</span>
                  </a>
                )}
                {project.links.pypi && (
                  <a
                    href={project.links.pypi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkCard}
                  >
                    <Package className={s.linkIcon} />
                    <span className={s.linkText}>PyPI Package</span>
                  </a>
                )}
                {project.links.youtube && (
                  <a
                    href={project.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={s.linkCard}
                  >
                    <Video className={s.linkIcon} />
                    <span className={s.linkText}>Video Tutorial</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}