"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { projects, Project } from "@/lib/projects-data";
import TextType from '@/components/TextType';
import "./projects.css";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeView, setActiveView] = useState<"3D" | "2D">("3D");

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <div className="prj-page">
      <div className="prj-bg-image" />
      <div className="prj-bg-vignette" />

      <div className="prj-scroll-layer">
        <header className="prj-hero prj-fade-up" style={{ animationDelay: "0.1s" }}>
          <span className="prj-eyebrow">— Compendium of Works —</span>
          <h1 className="prj-hero-title">Architectural & Structural Projects</h1>
          <div className="prj-subtitle-wrap">
            <TextType
              text={[
                "Some of the projects which are not confidential"
              ]}
              typingSpeed={100}
              deletingSpeed={45}
              pauseDuration={2400}
              showCursor={true}
              cursorCharacter="|"
              className="prj-hero-subtitle"
            />
          </div>
          <div className="prj-hero-rule">
            <div className="prj-hero-rule-line" />
            <div className="prj-hero-rule-dot" />
            <div className="prj-hero-rule-line prj-hero-rule-line--right" />
          </div>
        </header>

        <div className="prj-grid prj-fade-up" style={{ animationDelay: "0.3s" }}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="prj-card"
              onClick={() => {
                setSelectedProject(project);
                setActiveView("3D");
              }}
            >
              <div className="prj-card-img-wrap">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="prj-card-img" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="prj-card-overlay">
                <span className="prj-card-tag">{project.tags[0]}</span>
                <h3 className="prj-card-title">{project.title}</h3>
                <p className="prj-card-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div className="prj-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="prj-modal" onClick={e => e.stopPropagation()}>
            <button className="prj-modal-close" onClick={() => setSelectedProject(null)}>
              <X size={20} />
            </button>
            
            <div className="prj-modal-left">
              <h2 className="prj-modal-title">{selectedProject.title}</h2>
              <p className="prj-modal-desc">{selectedProject.detailedDescription}</p>
              
              <div className="prj-modal-section">
                <h4 className="prj-modal-label">Metrics</h4>
                <div className="prj-modal-tags">
                  {selectedProject.metrics?.map(m => (
                    <span key={m.label} className="prj-modal-tag">
                      {m.label}: {m.value}
                    </span>
                  ))}
                </div>
              </div>

              <div className="prj-modal-section">
                <h4 className="prj-modal-label">Tech Stack</h4>
                <div className="prj-modal-tags">
                  {selectedProject.techStack.map(t => (
                    <span key={t} className="prj-modal-tag">{t}</span>
                  ))}
                </div>
              </div>
              
              <div className="prj-modal-section">
                <h4 className="prj-modal-label">Features</h4>
                <ul className="text-zinc-400 text-sm list-disc pl-4 space-y-1">
                  {selectedProject.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="prj-modal-right">
              <Image 
                src={activeView === "3D" ? selectedProject.image : selectedProject.blueprint} 
                alt={`${selectedProject.title} ${activeView} View`}
                fill 
                className={`object-contain transition-opacity duration-500 ${activeView === '2D' ? 'grayscale opacity-90' : ''}`} 
              />
              
              <div className="prj-toggles">
                <button 
                  className={`prj-toggle-btn ${activeView === "3D" ? "active" : ""}`}
                  onClick={() => setActiveView("3D")}
                >
                  3D Render
                </button>
                <button 
                  className={`prj-toggle-btn ${activeView === "2D" ? "active" : ""}`}
                  onClick={() => setActiveView("2D")}
                >
                  2D Floor Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
