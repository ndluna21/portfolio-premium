"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-3xl pointer-events-none animate-float" />
      <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] bg-accent/5 rounded-full blur-3xl pointer-events-none animate-float" style={{ animationDelay: "2s" }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-text-secondary font-medium">
            {personalInfo.available ? t.hero.available : t.hero.unavailable}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1 {...fadeUp(0.2)} className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          {personalInfo.name}
        </motion.h1>

        {/* Role */}
        <motion.div {...fadeUp(0.3)} className="flex items-center justify-center gap-3 mb-6">
          <span className="text-xl md:text-2xl font-semibold text-gradient">
            {personalInfo.role}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p {...fadeUp(0.4)} className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.personal.tagline}
        </motion.p>

        {/* Tech stack pills */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap justify-center gap-2 mb-12">
          {["React 18", "Next.js", "TypeScript", "Material-UI", "Redux Toolkit"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono font-medium rounded-md border border-border bg-card/50 text-text-secondary hover:border-primary/50 hover:text-primary-light transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.6)} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-all duration-200 glow hover:scale-105"
          >
            {t.hero.viewWork}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border border-border text-text-secondary hover:text-text-primary hover:border-primary/50 font-semibold transition-all duration-200 hover:bg-card/50"
          >
            {t.hero.getInTouch}
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-border text-text-secondary hover:text-text-primary hover:border-primary/50 font-semibold transition-all duration-200 hover:bg-card/50 flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            GitHub
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted/40 hover:text-text-muted/70 transition-colors group"
      >
        <span className="text-[10px] font-mono tracking-[0.2em] uppercase">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-current flex items-start justify-center pt-1.5"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-current"
          />
        </motion.div>
      </motion.a>
    </section>
  );
}
// test auto deploy
