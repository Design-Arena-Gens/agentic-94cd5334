"use client";

import { motion } from "framer-motion";

const toggles = [
  { id: "ai-native", label: "ai native" },
  { id: "agent-guide", label: "agent guide" },
  { id: "deep-plan", label: "deep plan mode" }
];

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(67,243,255,0.15),rgba(3,7,18,0.4)_45%,transparent_70%)]" />
      <div className="absolute inset-0">
        <div className="absolute -left-32 -top-36 h-96 w-96 rounded-full bg-accent-soft blur-3xl" />
        <div className="absolute right-24 -top-48 h-[28rem] w-[28rem] rounded-full bg-[rgba(31,139,213,0.3)] blur-[160px]" />
        <div className="absolute -bottom-24 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[rgba(67,243,255,0.2)] blur-[150px]" />
      </div>
      <section className="relative mx-auto flex min-h-screen w-full max-w-[1100px] flex-col items-center px-6 pb-24 pt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="glow"
        >
          <div className="relative rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm tracking-[0.3em] uppercase text-white/70 shadow-glass backdrop-blur-sm">
            NovaForge
          </div>
          <h1 className="relative mt-4 max-w-3xl text-balance text-5xl font-semibold leading-tight text-white md:text-6xl">
            The next-generation, AI-native canvas for building full-stack
            products without touching code.
          </h1>
          <p className="relative mx-auto mt-6 max-w-2xl text-lg text-white/70">
            Draft your vision, orchestrate agent-guided workflows, and switch on
            deep planning for production-ready launches in minutes.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-20 flex w-full justify-center"
        >
          <div className="relative w-full max-w-[900px] px-4 md:w-2/3 md:px-0">
            <div className="pointer-events-none absolute inset-0 rounded-[36px] border border-white/10 bg-gradient-to-b from-white/10 via-white/5 to-white/[0.04] opacity-90 shadow-glass backdrop-blur-xl" />
            <div className="pointer-events-none absolute inset-[18px] rounded-[28px] border border-white/5 bg-white/5 opacity-60 blur-3xl" />
            <div className="pointer-events-none absolute -left-10 top-8 h-28 w-28 rounded-full bg-accent/40 blur-3xl opacity-70" />
            <div className="pointer-events-none absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-[rgba(59,130,246,0.3)] blur-[90px]" />
            <label
              htmlFor="project"
              className="relative mb-4 block text-left text-xs font-semibold uppercase tracking-[0.6em] text-white/50 md:text-sm"
            >
              Compose your build request
            </label>
            <textarea
              id="project"
              placeholder="Tell NovaForge about your dream product — user journeys, data models, integrations, desired agents…"
              className="relative w-full resize-none rounded-[28px] border border-white/15 bg-white/10 px-8 py-10 text-base text-white shadow-subtle outline-none transition focus:border-accent/80 focus:shadow-aura focus:outline-none focus:ring-0 md:px-10 md:text-lg"
              style={{
                minHeight: "clamp(220px, 26vw, 340px)",
                backdropFilter: "blur(24px)"
              }}
            />
            <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
              {toggles.map((toggle) => (
                <motion.button
                  key={toggle.id}
                  whileHover={{
                    scale: 1.04,
                    y: -1
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden rounded-full border border-white/10 bg-white/10 px-6 py-2 text-sm font-medium text-white/70 transition-colors hover:border-accent/70 hover:bg-accent/20 hover:text-white shadow-subtle"
                >
                  <span className="relative z-10 tracking-wide uppercase">
                    {toggle.label}
                  </span>
                  <span className="absolute inset-0 translate-y-10 scale-125 bg-accent-soft opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100" />
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
