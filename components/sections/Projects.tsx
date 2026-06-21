"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<"all" | "featured">("featured");
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  const typeColors: Record<string, string> = {
    hook: "text-accent border-accent/30 bg-accent/10",
    app: "text-secondary border-secondary/30 bg-secondary/10",
  };

  const displayed = filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="py-24 px-6 bg-surface/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-primary font-mono text-sm mb-3">{t.sectionLabel}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{t.title}</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">{t.description}</p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3 mb-10"
        >
          {(["featured", "all"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? "bg-primary text-white"
                  : "border border-border text-text-secondary hover:text-text-primary hover:border-primary/40"
              }`}
            >
              {f === "featured" ? t.featuredLabel : t.allProjectsLabel}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {displayed.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + idx * 0.1 }}
              className={`flex flex-col rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 ${
                project.featured ? "shadow-lg shadow-primary/5" : ""
              }`}
            >
              {/* Card header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`px-2 py-0.5 text-xs font-mono rounded-md border ${typeColors[project.type]}`}
                      >
                        {t.typeLabels[project.type as keyof typeof t.typeLabels]}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-0.5 text-xs font-mono rounded-md border border-yellow-500/30 text-yellow-400 bg-yellow-500/10">
                          {t.featuredLabel}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-text-primary leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-text-muted mt-1">
                      {(t as typeof t & { items?: { subtitle: string }[] }).items?.[project.id - 1]?.subtitle ?? project.subtitle}
                    </p>
                  </div>
                  <div className="text-2xl shrink-0">{project.type === "hook" ? "🪝" : "🖥️"}</div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed">
                  {(t as typeof t & { items?: { description: string }[] }).items?.[project.id - 1]?.description ?? project.description}
                </p>
              </div>

              {/* Highlights */}
              {project.highlights && (
                <div className="px-6 pb-4 space-y-2">
                  {((t as typeof t & { items?: { highlights?: string[] }[] }).items?.[project.id - 1]?.highlights ?? project.highlights).slice(0, 3).map((h, i) => (
                    <div key={i} className="flex gap-2.5">
                      <span className="text-primary text-xs mt-1 shrink-0">▹</span>
                      <p className="text-text-muted text-xs leading-relaxed">{h}</p>
                    </div>
                  ))}
                  {project.highlights.length > 3 && (
                    <p className="text-xs text-text-muted pl-5">
                      {t.moreHighlights.replace("{n}", String(project.highlights.length - 3))}
                    </p>
                  )}
                </div>
              )}

              {/* Tech stack */}
              <div className="mt-auto px-6 pb-6 pt-4 border-t border-border/50">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-border/50 text-text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
