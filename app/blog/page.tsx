"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconSearch, IconBell, IconMail, IconChevronDown, IconX } from '@tabler/icons-react';
import './blog.css';

function PanelCorner() {
  return (
    <>
      <div className="mz-corner tl" />
      <div className="mz-corner tr" />
      <div className="mz-corner bl" />
      <div className="mz-corner br" />
    </>
  );
}

export default function BlogPage() {
  return (
    <div className="mz-page">
      <div className="mz-container">
        
        {/* ── TOP NAV ────────────────────────────────────────────────── */}
        <nav className="mz-nav">
          <div className="mz-nav-left">
            <Link href="/" className="mz-logo">
              <span style={{ fontSize: '32px', marginRight: '12px' }}>♔</span>
            </Link>
            <div className="mz-nav-links">
              <span className="mz-nav-link active">Home</span>
              <span className="mz-nav-link">Characters</span>
              <span className="mz-nav-link">Templates</span>
              <span className="mz-nav-link">Resources</span>
              <span className="mz-nav-link" style={{display:'flex', alignItems:'center', gap:'4px'}}>
                Series <span style={{fontSize:'8px'}}>✦</span>
              </span>
            </div>
          </div>
          <div className="mz-nav-right">
            <div className="mz-search">
              <input type="text" placeholder="Search anything..." />
              <IconSearch size={16} color="var(--mz-text-dim)" />
            </div>
            <IconBell size={20} color="var(--mz-text)" />
            <IconMail size={20} color="var(--mz-text)" />
            <div style={{display:'flex', alignItems:'center', gap:'8px', marginRight: '16px'}}>
              <Image src="/blog/marazanna_profile.png" alt="Profile" width={32} height={32} className="mz-avatar" />
              <IconChevronDown size={16} color="var(--mz-text-dim)" />
            </div>
            {/* Close button */}
            <Link href="/" className="mz-close-btn" aria-label="Close blog">
              <IconX size={24} color="var(--mz-text)" />
            </Link>
          </div>
        </nav>

        {/* ── HERO BANNER ────────────────────────────────────────────── */}
        <div className="mz-panel mz-hero">
          <PanelCorner />
          <Image src="/blog/marazanna_hero.png" alt="Marazanna Hero" fill priority className="mz-hero-img" />
          <div className="mz-hero-overlay">
            <h1 className="mz-hero-title">MARAZANNA</h1>
            <p className="mz-hero-subtitle">✦ CREATING WORLDS. ONE LINE AT A TIME.</p>
            <div className="mz-hero-moons">
              ☾ ☽ 🌕 ☽ ☾
            </div>
          </div>
        </div>

        {/* ── MAIN SPLIT LAYOUT ──────────────────────────────────────── */}
        <div className="mz-main-grid">
          
          {/* LEFT: PROFILE PANEL */}
          <div className="mz-panel mz-profile-panel">
            <PanelCorner />
            
            <div className="mz-profile-ring">
              <Image src="/blog/marazanna_profile.png" alt="Marazanna Profile" fill className="mz-profile-img" />
            </div>
            
            <h2 className="mz-profile-name">MARAZANNA</h2>
            <div className="mz-profile-stat">Creator Since 2023</div>
            <div className="mz-profile-substat">✦ 2.4K Followers ✦</div>
            
            <div className="mz-profile-icons">
              <button className="mz-icon-btn">♔</button>
              <button className="mz-icon-btn">✒</button>
              <button className="mz-icon-btn">✧</button>
              <button className="mz-icon-btn">♡</button>
            </div>
          </div>

          {/* RIGHT: STACKED PANELS */}
          <div className="mz-right-stack">
            
            {/* Status Panel */}
            <div className="mz-panel mz-status-panel">
              <PanelCorner />
              <div className="mz-status-content">
                <div className="mz-section-title">
                  <span style={{fontSize:'16px'}}>✒</span> STATUS / UPDATES
                </div>
                <h3 className="mz-quote">
                  "I don't chase perfection.<br/>
                  I write what haunts me."
                </h3>
                <p className="mz-status-text">
                  Currently crafting stories that bleed,<br/>
                  live, and breathe.
                </p>
                <div className="mz-commission">
                  Commission Status: <span>OPEN</span>
                </div>
              </div>
              <Image src="/blog/silver_rose.png" alt="Silver Rose" width={200} height={200} className="mz-status-img" />
            </div>

            {/* About Panel */}
            <div className="mz-panel mz-about-panel">
              <PanelCorner />
              <div className="mz-tabs">
                <div className="mz-tab active">About Me</div>
                <div className="mz-tab">Templates</div>
                <div className="mz-tab">Resources</div>
                <div className="mz-tab">Series</div>
                <div className="mz-tab">Archive</div>
                <div className="mz-tab">Favorites</div>
              </div>
              
              <div className="mz-about-content">
                <div className="mz-about-text">
                  <div className="mz-section-title" style={{marginBottom: '16px'}}>ABOUT ME</div>
                  <p>
                    A storyteller at heart and a creator by choice. I build worlds that linger, characters that feel real, and plots that twist beautifully.
                  </p>
                  <p>
                    Here, you'll find my templates, resources, and original series—crafted with passion and a touch of darkness.
                  </p>
                  <p className="mz-about-quote">"Stories are my escape. Writing is my heartbeat."</p>
                </div>
                <Image src="/blog/potion_candle.png" alt="Potion and Candle" width={160} height={160} className="mz-about-img" />
              </div>
            </div>

          </div>
        </div>

        {/* ── BOTTOM GALLERIES ───────────────────────────────────────── */}
        <div className="mz-bottom-grid">
          
          {/* Creators */}
          <div className="mz-panel mz-gallery-panel">
            <PanelCorner />
            <div className="mz-section-title center" style={{marginBottom: '24px', width: '100%', justifyContent: 'center'}}>
              ♔ CREATORS ♔
            </div>
            <div className="mz-cards">
              <div className="mz-card">
                <Image src="/blog/creator_1.png" alt="Creator 1" fill />
                <div className="mz-card-corner">✧</div>
              </div>
              <div className="mz-card">
                <Image src="/blog/creator_2.png" alt="Creator 2" fill />
                <div className="mz-card-corner">✧</div>
              </div>
              <div className="mz-card">
                <Image src="/blog/creator_3.png" alt="Creator 3" fill />
                <div className="mz-card-corner">✧</div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="mz-panel mz-gallery-panel">
            <PanelCorner />
            <div className="mz-section-title center" style={{marginBottom: '24px', width: '100%', justifyContent: 'center'}}>
              ✦ GALLERY ✦
            </div>
            <div className="mz-cards">
              <div className="mz-card">
                <Image src="/blog/gallery_1.png" alt="Gallery 1" fill />
                <div className="mz-card-corner">✧</div>
              </div>
              <div className="mz-card">
                <Image src="/blog/gallery_2.png" alt="Gallery 2" fill />
                <div className="mz-card-corner">✧</div>
              </div>
              <div className="mz-card">
                <Image src="/blog/gallery_3.png" alt="Gallery 3" fill />
                <div className="mz-card-corner">✧</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
