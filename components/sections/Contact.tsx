"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo, contactLinks } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

function ContactIcon({ label }: { label: string }) {
  if (label === "GitHub")
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-text-secondary" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  if (label === "Facebook")
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#1877F2]" aria-hidden="true">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    );
  if (label === "Location")
    return (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-rose-400" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
      </svg>
    );
  // Email (default)
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-primary-light" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-surface/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm mb-3">{t.sectionLabel}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{t.title}</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">{t.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Email CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-center justify-center p-8 rounded-2xl border border-border bg-card/50 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-3xl mb-6">
              ✉️
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">{t.sendEmail}</h3>
            <p className="text-text-secondary text-sm mb-6">{t.replyNote}</p>
            <div className="w-full">
              <div className="flex items-center gap-2 p-3 rounded-xl border border-border bg-background mb-3">
                <span className="text-text-muted text-sm font-mono flex-1 truncate">
                  {personalInfo.email}
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="shrink-0 px-3 py-1.5 text-xs rounded-lg bg-primary text-white hover:bg-primary-dark transition-colors"
                >
                  {copied ? t.copied : t.copy}
                </button>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className="block w-full py-3 rounded-xl bg-primary text-white font-semibold text-sm text-center hover:bg-primary-dark transition-all duration-200 glow"
              >
                {t.openEmail}
              </a>
            </div>
          </motion.div>

          {/* Right: Social links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-2">{t.findElsewhere}</h3>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-200 group"
              >
                <span className="w-9 h-9 shrink-0 rounded-lg bg-card border border-border flex items-center justify-center">
                  <ContactIcon label={link.label} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-text-muted mb-0.5 uppercase tracking-wider">
                    {link.label}
                  </p>
                  <p className="text-text-secondary text-sm font-medium group-hover:text-text-primary transition-colors truncate">
                    {link.value}
                  </p>
                </div>
                {link.href !== "#" && (
                  <span className="ml-auto text-text-muted group-hover:text-primary-light transition-colors shrink-0">
                    →
                  </span>
                )}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Availability banner */}
        {personalInfo.available && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 flex items-center gap-4"
          >
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <p className="text-emerald-300 text-sm">{t.availabilityText}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
