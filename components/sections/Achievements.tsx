"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { achievements } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const t = translations[lang].achievements;

  return (
    <section id="achievements" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm mb-3">{t.sectionLabel}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">{t.title}</h2>
          <p className="text-text-secondary mt-3 max-w-2xl mx-auto">{t.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievements.map((item, idx) => {
            const tItem = t.items[idx];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/30 transition-all duration-300 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-xs font-mono text-accent border border-accent/30 bg-accent/10 px-2 py-0.5 rounded-md">
                    {tItem ? tItem.impact : item.impact}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-text-primary leading-snug">
                  {tItem ? tItem.title : item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">
                  {tItem ? tItem.description : item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
