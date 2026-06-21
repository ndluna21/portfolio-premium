"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { timeline } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

const typeConfig = {
  work: { color: "bg-primary", icon: "💼" },
  learning: { color: "bg-accent", icon: "📚" },
  education: { color: "bg-secondary", icon: "🎓" },
};

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const t = translations[lang].timeline;

  return (
    <section id="timeline" className="py-24 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm mb-3">{t.sectionLabel}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">{t.title}</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8 pl-16">
            {timeline.map((item, idx) => {
              const config = typeConfig[item.type as keyof typeof typeConfig];
              const tItem = t.items[idx];
              const typeLabel = t.typeLabels[item.type as keyof typeof t.typeLabels];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.12 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className={`absolute -left-[42px] w-4 h-4 rounded-full ${config.color} border-2 border-background shadow-lg`} />

                  <div className="p-5 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm font-bold text-primary">
                        {item.year}
                      </span>
                      <span className="text-xs border border-border px-2 py-0.5 rounded-md text-text-muted">
                        {config.icon} {typeLabel}
                      </span>
                    </div>
                    <h3 className="font-semibold text-text-primary mb-1.5">
                      {tItem ? tItem.title : item.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {tItem ? tItem.description : item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
