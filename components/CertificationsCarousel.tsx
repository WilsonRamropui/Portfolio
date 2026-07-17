"use client";

import React, { useRef, useState, useEffect } from "react";
import { ExternalLink, Award } from "lucide-react";

export function CertificationsCarousel({ certifications }: { certifications: any[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Dragging state for PC
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  // Duplicate the array 15 times to create an "infinite" track (60 items total)
  const numClones = 15;
  const infiniteCerts = Array(numClones).fill(certifications).flat();
  // Calculate the starting index of the exact middle group
  const middleGroupStart = Math.floor(numClones / 2) * certifications.length;

  useEffect(() => {
    // On mount, jump instantly to the middle group so we can swipe left or right infinitely
    if (scrollRef.current) {
      const track = scrollRef.current;
      const slides = Array.from(track.children) as HTMLElement[];
      if (slides[middleGroupStart]) {
        // Jump without smooth scrolling
        const leftPosition = slides[middleGroupStart].offsetLeft - track.offsetLeft;
        track.scrollTo({ left: leftPosition, behavior: "instant" as any });
      }
    }
  }, [middleGroupStart]);

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
    
    // Map the absolute infinite index back to the relative index (0 to 3) for the dots
    setActiveIndex(closestIndex % certifications.length);
  };

  const scrollToRelative = (relativeIndex: number) => {
    if (!scrollRef.current) return;
    const track = scrollRef.current;
    const slides = Array.from(track.children) as HTMLElement[];
    
    // Find the closest slide in the current viewport that matches the relative index
    let minDiff = Infinity;
    let targetSlideIndex = 0;
    
    slides.forEach((slide, index) => {
      if (index % certifications.length === relativeIndex) {
        const diff = Math.abs(slide.offsetLeft - track.scrollLeft - track.offsetLeft);
        if (diff < minDiff) {
          minDiff = diff;
          targetSlideIndex = index;
        }
      }
    });

    if (slides[targetSlideIndex]) {
      const leftPosition = slides[targetSlideIndex].offsetLeft - track.offsetLeft;
      track.scrollTo({
        left: leftPosition,
        behavior: "smooth",
      });
      setActiveIndex(relativeIndex);
    }
  };

  // ── Mouse Dragging for PC ──────────────────────────────
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    if (scrollRef.current) {
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeftPos.current = scrollRef.current.scrollLeft;
      // Disable scroll snap and smooth scrolling while dragging for 60fps buttery smoothness
      scrollRef.current.style.scrollSnapType = 'none';
      scrollRef.current.style.scrollBehavior = 'auto'; 
      scrollRef.current.style.cursor = 'grabbing';
    }
  };

  const onMouseLeave = () => {
    if (isDragging.current && scrollRef.current) {
      isDragging.current = false;
      scrollRef.current.style.scrollSnapType = 'x mandatory';
      scrollRef.current.style.scrollBehavior = 'smooth';
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const onMouseUp = () => {
    if (isDragging.current && scrollRef.current) {
      isDragging.current = false;
      scrollRef.current.style.scrollSnapType = 'x mandatory';
      scrollRef.current.style.scrollBehavior = 'smooth';
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  return (
    <div className="cert-carousel-wrapper">
      <div 
        className="cert-carousel-track" 
        style={{ cursor: "grab" }}
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {infiniteCerts.map((cert, i) => (
          <div className="cert-carousel-slide" key={i}>
            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-card" draggable={false}>
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
            onClick={() => scrollToRelative(i)}
            className={`cert-dot ${activeIndex === i ? "active" : ""}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
