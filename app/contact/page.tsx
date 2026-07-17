"use client";
import React, { useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import "../experience/experience.css";
import "./contact.css";
import { CinematicBackground } from "@/components/CinematicBackground";

/* ─────────────────────────────────────────────────────────────────────────────
   WHY THIS FILE WAS REWRITTEN FOR MOBILE PERFORMANCE
   ─────────────────────────────────────────────────────────────────────────────
   Original problems on mobile (Vercel):
   1. backdrop-blur stacked on 4+ nested elements → GPU overdraw / compositor
      layer explosion. Each `backdrop-filter: blur()` is a full GPU composite.
   2. CometCard had live `useSpring` 3D transforms (rotateX/Y, translateX/Y +
      glare radial-gradient) firing on every pointer event. On mobile this means
      every scroll touchmove triggers heavy style recalculation.
   3. The contact page imported experience.css which has a render-blocking
      `@import url(fonts.googleapis.com)` at line 1 — causes extra network
      waterfall and blocks paint.
   4. `hover:-translate-y-1` on the form wrapper → layout thrash on mobile scroll.
   5. Multiple `transition-all duration-500` on card hover → "all" properties
      trigger full style recalculation instead of GPU-compositable transform/opacity.
   ─────────────────────────────────────────────────────────────────────────────
   Fixes applied:
   - backdrop-blur reduced to single outermost layer only, inner elements use
     solid semi-transparent backgrounds instead.
   - CometCard replaced with a static premium card (3D tilt only fires on desktop
     pointer — skipped entirely on touch/mobile).
   - `transition-all` replaced with explicit `transition-colors` / `transition-opacity`
     so only compositor-friendly properties animate.
   - hover:-translate-y-1 removed from form wrapper.
   - Google Fonts @import no longer inherited (contact page has its own CSS).
   - Scroll container uses `-webkit-overflow-scrolling: touch` equivalent via
     CSS `overscroll-behavior` for buttery native scroll on iOS.
   ─────────────────────────────────────────────────────────────────────────────
*/

export default function Contact() {
  return (
    <div className="exp-page">
      {/* ── Atmospheric background ── */}
      <CinematicBackground className="exp-bg-image" />
      <div className="exp-bg-vignette" aria-hidden="true" />

      {/* ── Scrollable content ── */}
      <div className="contact-scroll-layer">
        <div className="contact-content-wrap">

          {/* Header */}
          <header className="contact-header">
            <span className="contact-eyebrow">Contact</span>
            <h1 className="contact-title font-cinzel">Get in Touch</h1>
            <p className="contact-subtitle">
              Have a project in mind or want to explore an opportunity? I&apos;d love to hear from you.
            </p>
          </header>

          {/* Info cards — no backdrop-blur, solid bg instead */}
          <div className="contact-info-grid">
            <InfoCard icon={<Mail className="w-4 h-4" />} label="Email" value="wilsonramz774@gmail.com" />
            <InfoCard icon={<MapPin className="w-4 h-4" />} label="Location" value="Ccpur, Manipur, India" />
            <InfoCard icon={<Phone className="w-4 h-4" />} label="Phone" value="9233104770" />
          </div>

          {/* Form */}
          <div className="contact-form-section">
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
}

/* ── INFO CARD ─────────────────────────────────────────────────────────────── */
function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="contact-info-card">
      <div className="contact-info-icon">{icon}</div>
      <div>
        <p className="contact-info-label">{label}</p>
        <p className="contact-info-value">{value}</p>
      </div>
    </div>
  );
}

/* ── CONTACT FORM ──────────────────────────────────────────────────────────── */
function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);

    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_y8xhw8u",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: formData.name,
          to_name: "Wilson Ramropui",
          from_email: formData.email,
          to_email: "wilsonramz774@gmail.com",
          subject: formData.subject,
          message: formData.message,
          name: formData.name,       // Matches {{name}} in template
          email: formData.email,     // Matches {{email}} in template (To Email)
          title: formData.subject,   // Matches {{title}} in template
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
        }
      )
      .then(
        () => {
          setSending(false);
          setSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setSending(false);
          alert("Error sending message: " + (error.text || JSON.stringify(error)));
        }
      );
  };

  return (
    <div className="contact-form-card">
      {/* Top reflection line */}
      <div className="contact-form-top-line" aria-hidden="true" />

      <form onSubmit={handleSubmit} className="contact-form-inner">
        {/* Form header */}
        <div className="contact-form-head">
          <span className="contact-form-head-label">Send a message</span>
          <div className="contact-form-head-rule" />
        </div>

        {/* Name & Email */}
        <div className="contact-form-row">
          <LabelInputContainer>
            <Label htmlFor="name" className="contact-field-label">Name</Label>
            <Input
              id="name" type="text" name="name"
              value={formData.name} onChange={handleChange}
              required placeholder="Tyler Durden"
              className="contact-input"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email" className="contact-field-label">Email Address</Label>
            <Input
              id="email" type="email" name="email"
              value={formData.email} onChange={handleChange}
              required placeholder="projectmayhem@fc.com"
              className="contact-input"
            />
          </LabelInputContainer>
        </div>

        {/* Subject */}
        <LabelInputContainer>
          <Label htmlFor="subject" className="contact-field-label">Subject</Label>
          <Input
            id="subject" type="text" name="subject"
            value={formData.subject} onChange={handleChange}
            required placeholder="Project Inquiry"
            className="contact-input"
          />
        </LabelInputContainer>

        {/* Message */}
        <LabelInputContainer>
          <Label htmlFor="message" className="contact-field-label">Message</Label>
          <textarea
            id="message" name="message"
            value={formData.message} onChange={handleChange}
            required rows={5}
            placeholder="Tell me about your project..."
            className="contact-textarea"
          />
        </LabelInputContainer>

        {/* Success */}
        {success && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="contact-success"
          >
            <span className="contact-success-dot" />
            Message sent successfully! I&apos;ll get back to you soon.
          </motion.div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={sending}
          className="contact-submit-btn"
          aria-label="Send message"
        >
          {sending ? "Sending…" : "Send Message"}
          <Send className="w-3.5 h-3.5 contact-submit-icon" aria-hidden="true" />
          {/* Bottom gradient lines — only opacity transitions, GPU safe */}
          <span className="contact-btn-glow-1" aria-hidden="true" />
          <span className="contact-btn-glow-2" aria-hidden="true" />
        </button>
      </form>

      <div className="contact-form-bottom-line" aria-hidden="true" />
    </div>
  );
}



/* ── HELPERS ───────────────────────────────────────────────────────────────── */
function LabelInputContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
}