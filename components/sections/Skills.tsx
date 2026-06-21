"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const levelStyle = {
  daily: "border-emerald-500/40 text-emerald-300 bg-emerald-500/10",
  proficient: "border-primary/30 text-primary-light bg-primary/10",
  learning: "border-border text-text-muted bg-white/5",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const t = translations[lang].skills;

  return (
    <section id="skills" className="py-24 px-6 bg-surface/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
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
          {skills.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Category label */}
              <div className="sm:w-44 shrink-0 flex items-center gap-2 sm:pt-1">
                <span className="text-lg">{group.icon}</span>
                <span className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
                  {group.category}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg border transition-colors ${levelStyle[skill.level]}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex items-center gap-6 text-xs text-text-muted"
        >
          <span className="font-mono uppercase tracking-wider">{t.allTech}:</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            {t.levels.daily}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            {t.levels.proficient}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-border" />
            {t.levels.learning}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
