"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { contactPageStyles as s } from "@/styles/dummy-styles";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
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
    <div className={s.pageContainer}>
      <div className={s.contentContainer}>
        <div className={s.formOuterContainer}>
          <div className={s.backgroundOverlay} />
          
          <div className="relative z-10 p-8 md:p-12">
            <div className={s.headerContainer}>
              <h1 className={s.headerTitle}>Get in Touch</h1>
              <p className={s.headerSubtitle}>
                Have a project in mind or want to explore an opportunity? I'd love to hear from you.
              </p>
            </div>

            <div className={s.contactMethodsGrid}>
              <div className={s.contactCard}>
                <div className={s.contactIconContainer}>
                  <Mail className={s.contactIcon} />
                </div>
                <div>
                  <p className={s.contactLabel}>Email</p>
                  <p className={s.contactValue}>hello@example.com</p>
                </div>
              </div>
              <div className={s.contactCard}>
                <div className={s.contactIconContainer}>
                  <MapPin className={s.contactIcon} />
                </div>
                <div>
                  <p className={s.contactLabel}>Location</p>
                  <p className={s.contactValue}>Guwahati, Assam, India</p>
                </div>
              </div>
              <div className={s.contactCard}>
                <div className={s.contactIconContainer}>
                  <Phone className={s.contactIcon} />
                </div>
                <div>
                  <p className={s.contactLabel}>Phone</p>
                  <p className={s.contactValue}>+91 123 456 7890</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className={s.formContainer}>
              <div className={s.formGrid}>
                <div className={s.formFieldContainer}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    className={s.formInput}
                  />
                </div>
                <div className={s.formFieldContainer}>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                    className={s.formInput}
                  />
                </div>
              </div>
              
              <div className={s.formFieldContainer}>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className={s.formInput}
                />
              </div>

              <div className={s.formFieldContainer}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Message"
                  className={s.formTextarea}
                />
              </div>

              {success && (
                <div className="text-emerald-500 mb-4 font-medium">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}

              <div className={s.submitButtonContainer}>
                <button
                  type="submit"
                  disabled={sending}
                  className={s.submitButton}
                >
                  <span className={s.submitButtonText}>
                    {sending ? "Sending..." : "Send Message"}
                  </span>
                  <Send className={s.submitButtonIcon} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}