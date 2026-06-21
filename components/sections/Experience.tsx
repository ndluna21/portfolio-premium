"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const t = translations[lang].experience;

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm mb-3">{t.sectionLabel}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">{t.title}</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => {
            const tItem = t.items[idx];
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="relative p-8 rounded-2xl border border-border bg-card/50 hover:border-primary/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-light font-semibold hover:text-primary transition-colors"
                      >
                        {exp.company}
                      </a>
                      <span className="text-text-muted">·</span>
                      <span className="text-text-muted text-sm">{exp.location}</span>
                    </div>
                  </div>
                  <span className="text-sm font-mono text-text-muted border border-border px-3 py-1 rounded-lg whitespace-nowrap self-start">
                    {exp.period}
                  </span>
                </div>

                <p className="text-text-secondary leading-relaxed mb-6">
                  {tItem ? tItem.description : exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-3 mb-6">
                  {(tItem ? tItem.achievements : exp.achievements).map((achievement, i) => (
                    <div key={i} className="flex gap-3">
                      <span className="text-primary mt-1.5 shrink-0">▹</span>
                      <p className="text-text-secondary text-sm leading-relaxed">{achievement}</p>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-primary/10 text-primary-light border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Accent border */}
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-primary to-secondary" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
