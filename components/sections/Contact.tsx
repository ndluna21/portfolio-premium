"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { personalInfo, contactLinks } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

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
                <span className="text-2xl shrink-0">{link.icon}</span>
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
