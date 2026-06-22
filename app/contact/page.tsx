"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactPageStyles as s } from "@/styles/dummy-styles";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import CometCardDemo from "@/components/comet-card-demo";
import "../experience/experience.css";

export default function Contact() {
  // State and form handlers moved to ContactForm component to prevent whole-page re-renders on keystroke.

  return (
    <div className="exp-page">

      {/* ── Atmospheric background (same as experience page) ── */}
      <div className="exp-bg-image" aria-hidden="true" />
      <div className="exp-bg-ember"  aria-hidden="true" />
      <div className="exp-bg-vignette" aria-hidden="true" />



      {/* ── Original content (fully restored) ────────────────── */}
      <div className="exp-scroll-layer w-full">
        <div className={s.contentContainer} style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "42rem", margin: "0 auto" }}>
          <div className={s.formOuterContainer}>
            <div className={s.backgroundOverlay} />
          
          <div className="relative z-10 p-4 sm:p-8 md:p-12 w-full overflow-hidden">
            {/* Header */}
            <div className={s.headerContainer}>
              <span className="text-[11px] text-zinc-500 uppercase tracking-[0.3em] font-medium block mb-4">Contact</span>
              <h1 className={`${s.headerTitle} font-cinzel`}>Get in Touch</h1>
              <p className={s.headerSubtitle}>
                Have a project in mind or want to explore an opportunity? I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact info cards */}
            <div className={s.contactMethodsGrid}>
              <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-5 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] text-zinc-400 transition-all duration-300 group-hover:text-white group-hover:border-white/[0.12]">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-zinc-500 uppercase tracking-[0.15em]">Email</p>
                  <p className="text-sm text-zinc-200 transition-colors group-hover:text-white mt-0.5">wilsonramz774@gmail.com</p>
                </div>
              </div>
              <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-5 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] text-zinc-400 transition-all duration-300 group-hover:text-white group-hover:border-white/[0.12]">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-zinc-500 uppercase tracking-[0.15em]">Location</p>
                  <p className="text-sm text-zinc-200 transition-colors group-hover:text-white mt-0.5">Ccpur, Manipur, India</p>
                </div>
              </div>
              <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl p-5 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.06] text-zinc-400 transition-all duration-300 group-hover:text-white group-hover:border-white/[0.12]">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="text-[11px] font-medium text-zinc-500 uppercase tracking-[0.15em]">Phone</p>
                  <p className="text-sm text-zinc-200 transition-colors group-hover:text-white mt-0.5">9233104770</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="relative w-full my-12 flex flex-col items-center gap-12">
              <ContactForm />

              <div className="w-full flex justify-center">
                <CometCardDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);

    emailjs.init("YOUR_PUBLIC_KEY"); // To be replaced with actual key

    emailjs
      .send(
        "service_y8xhw8u", // To be replaced with actual service ID
        "YOUR_TEMPLATE_ID", // To be replaced with actual template ID
        {
          from_name: formData.name,
          to_name: "Wilson Ramropui",
          from_email: formData.email,
          to_email: "hello@example.com",
          subject: formData.subject,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY" // To be replaced with actual key
      )
      .then(
        () => {
          setSending(false);
          setSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error(error);
          setSending(false);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="w-full max-w-2xl">
      <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md md:backdrop-blur-2xl overflow-hidden transition-all duration-700 hover:-translate-y-1 hover:border-white/[0.12]">
        {/* Top glass reflection */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
        {/* Inner ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] via-transparent to-transparent pointer-events-none" />

        <form onSubmit={handleSubmit} className="relative z-10 p-8 md:p-10 space-y-6">
          {/* Form header */}
          <div className="mb-2">
            <span className="text-[11px] text-zinc-500 uppercase tracking-[0.25em] font-medium">Send a message</span>
            <div className="w-8 h-px bg-gradient-to-r from-white/30 to-transparent mt-3" />
          </div>

          {/* Name & Email row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <LabelInputContainer>
              <Label htmlFor="name" className="text-[11px] text-zinc-400 uppercase tracking-[0.15em] font-medium mb-1.5">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tyler Durden"
                className="!rounded-xl !border-white/[0.06] !bg-white/[0.03] !backdrop-blur-sm !text-zinc-100 !text-sm placeholder:!text-zinc-600 focus:!border-white/[0.15] focus:!bg-white/[0.05] !transition-all !duration-300 !px-4 !py-3"
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="email" className="text-[11px] text-zinc-400 uppercase tracking-[0.15em] font-medium mb-1.5">Email Address</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="projectmayhem@fc.com"
                className="!rounded-xl !border-white/[0.06] !bg-white/[0.03] !backdrop-blur-sm !text-zinc-100 !text-sm placeholder:!text-zinc-600 focus:!border-white/[0.15] focus:!bg-white/[0.05] !transition-all !duration-300 !px-4 !py-3"
              />
            </LabelInputContainer>
          </div>

          {/* Subject */}
          <LabelInputContainer>
            <Label htmlFor="subject" className="text-[11px] text-zinc-400 uppercase tracking-[0.15em] font-medium mb-1.5">Subject</Label>
            <Input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Project Inquiry"
              className="!rounded-xl !border-white/[0.06] !bg-white/[0.03] !backdrop-blur-sm !text-zinc-100 !text-sm placeholder:!text-zinc-600 focus:!border-white/[0.15] focus:!bg-white/[0.05] !transition-all !duration-300 !px-4 !py-3"
            />
          </LabelInputContainer>

          {/* Message */}
          <LabelInputContainer>
            <Label htmlFor="message" className="text-[11px] text-zinc-400 uppercase tracking-[0.15em] font-medium mb-1.5">Message</Label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full resize-none rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm px-4 py-3 text-sm text-zinc-100 outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-white/[0.15] focus:bg-white/[0.05]"
            />
          </LabelInputContainer>

          {/* Success message */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm text-emerald-400 font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Message sent successfully! I&apos;ll get back to you soon.
            </motion.div>
          )}

          {/* Submit button */}
          <button
            className="group/btn relative flex items-center justify-center gap-2.5 h-12 w-full rounded-xl bg-white/[0.06] border border-white/[0.08] font-medium text-sm text-zinc-200 transition-all duration-500 hover:bg-white/[0.1] hover:border-white/[0.15] hover:text-white active:scale-[0.98] disabled:opacity-40"
            type="submit"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message"}
            <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
            <BottomGradient />
          </button>
        </form>

        {/* Bottom subtle glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};