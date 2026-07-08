"use client";

import { motion } from "framer-motion";

const tools = [
  {
    name: "Microsoft Excel",
    color: "#217346",
    glowColor: "rgba(33,115,70,0.35)",
    borderColor: "rgba(33,115,70,0.4)",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect width="48" height="48" rx="8" fill="#217346"/>
        <path d="M28 8H40a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H28V8Z" fill="#1E6B3F"/>
        <path d="M6 14l16-2v24L6 34V14Z" fill="#33C27F"/>
        <text x="8" y="30" fontFamily="Arial" fontWeight="bold" fontSize="14" fill="white">X</text>
        <line x1="28" y1="16" x2="42" y2="16" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
        <line x1="28" y1="24" x2="42" y2="24" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
        <line x1="28" y1="32" x2="42" y2="32" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
        <rect x="28" y="8" width="7" height="8" fill="rgba(255,255,255,0.1)"/>
        <rect x="35" y="8" width="7" height="8" fill="rgba(255,255,255,0.05)"/>
        <rect x="28" y="16" width="7" height="8" fill="rgba(255,255,255,0.05)"/>
        <rect x="35" y="16" width="7" height="8" fill="rgba(255,255,255,0.1)"/>
      </svg>
    ),
  },
  {
    name: "Microsoft Word",
    color: "#2B579A",
    glowColor: "rgba(43,87,154,0.35)",
    borderColor: "rgba(43,87,154,0.4)",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect width="48" height="48" rx="8" fill="#2B579A"/>
        <path d="M28 8H40a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H28V8Z" fill="#1E3F7A"/>
        <path d="M6 14l16-2v24L6 34V14Z" fill="#4A90D9"/>
        <text x="7.5" y="30" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="white">W</text>
        <line x1="28" y1="16" x2="42" y2="16" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
        <line x1="28" y1="21" x2="42" y2="21" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
        <line x1="28" y1="26" x2="42" y2="26" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
        <line x1="28" y1="31" x2="42" y2="31" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
        <line x1="28" y1="36" x2="38" y2="36" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
      </svg>
    ),
  },
  {
    name: "PowerPoint",
    color: "#C43E1C",
    glowColor: "rgba(196,62,28,0.35)",
    borderColor: "rgba(196,62,28,0.4)",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect width="48" height="48" rx="8" fill="#C43E1C"/>
        <path d="M28 8H40a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H28V8Z" fill="#A03015"/>
        <path d="M6 14l16-2v24L6 34V14Z" fill="#E87F5A"/>
        <text x="7" y="30" fontFamily="Arial" fontWeight="bold" fontSize="13" fill="white">P</text>
        <rect x="30" y="13" width="10" height="8" rx="2" fill="rgba(255,255,255,0.15)"/>
        <line x1="29" y1="26" x2="42" y2="26" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7"/>
        <line x1="29" y1="30" x2="42" y2="30" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7"/>
        <line x1="29" y1="34" x2="38" y2="34" stroke="rgba(255,255,255,0.25)" strokeWidth="0.7"/>
      </svg>
    ),
  },
  {
    name: "Power BI",
    color: "#F2C811",
    glowColor: "rgba(242,200,17,0.3)",
    borderColor: "rgba(242,200,17,0.35)",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect width="48" height="48" rx="8" fill="#1A1A1A"/>
        <rect x="8" y="28" width="7" height="13" rx="2" fill="#F2C811"/>
        <rect x="18" y="20" width="7" height="21" rx="2" fill="#F2C811" opacity="0.85"/>
        <rect x="28" y="14" width="7" height="27" rx="2" fill="#F2C811" opacity="0.7"/>
        <rect x="38" y="8" width="4" height="33" rx="2" fill="#F2C811" opacity="0.5"/>
        <circle cx="11.5" cy="24" r="3" fill="#F2C811"/>
        <circle cx="21.5" cy="16" r="3" fill="#F2C811" opacity="0.85"/>
        <circle cx="31.5" cy="10" r="3" fill="#F2C811" opacity="0.7"/>
        <path d="M11.5 24 L21.5 16 L31.5 10" stroke="#F2C811" strokeWidth="1.5" opacity="0.4"/>
      </svg>
    ),
  },
  {
    name: "SQL",
    color: "#336791",
    glowColor: "rgba(51,103,145,0.35)",
    borderColor: "rgba(51,103,145,0.4)",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect width="48" height="48" rx="8" fill="#1A1A2E"/>
        <ellipse cx="24" cy="14" rx="14" ry="6" fill="#336791"/>
        <rect x="10" y="14" width="28" height="8" fill="#336791"/>
        <ellipse cx="24" cy="22" rx="14" ry="6" fill="#4A90C4"/>
        <rect x="10" y="22" width="28" height="8" fill="#336791"/>
        <ellipse cx="24" cy="30" rx="14" ry="6" fill="#4A90C4"/>
        <path d="M10 30 Q10 36 24 38 Q38 36 38 30" fill="#336791"/>
        <ellipse cx="24" cy="38" rx="14" ry="4" fill="#4A90C4"/>
      </svg>
    ),
  },
  {
    name: "CapCut",
    color: "#000000",
    glowColor: "rgba(255,255,255,0.15)",
    borderColor: "rgba(255,255,255,0.25)",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
        <rect width="48" height="48" rx="8" fill="#0D0D0D"/>
        <rect x="10" y="10" width="12" height="28" rx="3" fill="white"/>
        <rect x="26" y="10" width="12" height="28" rx="3" fill="white"/>
        <rect x="14" y="14" width="4" height="4" rx="1" fill="#0D0D0D"/>
        <rect x="14" y="30" width="4" height="4" rx="1" fill="#0D0D0D"/>
        <rect x="30" y="14" width="4" height="4" rx="1" fill="#0D0D0D"/>
        <rect x="30" y="30" width="4" height="4" rx="1" fill="#0D0D0D"/>
        <rect x="22" y="22" width="4" height="4" rx="1" fill="white" opacity="0.5"/>
      </svg>
    ),
  },
];

export default function Tools() {
  return (
    <section className="relative w-full bg-[#121212] py-24 px-8 md:px-24 z-20 overflow-hidden">

      {/* ── Full-section minimalistic background ── */}
      {/* Large line grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial centre glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(242,200,17,0.04) 0%, transparent 70%)",
        }}
      />
      {/* Subtle top-left corner accent */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(33,115,70,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Subtle bottom-right corner accent */}
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(43,87,154,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-white/40 uppercase tracking-[0.3em] text-sm mb-3">Toolbox</p>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Tools
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.04 }}
              className="group relative flex flex-col items-center justify-center gap-4 p-6 rounded-2xl border bg-white/[0.03] backdrop-blur-md cursor-pointer transition-all duration-300 overflow-hidden"
              style={{
                borderColor: tool.borderColor,
                boxShadow: `0 0 0 0 ${tool.glowColor}`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${tool.glowColor}, 0 0 0 1px ${tool.borderColor}`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${tool.glowColor}`;
              }}
            >
              {/* Subtle dot-grid bg */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />

              {/* Glow spot on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at 50% 100%, ${tool.glowColor}, transparent 70%)`,
                }}
              />

              <div className="relative z-10 drop-shadow-md">
                {tool.logo}
              </div>
              <p className="relative z-10 text-white/70 text-xs md:text-sm font-medium text-center leading-tight group-hover:text-white transition-colors">
                {tool.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
