import { Link } from "react-router-dom"
import MainLayout from "../components/layout/MainLayout"
import PersonImage from "/src/assets/person.png"
import PosImg from "/src/assets/pos.png"
import PmbImg from "/src/assets/pmb.png"
import IthaImg from "/src/assets/shop.png"
import BookImg from "/src/assets/book.png"
// Social icon components (SVG, no external deps)
function GithubIcon() {
    return (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
    )
}

function LinkedinIcon() {
    return (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    )
}

const skills = ["Laravel", "React", "Tailwind CSS", "MySQL", "REST API", "Git"]

const skillCategories = [
    {
        category: "Backend",
        color: "blue",
        skills: [
            { name: "Laravel", desc: "Main PHP framework for REST APIs & web apps" },
            { name: "PHP", desc: "My primary server-side language for daily development" },
            { name: "MySQL", desc: "Relational database used in most of my projects" },
        ],
    },
    {
        category: "Frontend",
        color: "cyan",
        skills: [
            { name: "React", desc: "UI library for SPAs and reusable components" },
            { name: "Tailwind CSS", desc: "Utility-first CSS, fast and consistent" },
            { name: "JavaScript", desc: "Core frontend language, ES6+" },
        ],
    },
    {
        category: "Tools & Others",
        color: "slate",
        skills: [
            { name: "Git & GitHub", desc: "Version control and collaboration for every project" },
            { name: "REST API", desc: "Designing and consuming clean APIs" },
            { name: "Figma", desc: "Translating designs into clean, functional code" },
        ],
    },
]

const colorMap = {
    blue: {
        badge: "bg-blue-400/10 border border-blue-400/20",
        dot: "bg-blue-400",
        label: "text-blue-400",
        card: "hover:border-blue-400/40",
    },
    cyan: {
        badge: "bg-cyan-400/10 border border-cyan-400/20",
        dot: "bg-cyan-400",
        label: "text-cyan-400",
        card: "hover:border-cyan-400/40",
    },
    slate: {
        badge: "bg-slate-400/10 border border-slate-400/20",
        dot: "bg-slate-400",
        label: "text-slate-400",
        card: "hover:border-slate-400/40",
    },
}

function SkillCard({ name, desc, color }) {
    const c = colorMap[color]
    return (
        <div className={`bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2 transition-all duration-300 ${c.card} hover:bg-white/[0.08]`}>
            <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                <span className="text-white font-semibold text-sm">{name}</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
        </div>
    )
}

const projects = [
    {
        id: 1,
        name: "Point of Sale (POS)",
        image: PosImg,
        desc: "A web-based cashier application with a CRUD API frontend implementation. Supports product management, transactions, and sales reporting.",
        tech: ["Laravel", "React", "Tailwind CSS"],
        github: "https://github.com/InMochi/Point-Of-Sales/tree/main",
        live: null,
        gradient: "from-blue-600 via-blue-800 to-blue-950",
        icon: "🛒",
        category: "Web App",
    },
    {
        id: 2,
        name: "PMB Website",
        image: PmbImg,
        desc: "A web-based new student registration information system. Simplifying the registration process, data verification, and monitoring of applicant status.",
        tech: ["Laravel", "React", "Inertia.js", "Tailwind CSS"],
        github: "https://github.com/InMochi/Pendaftaran_Mahasiswa_Baru_Website",
        live: null,
        gradient: "from-cyan-600 via-cyan-800 to-blue-950",
        category: "Web App",
    },
    {
        id: 3,
        name: "Itha Snack",
        image: IthaImg,
        desc: "A static snack ordering website optimized for desktop. Focusing on an attractive UI and a comfortable user experience.",
        tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
        github: "https://github.com/InMochi/Itha-Snack",
        live: "https://inmochi.github.io/Itha-Snack/",
        gradient: "from-amber-500 via-orange-700 to-blue-950",
        category: "Static Site",
    },
    {
        id: 4,
        name: "BookStore Website",
        image: BookImg,
        desc: "An online bookstore website with ordering and search features. Built with frontend API integration for dynamic data.",
        tech: ["Laravel", "React", "Tailwind CSS"],
        github: "https://github.com/InMochi/USK-Bookstore",
        live: null,
        gradient: "from-emerald-600 via-teal-800 to-blue-950",
        category: "Web App",
    },
]

// ===== ICONS =====

function ExternalLinkIcon() {
    return (
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
        </svg>
    )
}

// ===== PROJECT CARD =====
function ProjectCard({ project }) {
    const { name, desc, tech, github, live, gradient, category } = project

    return (
        <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">

            {/* Thumbnail placeholder */}
            <div className={`relative h-44 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
                {/* Grid overlay */}
                {project.image ? (
                    <img
                        src={project.image}
                        alt={name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    // fallback gradient lama, tetap ada kalau gambar belum ada
                    <div className={`h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                        ...
                    </div>
                )}
                {/* Glow blob */}
                <div className="absolute w-32 h-32 rounded-full bg-white/10 blur-2xl" />
                {/* Category badge */}
                <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-black/30 text-white/80 backdrop-blur-sm border border-white/10">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-white font-bold text-base leading-snug">{name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed flex-1">{desc}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                    {tech.map((t) => (
                        <span
                            key={t}
                            className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-300"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-2 pt-1">
                    <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
                    >
                        <GithubIcon />
                        Source Code
                    </a>
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-400/20 text-blue-300 border border-blue-400/30 hover:bg-blue-400/30 transition-all duration-200"
                        >
                            <ExternalLinkIcon />
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}




function Person() {
    return (
        <img
            src={PersonImage}
            className="relative w-80 md:w-[420px] object-cover"
            alt="Tony Felicio Farrel"
        />
    )
}

export default function LandingPage() {
    return (
        <MainLayout>
            <section className="relative flex flex-col md:flex-row items-center justify-between px-10 md:px-24 min-h-[calc(100vh-64px)] bg-blue-950 overflow-hidden">

                {/* === Background decorative elements === */}
                {/* Large blurred circle top-right */}
                <div className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full bg-blue-700 opacity-10 blur-3xl pointer-events-none" />
                {/* Small accent circle bottom-left */}
                <div className="absolute bottom-[-40px] left-[-40px] w-[280px] h-[280px] rounded-full bg-blue-400 opacity-10 blur-3xl pointer-events-none" />
                {/* Subtle grid lines */}
                <div
                    className="absolute inset-0 pointer-events-none opacity-[0.04]"
                    style={{
                        backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                {/* === Left: Text Content === */}
                <div className="flex-1 text-white space-y-6 z-10 py-16 md:py-0 animate-[fadeInUp_0.7s_ease_both]">

                    <div className="flex items-center gap-3">
                        <span className="block w-8 h-[2px] bg-blue-400" />
                        <h2 className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-sm">
                            About Me
                        </h2>
                    </div>

                    <div>
                        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
                            Tony
                        </h1>
                        <p className="text-blue-300 text-2xl md:text-3xl font-light mt-2 tracking-wide">
                            Web Developer
                        </p>
                    </div>

                    <p className="text-slate-300 max-w-md text-base leading-relaxed">
                        I specialize in building high-quality web applications using Laravel, React, and Tailwind CSS. Focused on clean code and great user experiences.
                    </p>

                    {/* Skill tags */}
                    <div className="flex flex-wrap gap-2 pt-1">

                        {skills.map((skill) => (
                            <span className="text-xs font-medium px-3 py-1 rounded-full border border-blue-400/30 text-blue-300 bg-blue-400/10">{skill}</span>
                        ))}

                    </div>

                    {/* CTA + Socials */}
                    <div className="flex items-center gap-5 pt-2">
                        <Link
                            to="/contact"
                            className="bg-white text-blue-950 px-7 py-3 rounded-full font-bold hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-lg shadow-blue-900/40"
                        >
                            Let's Talk
                        </Link>

                        <div className="flex items-center gap-3 text-slate-400">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">
                                <GithubIcon />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors duration-200">
                                <LinkedinIcon />
                            </a>
                        </div>
                    </div>
                </div>

                {/* === Right: Photo with framing === */}
                <div className="flex-1 flex justify-center md:justify-end items-end z-10 relative">
                    {/* Accent ring behind photo */}
                    <div className="absolute right-8 bottom-0 w-72 h-72 md:w-90 md:h-90 rounded-full border border-blue-400/20" />
                    <div className="absolute right-4 bottom-0 w-80 h-80 md:w-100 md:h-100 rounded-full border border-blue-400/10" />

                    {/* Glow blob under photo */}
                    <div className="absolute bottom-0 right-10 w-64 h-32 bg-blue-500 opacity-20 blur-2xl rounded-full pointer-events-none" />

                    {/* Corner accent box */}
                    <div className="absolute top-1/4 right-0 md:right-6 w-16 h-16 border-t-2 border-r-2 border-blue-400/40 rounded-tr-lg" />
                    <div className="absolute bottom-6 left-1/4 md:left-12 w-10 h-10 border-b-2 border-l-2 border-blue-400/40 rounded-bl-lg" />

                    <Person />
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 z-10">
                    <span className="text-white text-xs tracking-widest uppercase">Scroll</span>
                    <div className="w-px h-8 bg-white animate-pulse" />
                </div>
            </section>

            <section className="relative bg-blue-950 px-10 md:px-24 py-24 overflow-hidden">
                {/* Top divider */}
                <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

                {/* Section header */}
                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="block w-8 h-[2px] bg-blue-400" />
                        <span className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-sm">Tech Stack</span>
                    </div>
                    <h2 className="text-white text-3xl md:text-4xl font-black">
                        Tech Stack I Usualy Working With
                    </h2>
                    <p className="text-slate-400 mt-3 max-w-lg text-sm leading-relaxed">
                        The technologies and tools I use to build web applications from backend to frontend
                    </p>
                </div>

                {/* Skill categories */}
                <div className="space-y-10">
                    {skillCategories.map(({ category, color, skills }) => (
                        <div key={category}>
                            <div className="mb-4">
                                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${colorMap[color].badge} ${colorMap[color].label}`}>
                                    {category}
                                </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                {skills.map((skill) => (
                                    <SkillCard key={skill.name} {...skill} color={color} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom divider */}
                <div className="absolute bottom-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent" />
            </section>

            <section className="relative bg-blue-950 min-h-screen px-10 md:px-24 py-24 overflow-hidden">

                {/* Background decorations */}
                <div className="absolute top-[-60px] right-[-60px] w-[360px] h-[360px] rounded-full bg-blue-700 opacity-10 blur-3xl pointer-events-none" />
                <div className="absolute bottom-20 left-[-40px] w-[280px] h-[280px] rounded-full bg-cyan-400 opacity-5 blur-3xl pointer-events-none" />

                {/* Section header */}
                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="block w-8 h-[2px] bg-blue-400" />
                        <span className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-sm">Portfolio</span>
                    </div>
                    <h2 className="text-white text-3xl md:text-4xl font-black">My Projects</h2>
                    <p className="text-slate-400 mt-3 max-w-lg text-sm leading-relaxed">
                        A collection of projects I have worked on,from web apps to information systems.
                    </p>
                </div>

                {/* Project grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* GitHub CTA */}
                <div className="mt-16 flex flex-col items-center gap-4 text-center">
                    <p className="text-slate-400 text-sm">Want to see all my repos?</p>
                    <a
                        href="https://github.com/InMochi"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                    >
                        <GithubIcon />
                        See Everything on GitHub
                    </a>
                </div>

            </section>

        </MainLayout>
    )
}