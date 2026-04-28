import { NavLink } from "react-router-dom"
import { useState } from "react"
import ProfileImage from "/src/assets/hero.png"

function ProfilePicture() {
  return (
    <div className="h-9 w-9 rounded-full overflow-hidden ring-2 ring-blue-400/40 shrink-0">
      <img src={ProfileImage} alt="Tony" className="h-full w-full object-cover" />
    </div>
  )
}

function NavbarLink({ to, label, end, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `px-4 py-1.5 text-sm transition-all duration-300 font-semibold rounded-full
        ${isActive
          ? "text-blue-950 bg-white"
          : "text-white/80 hover:text-white hover:bg-white/10"
        }`
      }
    >
      {label}
    </NavLink>
  )
}


function HamburgerIcon({ open }) {
  return (
    <div className="flex flex-col gap-1.5 w-5 cursor-pointer">
      <span className={`block h-0.5 bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
      <span className={`block h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
      <span className={`block h-0.5 bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
    </div>
  )
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-blue-950/100 backdrop-blur-md sticky top-0 z-50 border-b border-white/5">
      <div className="flex items-center justify-between px-6 md:px-10 h-16">

        <div className="flex items-center gap-2.5">
          <ProfilePicture />
          <span className="text-white font-bold text-sm md:text-base tracking-wide">
            Tony Felicio Farrel
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <NavbarLink to="/" label="Home" end />
          <NavbarLink to="/about" label="About" />
          <NavbarLink to="/contact" label="Contact" />
        </nav>
        
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-48 pb-4" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-start gap-1 px-6">
          <NavbarLink to="/" label="Home" end onClick={() => setMenuOpen(false)} />
          <NavbarLink to="/about" label="About" onClick={() => setMenuOpen(false)} />
          <NavbarLink to="/contact" label="Contact" onClick={() => setMenuOpen(false)} />
        </nav>

      </div>
    </header>
  )
}

export default Navbar