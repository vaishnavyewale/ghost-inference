
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  Layers3,
  Mail,
  Menu,
  Radio,
  Terminal,
  Workflow,
  X,
  Zap,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Sentinel AI",
    category: "COMPUTER VISION",
    description:
      "Exploring real-time incident detection through computer vision, with a focus on making visual intelligence useful in real environments.",
    tags: ["Python", "PyTorch", "OpenCV"],
    status: "IN DEVELOPMENT",
    symbol: Radio,
    className: "sentinel",
    href: "#contact",
  },
  {
    number: "02",
    name: "Skill Gap Analyzer",
    category: "APPLIED AI",
    description:
      "A learning intelligence system that analyzes conversations to identify skill gaps and generate personalized assessments.",
    tags: ["Python", "Embeddings", "LLMs"],
    status: "PROJECT IN PROGRESS",
    symbol: Activity,
    className: "analyzer",
    href: "#contact",
  },
  {
    number: "03",
    name: "Deployment Lab",
    category: "DEVOPS & INFRASTRUCTURE",
    description:
      "A practical exploration of reliable application deployment, traffic switching, health checks, and operational workflows.",
    tags: ["Docker", "Linux", "CI/CD"],
    status: "LEARNING LAB",
    symbol: Workflow,
    className: "deployment",
    href: "#contact",
  },
  {
    number: "04",
    name: "CampusHub",
    category: "WEB3 ENGINEERING",
    description:
      "A campus event registration application exploring smart contracts, decentralized interactions, and a modern web interface.",
    tags: ["Solidity", "React", "Ethers.js"],
    status: "EXPLORATION",
    symbol: Boxes,
    className: "campus",
    href: "#contact",
  },
];

const architecture = [
  {
    id: "01",
    name: "Input & data",
    title: "Start with the signal.",
    description:
      "Collect inputs, validate data, and establish a reliable path from raw information to a usable representation.",
    detail: "DATA INGESTION / VALIDATION",
    icon: Radio,
  },
  {
    id: "02",
    name: "Intelligence",
    title: "Turn data into predictions.",
    description:
      "A model processes its input and produces a prediction. Preprocessing, evaluation, and confidence analysis help make that result useful.",
    detail: "PREPROCESSING / MODEL INFERENCE",
    icon: Cpu,
  },
  {
    id: "03",
    name: "Application layer",
    title: "Make intelligence usable.",
    description:
      "Application logic connects predictions to APIs, interfaces, and downstream actions, with appropriate error handling.",
    detail: "API / BUSINESS LOGIC",
    icon: Layers3,
  },
  {
    id: "04",
    name: "Deployment",
    title: "Make it work reliably.",
    description:
      "Testing, deployment, health checks, logging, and monitoring help engineers understand how a system behaves outside development.",
    detail: "DEPLOYMENT / OBSERVABILITY",
    icon: Activity,
  },
];

const capabilities = [
  {
    number: "01",
    title: "Artificial intelligence",
    subtitle: "Learning systems",
    skills: ["Python", "Machine learning", "Neural networks", "PyTorch"],
    icon: Cpu,
  },
  {
    number: "02",
    title: "Computer vision",
    subtitle: "Visual intelligence",
    skills: ["OpenCV", "Image processing", "Object detection", "OCR"],
    icon: Radio,
  },
  {
    number: "03",
    title: "Software engineering",
    subtitle: "Interfaces & applications",
    skills: ["React", "Next.js", "TypeScript", "REST APIs"],
    icon: Code2,
  },
  {
    number: "04",
    title: "Systems & DevOps",
    subtitle: "Reliable delivery",
    skills: ["Linux", "Docker", "Git", "CI/CD fundamentals"],
    icon: Terminal,
  },
];

const notes = [
  {
    number: "NOTE_001",
    title: "From model accuracy to real-world reliability",
    category: "AI SYSTEMS",
    description:
      "Why a useful machine-learning system needs more than a good prediction.",
  },
  {
    number: "NOTE_002",
    title: "Understanding the path from code to deployment",
    category: "DEVOPS",
    description:
      "A closer look at environments, deployment strategies, and operational checks.",
  },
  {
    number: "NOTE_003",
    title: "Designing systems as connected layers",
    category: "ARCHITECTURE",
    description:
      "How separating responsibilities makes software easier to understand and evolve.",
  },
];

function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">
          <span className="eyebrow-index">{index}</span>
          <span>{label}</span>
        </div>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default function Home() {
  const [activeLayer, setActiveLayer] = useState("02");
  const [menuOpen, setMenuOpen] = useState(false);
  const selectedLayer =
    architecture.find((layer) => layer.id === activeLayer) ?? architecture[1];

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">
            <Zap size={17} strokeWidth={2.5} />
          </span>
          <span>
            ENGINEERING<span className="brand-muted"> SIGNAL</span>
          </span>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#systems" onClick={closeMenu}>Systems</a>
          <a href="#capabilities" onClick={closeMenu}>Capabilities</a>
          <a href="#notes" onClick={closeMenu}>Field notes</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section className="hero page-shell" id="home">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="availability">
            <span className="status-dot" />
            <span>ENGINEERING MY NEXT CHAPTER</span>
          </div>

          <h1>
            Ideas are
            <br />
            everywhere.
            <br />
            <span className="headline-accent">Execution</span>
            <br />
            is the signal.
          </h1>

          <p className="hero-description">
            I&apos;m an engineering student exploring the intersection of
            artificial intelligence, computer vision, and reliable software
            systems — one meaningful project at a time.
          </p>

          <div className="hero-actions">
            <a href="#work" className="button-primary">
              Explore my work <ArrowUpRight size={17} />
            </a>
            <a href="#contact" className="button-secondary">
              Get in touch <ArrowDownRight size={17} />
            </a>
          </div>

          <div className="hero-footnote">
            <span className="mono">CURRENT FOCUS</span>
            <span>AI / ML &nbsp;·&nbsp; COMPUTER VISION &nbsp;·&nbsp; SYSTEMS</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="visual-topline">
            <span>ENGINEERING / 001</span>
            <span className="live-indicator"><i /> LIVE EXPLORATION</span>
          </div>

          <div className="visual-grid">
            <div className="orbital orbital-outer" />
            <div className="orbital orbital-middle" />
            <div className="orbital orbital-inner" />
            <div className="orbit-core">
              <Zap size={32} />
            </div>
            <span className="orbit-label orbit-label-one">INTELLIGENCE</span>
            <span className="orbit-label orbit-label-two">SYSTEMS</span>
            <span className="orbit-label orbit-label-three">EXECUTION</span>
            <span className="orbit-node node-one" />
            <span className="orbit-node node-two" />
            <span className="orbit-node node-three" />
            <span className="orbit-node node-four" />
          </div>

          <div className="visual-bottom">
            <div>
              <span className="mono">DESIGN PHILOSOPHY</span>
              <p>Understand. Build. Measure. Improve.</p>
            </div>
            <span className="visual-coordinate">19° / 72°</span>
          </div>
        </motion.div>

        <div className="hero-index">
          <span>PORTFOLIO / 2026</span>
          <span>01 — 05</span>
        </div>
      </section>

      <section className="ticker" aria-label="Areas of interest">
        <div className="ticker-track">
          {[0, 1].map((copy) => (
            <div className="ticker-group" key={copy} aria-hidden={copy === 1}>
              <span>ARTIFICIAL INTELLIGENCE</span><i />
              <span>COMPUTER VISION</span><i />
              <span>SOFTWARE ENGINEERING</span><i />
              <span>DEVOPS & INFRASTRUCTURE</span><i />
              <span>CONTINUOUS LEARNING</span><i />
            </div>
          ))}
        </div>
      </section>

      <section className="section page-shell" id="work">
        <SectionHeading
          index="01"
          label="SELECTED WORK"
          title="Ideas in motion."
          description="A growing collection of experiments, applications, and engineering projects. Each one is an opportunity to solve a real problem and learn something worth keeping."
        />

        <div className="project-grid">
          {projects.map((project, index) => {
            const Icon = project.symbol;
            return (
              <motion.article
                key={project.number}
                className={`project-card ${project.className}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="project-art">
                  <span className="project-number">{project.number} / PROJECT</span>
                  <div className={`project-graphic graphic-${index + 1}`}>
                    <div className="graphic-ring ring-one" />
                    <div className="graphic-ring ring-two" />
                    <div className="graphic-ring ring-three" />
                    <div className="graphic-center"><Icon size={36} strokeWidth={1.25} /></div>
                    <span className="graphic-cross cross-one">+</span>
                    <span className="graphic-cross cross-two">+</span>
                    <span className="graphic-cross cross-three">+</span>
                  </div>
                  <span className="project-category">{project.category}</span>
                </div>

                <div className="project-body">
                  <div className="project-title-row">
                    <h3>{project.name}</h3>
                    <a href={project.href} aria-label={`Ask about ${project.name}`}>
                      <ArrowUpRight size={19} />
                    </a>
                  </div>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-status">
                    <span className="status-dot" />
                    {project.status}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="section-endnote">
          <span className="mono">MORE EXPERIMENTS. MORE ITERATIONS.</span>
          <span>THE WORK IS NEVER REALLY DONE <ArrowRight size={14} /></span>
        </div>
      </section>

      <section className="systems-section" id="systems">
        <div className="page-shell section">
          <SectionHeading
            index="02"
            label="SYSTEMS THINKING"
            title="Follow the signal."
            description="Good engineering is about more than individual components. Explore how the layers of a typical intelligent application fit together."
          />

          <div className="explorer">
            <div className="explorer-sidebar">
              <div className="explorer-label">
                <Workflow size={16} />
                SYSTEM EXPLORER
              </div>
              <div className="architecture-list">
                {architecture.map((layer, index) => {
                  const Icon = layer.icon;
                  const active = activeLayer === layer.id;
                  return (
                    <button
                      key={layer.id}
                      className={`architecture-item ${active ? "architecture-active" : ""}`}
                      onClick={() => setActiveLayer(layer.id)}
                      aria-pressed={active}
                    >
                      <span className="architecture-index">{layer.id}</span>
                      <Icon size={17} />
                      <span>{layer.name}</span>
                      <ChevronRight className="architecture-chevron" size={15} />
                      {index < architecture.length - 1 && <span className="connector-line" />}
                    </button>
                  );
                })}
              </div>
              <div className="explorer-footnote">
                <span className="status-dot" />
                INTERACTIVE ARCHITECTURE
              </div>
            </div>

            <div className="explorer-detail">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedLayer.id}
                  className="layer-detail"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="detail-topline">
                    <span>ARCHITECTURE / LAYER {selectedLayer.id}</span>
                    <span>0{Number(selectedLayer.id)} — 04</span>
                  </div>

                  <div className="detail-icon"><selectedLayer.icon size={30} /></div>
                  <span className="eyebrow detail-eyebrow">{selectedLayer.name.toUpperCase()}</span>
                  <h3>{selectedLayer.title}</h3>
                  <p>{selectedLayer.description}</p>

                  <div className="detail-code">
                    <span className="mono">RESPONSIBILITY</span>
                    <span>{selectedLayer.detail}</span>
                    <Check size={15} />
                  </div>

                  <div className="detail-navigation">
                    <span>SELECT A LAYER TO EXPLORE</span>
                    <div>
                      {architecture.map((layer) => (
                        <button
                          key={layer.id}
                          className={activeLayer === layer.id ? "detail-dot active-detail-dot" : "detail-dot"}
                          aria-label={`Explore ${layer.name}`}
                          onClick={() => setActiveLayer(layer.id)}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <p className="explorer-disclaimer">
            Conceptual architecture for learning and exploration — not a claim
            that every layer is already implemented in a production system.
          </p>
        </div>
      </section>

      <section className="section page-shell" id="capabilities">
        <SectionHeading
          index="03"
          label="CAPABILITIES"
          title="A toolkit in progress."
          description="I prefer understanding how technologies fit together over collecting names on a résumé. These are the areas I am building, practicing, and exploring."
        />

        <div className="capability-grid">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <article className="capability-card" key={capability.number}>
                <div className="capability-top">
                  <span className="mono">{capability.number}</span>
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.subtitle}</p>
                <div className="capability-skills">
                  {capability.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            );
          })}
        </div>

        <div className="learning-banner">
          <div className="learning-icon"><Zap size={20} /></div>
          <div>
            <span className="eyebrow">THE OPERATING PRINCIPLE</span>
            <h3>Learn deeply. Build deliberately.</h3>
            <p>Curiosity starts the process. Consistent implementation turns it into engineering experience.</p>
          </div>
          <span className="learning-mark">∞</span>
        </div>
      </section>

      <section className="notes-section" id="notes">
        <div className="page-shell section">
          <SectionHeading
            index="04"
            label="FIELD NOTES"
            title="Thinking out loud."
            description="Engineering notes about the ideas, trade-offs, and lessons behind the work."
          />

          <div className="notes-list">
            {notes.map((note) => (
              <article className="note-row" key={note.number}>
                <span className="note-number mono">{note.number}</span>
                <div className="note-content">
                  <span className="note-category">{note.category}</span>
                  <h3>{note.title}</h3>
                  <p>{note.description}</p>
                </div>
                <span className="note-arrow"><ArrowUpRight size={20} /></span>
              </article>
            ))}
          </div>
          <p className="notes-disclaimer">
            These are planned writing topics. They will become published notes
            as the underlying articles are written.
          </p>
        </div>
      </section>

      <section className="contact-section page-shell" id="contact">
        <div className="contact-overline">
          <span className="status-dot" />
          OPEN TO MEANINGFUL CONVERSATIONS
        </div>

        <div className="contact-layout">
          <div>
            <span className="eyebrow">05 / WHAT'S NEXT?</span>
            <h2>
              Have a problem
              <br />
              worth <span className="headline-accent">solving?</span>
            </h2>
            <p className="contact-description">
              I&apos;m interested in thoughtful engineering, collaborative
              projects, and opportunities to turn ideas into useful systems.
            </p>
            <a className="button-primary contact-button" 
href="mailto:vaishnavyewale26@gmail.com"
>
              <Mail size={17} /> Start a conversation <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="contact-side">
            <div className="contact-side-label mono">FIND ME ELSEWHERE</div>
            
<a
  href="https://github.com/vaishnavyewale/ghost-inference"
  target="_blank"
  rel="noreferrer"
>
  <Code2 size={18} />
  <span>GitHub <small>Code & experiments</small></span>
  <ArrowUpRight size={16} />
</a>

            
<a
  href="https://www.linkedin.com/in/vaishnav-yewale-01216a3ba/"
  target="_blank"
  rel="noreferrer"
>
  <Code2 size={19} />
  <span>LinkedIn <small>Professional network</small></span>
  <ArrowUpRight size={16} />
</a>

            <div className="contact-note">
              <span className="status-dot" />
              <span>BUILDING IN PUBLIC, ONE PROJECT AT A TIME.</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer page-shell">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark"><Zap size={15} /></span>
          <span>ENGINEERING<span className="brand-muted"> SIGNAL</span></span>
        </a>
        <span className="footer-center">DESIGNED WITH INTENT. BUILT TO EVOLVE.</span>
        <a className="back-top" href="#home">BACK TO TOP ↑</a>
        <span className="footer-copy">© 2026 · PORTFOLIO / V1.0</span>
      </footer>
    </main>
  );
}
