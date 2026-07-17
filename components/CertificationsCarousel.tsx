"use client";

import React, { useRef, useState, useEffect } from "react";
import { ExternalLink, Award } from "lucide-react";

export function CertificationsCarousel({ certifications }: { certifications: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const track = scrollRef.current;
    
    // Find the slide closest to the left edge
    const slides = Array.from(track.children) as HTMLElement[];
    let minDiff = Infinity;
    let closestIndex = 0;
    
    slides.forEach((slide, index) => {
      // Calculate how far the slide's left edge is from the track's current scroll position
      const diff = Math.abs(slide.offsetLeft - track.scrollLeft - track.offsetLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = index;
      }
    });
    
    setActiveIndex(closestIndex);
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const track = scrollRef.current;
    const slides = Array.from(track.children) as HTMLElement[];
    if (slides[index]) {
      // Calculate the exact left offset relative to the track
      const leftPosition = slides[index].offsetLeft - track.offsetLeft;
      track.scrollTo({
        left: leftPosition,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <div className="cert-carousel-wrapper">
      <div 
        className="cert-carousel-track" 
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {certifications.map((cert, i) => (
          <div className="cert-carousel-slide" key={i}>
            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-card">
              <div className="cert-link-icon">
                <ExternalLink size={16} />
              </div>
              <div className="cert-badge-wrap">
                {/* Placeholder for the actual image. Replace with <img src={cert.icon} /> when you have the files! */}
                <div className="cert-badge-placeholder">
                  <Award size={40} strokeWidth={1.5} />
                </div>
              </div>
              <div className="cert-category">{cert.category}</div>
              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-issuer">{cert.issuer}</div>
            </a>
          </div>
        ))}
      </div>
      
      {/* Pagination Dots */}
      <div className="cert-carousel-dots">
        {certifications.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`cert-dot ${activeIndex === i ? "active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
