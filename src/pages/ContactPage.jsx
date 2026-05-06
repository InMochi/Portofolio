import { useState, useEffect } from "react"
import MainLayout from "../components/layout/MainLayout"

// ICONS
function EmailIcon() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function WhatsappIcon() {
  return (
    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

// ===== SUCCESS ANIMATION =====
function SuccessAnimation({ onReset }) {
  const [stage, setStage] = useState("loading") // "loading" | "success"

  useEffect(() => {
    const t = setTimeout(() => setStage("success"), 1500)
    return () => clearTimeout(t)
  }, [])

  const circumference = 2 * Math.PI * 34 // ~213.6

  return (
    <div className="flex flex-col items-center justify-center gap-5 py-12 text-center">
      <div className="relative w-20 h-20">
        {/* SVG ring */}
        <svg
          viewBox="0 0 80 80"
          className="absolute inset-0 w-full h-full"
          style={{ transform: "rotate(-90deg)" }}
        >
          {/* Track */}
          <circle cx="40" cy="40" r="34" fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="4" />
          {/* Arc */}
          <circle
            cx="40" cy="40" r="34"
            fill="none"
            strokeWidth="4"
            strokeLinecap="round"
            stroke={stage === "success" ? "#4ade80" : "#60a5fa"}
            strokeDasharray={
              stage === "loading"
                ? `${circumference * 0.25} ${circumference * 0.75}`
                : `${circumference} ${circumference}`
            }
            strokeDashoffset={stage === "success" ? 0 : 0}
            style={{
              transformOrigin: "40px 40px",
              animation: stage === "loading" ? "contactSpin 0.9s linear infinite" : "none",
              transition: stage === "success"
                ? "stroke-dasharray 0.55s cubic-bezier(0.4,0,0.2,1), stroke 0.2s ease"
                : "none",
            }}
          />
        </svg>

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center">
          {stage === "loading" ? (
            // 3 bouncing dots
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-blue-400"
                  style={{ animation: `contactDotBounce 0.7s ease-in-out ${i * 0.12}s infinite` }}
                />
              ))}
            </div>
          ) : (
            // Checkmark draw
            <svg
              width="30" height="30" viewBox="0 0 30 30"
              fill="none" stroke="#4ade80"
              strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              style={{ animation: "contactScaleIn 0.25s ease both" }}
            >
              <polyline
                points="5,15 12,22 25,8"
                strokeDasharray="34"
                strokeDashoffset="34"
                style={{ animation: "contactDrawCheck 0.35s ease forwards 0.15s" }}
              />
            </svg>
          )}
        </div>
      </div>

      {/* Text — fades in after success */}
      <div
        style={{
          opacity: stage === "success" ? 1 : 0,
          transform: stage === "success" ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.4s ease 0.3s, transform 0.4s ease 0.3s",
        }}
      >
        <p className="text-white font-semibold text-base">Message Sent!</p>
        <p className="text-slate-400 text-sm mt-1">
          Thanks for contacting me! I'll respond as soon as possible.
        </p>
        <button
          onClick={onReset}
          className="mt-3 text-xs text-blue-400 hover:underline"
        >
          Send another message
        </button>
      </div>

      {/* Keyframes — scoped to avoid global pollution */}
      <style>{`
        @keyframes contactSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes contactDotBounce {
          0%, 100% { transform: translateY(0);    opacity: 0.4; }
          50%       { transform: translateY(-5px); opacity: 1;   }
        }
        @keyframes contactDrawCheck {
          to { stroke-dashoffset: 0; }
        }
        @keyframes contactScaleIn {
          from { transform: scale(0.6); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
      `}</style>
    </div>
  )
}

// CONTACT INFO
const contactLinks = [
  {
    label: "Email",
    value: "tonyfeliciofarrel@gmail.com",
    href: "mailto:tonyfeliciofarrel@gmail.com",
    icon: <EmailIcon />,
    color: "blue",
  },
  {
    label: "GitHub",
    value: "github.com/InMochi",
    href: "https://github.com/InMochi",
    icon: <GithubIcon />,
    color: "slate",
  },
  {
    label: "LinkedIn",
    value: "Tony Felicio Farrel",
    href: "https://www.linkedin.com/in/tony-felicio-farrel-950b43335/",
    icon: <LinkedinIcon />,
    color: "cyan",
  },
  {
    label: "WhatsApp",
    value: "+62 851-3637-2285",
    href: "https://wa.me/6285136372285",
    icon: <WhatsappIcon />,
    color: "green",
  },
]

const colorMap = {
  blue:  { bg: "bg-blue-400/10",  border: "border-blue-400/20",  icon: "text-blue-400",  hover: "hover:border-blue-400/50"  },
  slate: { bg: "bg-slate-400/10", border: "border-slate-400/20", icon: "text-slate-300", hover: "hover:border-slate-400/50" },
  cyan:  { bg: "bg-cyan-400/10",  border: "border-cyan-400/20",  icon: "text-cyan-400",  hover: "hover:border-cyan-400/50"  },
  green: { bg: "bg-green-400/10", border: "border-green-400/20", icon: "text-green-400", hover: "hover:border-green-400/50" },
}

function ContactCard({ label, value, href, icon, color }) {
  const c = colorMap[color]
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex items-center gap-4 p-4 rounded-xl border ${c.border} ${c.bg} ${c.hover} bg-white/5 transition-all duration-300 hover:-translate-y-0.5 group`}
    >
      <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white/5 ${c.icon}`}>
        {icon}
      </div>
      <div>
        <p className="text-slate-400 text-xs">{label}</p>
        <p className="text-white text-sm font-semibold group-hover:text-blue-300 transition-colors duration-200">{value}</p>
      </div>
    </a>
  )
}

function InputField({ label, id, type = "text", placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-slate-400 text-xs font-medium uppercase tracking-wider">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-400/60 focus:bg-white/8 transition-all duration-200"
      />
    </div>
  )
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return

    const res = await fetch("https://formspree.io/f/mnjwvgoa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    })

    if (res.ok) setSubmitted(true)
  }

  const handleReset = () => {
    setForm({ name: "", email: "", message: "" })
    setSubmitted(false)
  }

  return (
    <MainLayout>
      <section className="relative bg-blue-950 min-h-screen px-10 md:px-24 py-24 overflow-hidden">

        {/* Background blobs */}
        <div className="absolute top-[-60px] right-[-60px] w-[360px] h-[360px] rounded-full bg-blue-700 opacity-10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-[-40px] w-[280px] h-[280px] rounded-full bg-cyan-400 opacity-5 blur-3xl pointer-events-none" />

        {/* Section header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-8 h-[2px] bg-blue-400" />
            <span className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-sm">Contact</span>
          </div>
          <h2 className="text-white text-3xl md:text-4xl font-black">Let's Talk</h2>
          <p className="text-slate-400 mt-3 max-w-lg text-sm leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl">

          {/* LEFT: Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col gap-5">
            <h3 className="text-white font-bold text-base">Send Message</h3>

            {submitted ? (
              <SuccessAnimation onReset={handleReset} />
            ) : (
              <>
                <InputField
                  label="Nama"
                  id="name"
                  placeholder="Tony Farrel"
                  value={form.name}
                  onChange={handleChange}
                />
                <InputField
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Message..."
                    value={form.message}
                    onChange={handleChange}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-400/60 focus:bg-white/8 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={!form.name || !form.email || !form.message}
                  className="w-full py-3 rounded-full bg-white text-blue-950 font-bold text-sm hover:bg-blue-400 hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg shadow-blue-900/30"
                >
                  Send
                </button>
              </>
            )}
          </div>

          {/* RIGHT: Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-bold text-base mb-1">Or contact directly</h3>
            {contactLinks.map((item) => (
              <ContactCard key={item.label} {...item} />
            ))}

            {/* Availability badge */}
            <div className="mt-4 flex items-center gap-2.5 px-4 py-3 rounded-xl border border-green-400/20 bg-green-400/5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
              </span>
              <p className="text-green-400 text-xs font-medium">
                Available for freelance projects, collaboration, and full-time opportunities.
              </p>
            </div>
          </div>

        </div>
      </section>
    </MainLayout>
  )
}