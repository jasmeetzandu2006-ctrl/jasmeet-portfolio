"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Retail Sales Performance Analytics",
    description: "Analyzed multi-region retail sales data using SQL and Excel to evaluate revenue trends, profit margins, and category-wise performance. Built an interactive Power BI dashboard with KPI filters tracking monthly sales trends, top-performing products, and regional performance.",
    tag: "Excel, SQL, Power BI",
    image: "/images/project_retail_sales.jpg",
    accent: "from-orange-500/20 to-amber-500/10",
    dot: "bg-orange-400"
  },
  {
    id: 2,
    title: "HR Attrition & Workforce Analytics",
    description: "Analyzed workforce data using SQL and Excel to identify key drivers of employee attrition by department, age, salary, and job role. Designed Power BI dashboards visualizing attrition KPIs, department-wise turnover, and workforce distribution.",
    tag: "Excel, SQL, Power BI",
    image: "/images/project_hr_attrition.jpg",
    accent: "from-cyan-500/20 to-blue-500/10",
    dot: "bg-cyan-400"
  },
  {
    id: 3,
    title: "E-Commerce Business Intelligence",
    description: "Analyzed e-commerce transactional data using SQL and Excel to evaluate customer behavior, product performance, and revenue trends. Built Power BI dashboards tracking total sales, average order value, customer segmentation, and product profitability.",
    tag: "Excel, SQL, Power BI",
    image: "/images/project_ecommerce.jpg",
    accent: "from-violet-500/20 to-purple-500/10",
    dot: "bg-violet-400"
  }
];

const experience = [
  {
    id: 1,
    title: "PwC US Management Consulting",
    description: "Virtual Experience Program. Analyzed business and operational data using structured frameworks to identify root causes of inefficiency and inform process improvement. Built executive-level reports consolidating performance metrics.",
    tag: "Jan 2026",
    accent: "from-orange-500/15 to-transparent",
    gridColor: "rgba(251,146,60,0.06)"
  },
  {
    id: 2,
    title: "McKinsey Forward Learning Program",
    description: "Completed a 10-week problem-solving program applying consulting frameworks and hypothesis-driven analysis to business cases. Conducted case-based analysis on an airline strategy case using trend analysis and forecasting.",
    tag: "Dec 2025",
    accent: "from-sky-500/15 to-transparent",
    gridColor: "rgba(56,189,248,0.06)"
  }
];

const skillCategories = [
  {
    label: "Technical Skills",
    icon: "⚙️",
    color: "border-orange-500/30 bg-orange-500/5",
    tagColor: "border-orange-400/40 bg-orange-400/10 text-orange-200",
    skills: [
      "Microsoft Excel",
      "Pivot Tables",
      "VLOOKUP / XLOOKUP",
      "Power Query",
      "Basic SQL",
      "Power BI",
      "Data Visualization",
      "Process Mapping",
      "Data Analysis",
      "Business Requirement Gathering"
    ]
  },
  {
    label: "Soft Skills",
    icon: "🧠",
    color: "border-cyan-500/30 bg-cyan-500/5",
    tagColor: "border-cyan-400/40 bg-cyan-400/10 text-cyan-200",
    skills: [
      "Analytical Thinking",
      "Problem Solving",
      "Requirement Gathering",
      "Attention to Detail",
      "Team Collaboration",
      "Communication Skills"
    ]
  },
  {
    label: "Languages",
    icon: "🌐",
    color: "border-violet-500/30 bg-violet-500/5",
    tagColor: "border-violet-400/40 bg-violet-400/10 text-violet-200",
    skills: [
      "English — Proficient",
      "Hindi — Native",
      "French — A2/B1 (Learning)"
    ]
  }
];

const certifications = [
  "SQL for Data Analysis — Simplilearn (2026)",
  "Microsoft Power BI Certification (2026)",
  "Excel Automation Using ChatGPT — Simplilearn (2025)",
  "Fundamentals of Digital Marketing — Google (2025)"
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#121212] min-h-screen py-32 px-8 md:px-24 z-20 overflow-hidden">

      {/* ── Full-section minimalistic background ── */}
      {/* Large line grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Top radial glow — orange */}
      <div
        className="absolute -top-48 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(251,146,60,0.07) 0%, transparent 70%)",
        }}
      />
      {/* Mid-page violet glow */}
      <div
        className="absolute top-1/2 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
        }}
      />
      {/* Bottom cyan glow */}
      <div
        className="absolute bottom-0 -left-48 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.05) 0%, transparent 70%)",
        }}
      />
      {/* Diagonal faint line accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 80px, rgba(255,255,255,0.012) 80px, rgba(255,255,255,0.012) 81px)",
        }}
      />

      <div className="max-w-7xl mx-auto space-y-32">

        {/* ── PROJECTS ── */}
        <div>
          <div className="mb-12">
            <p className="text-white/40 uppercase tracking-[0.3em] text-sm mb-3">Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              Projects
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Analytical dashboards and business intelligence solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                key={project.id}
                className="group relative h-auto min-h-[400px] md:h-[460px] rounded-2xl overflow-hidden border border-white/[0.08] cursor-pointer"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                {/* Minimalistic dot-grid overlay */}
                <div className="absolute inset-0"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "28px 28px"
                  }}
                />

                {/* Dark gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20 pointer-events-none" />

                {/* Accent color glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="relative z-10 p-8 h-full flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-1">
                  {/* dot indicator */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`w-2 h-2 rounded-full ${project.dot}`} />
                    <span className="px-3 py-1 rounded-full border border-white/15 bg-white/8 text-white/70 text-xs font-medium backdrop-blur-sm">
                      {project.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-[1.7rem] font-bold text-white mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── EXPERIENCE ── */}
        <div>
          <div className="mb-12">
            <p className="text-white/40 uppercase tracking-[0.3em] text-sm mb-3">Career</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              Experience & Programs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experience.map((exp, index) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                key={exp.id}
                className="group relative h-auto min-h-[300px] rounded-2xl overflow-hidden border border-white/[0.08] cursor-pointer"
              >
                {/* Minimalistic CSS grid background */}
                <div className="absolute inset-0 bg-[#0e0e0e]" />
                <div className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(${exp.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${exp.gridColor} 1px, transparent 1px)`,
                    backgroundSize: "40px 40px"
                  }}
                />

                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.accent} pointer-events-none`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/[0.02] pointer-events-none" />

                <div className="relative z-10 p-8 h-full flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-1">
                  <span className="inline-block px-3 py-1 rounded-full border border-white/15 bg-white/5 text-white/60 text-xs font-medium mb-4 w-fit">
                    {exp.tag}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {exp.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── SKILLS ── */}
        <div>
          <div className="mb-12">
            <p className="text-white/40 uppercase tracking-[0.3em] text-sm mb-3">Expertise</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((cat, ci) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.15 }}
                key={cat.label}
                className={`relative rounded-2xl border p-6 ${cat.color} overflow-hidden`}
              >
                {/* subtle dot grid inside card */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "20px 20px"
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="text-xl">{cat.icon}</span>
                    <h3 className="text-lg font-semibold text-white/90">{cat.label}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, si) => (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: ci * 0.1 + si * 0.04 }}
                        key={skill}
                        className={`px-3 py-1.5 rounded-full border text-xs md:text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/10 ${cat.tagColor}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CERTIFICATIONS ── */}
        <div>
          <div className="mb-12">
            <p className="text-white/40 uppercase tracking-[0.3em] text-sm mb-3">Credentials</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="relative flex items-center gap-4 px-6 py-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md overflow-hidden group hover:border-white/20 hover:bg-white/[0.06] transition-all"
              >
                {/* Minimalistic left accent line */}
                <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-orange-400 to-orange-600 rounded-l-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
                <span className="text-white/80 text-base md:text-lg pl-2">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
