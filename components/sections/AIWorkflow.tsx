"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aiWorkflow } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function AIWorkflow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const t = translations[lang].aiWorkflow;

  return (
    <section id="ai-workflow" className="py-24 px-6 bg-surface/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-mono text-sm mb-3">{t.sectionLabel}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">{t.title}</h2>
          <p className="text-text-secondary mt-3 max-w-2xl mx-auto">{t.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {aiWorkflow.tools.map((tool, idx) => {
            const tTool = t.tools[idx];
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + idx * 0.1 }}
                className="p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">{tool.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-text-primary">{tool.name}</h3>
                      <span className="text-xs text-text-muted border border-border px-2 py-0.5 rounded-md">
                        {tTool ? tTool.role : tool.role}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {tTool ? tTool.use : tool.use}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Philosophy callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="p-8 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent"
        >
          <div className="flex gap-4">
            <span className="text-primary text-3xl shrink-0">💡</span>
            <div>
              <h3 className="font-semibold text-text-primary mb-2">{t.philosophyLabel}</h3>
              <p className="text-text-secondary leading-relaxed">{t.philosophy}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
