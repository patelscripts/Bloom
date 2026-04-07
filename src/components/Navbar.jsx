// src/components/Navbar.jsx
// Sticky top navigation bar with logo, menu links, and mobile hamburger

import { useState } from 'react'

// ── Navigation links data ──────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Home',     href: '#' },
  { label: 'Studio',   href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact' },
  { label: 'FAQs',     href: '#faqs' },
]

function Navbar() {
  // Controls whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#f5f0e8]/90 backdrop-blur-sm border-b border-[#e0d8cc]">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ── Logo ──────────────────────────────────────────── */}
        <a href="#" className="flex items-center gap-2 group">
          {/* Simple SVG leaf logo */}
          <span className="w-8 h-8 rounded-full bg-[#7eb89a] flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-200">
            B
          </span>
          <span className="font-display font-bold text-xl text-[#2d2d2d] tracking-tight">
            Bloom<span className="text-[#7eb89a]">.</span>
          </span>
        </a>

        {/* ── Desktop Menu ──────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-sm font-medium text-[#555] hover:text-[#7eb89a] transition-colors duration-200 relative group"
              >
                {link.label}
                {/* Underline animation on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7eb89a] rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* ── CTA Button (desktop) ──────────────────────────── */}
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 bg-[#2d2d2d] text-white text-sm font-medium rounded-full hover:bg-[#7eb89a] transition-colors duration-300"
        >
          Get in touch
        </a>

        {/* ── Hamburger Button (mobile) ─────────────────────── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-1"
        >
          {/* Three lines that animate into an X when open */}
          <span
            className={`block w-6 h-0.5 bg-[#2d2d2d] rounded-full transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#2d2d2d] rounded-full transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#2d2d2d] rounded-full transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* ── Mobile Dropdown Menu ──────────────────────────────── */}
      {menuOpen && (
        <div className="md:hidden bg-[#f5f0e8] border-t border-[#e0d8cc] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#555] hover:text-[#7eb89a] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="w-full text-center px-5 py-2 bg-[#2d2d2d] text-white text-sm font-medium rounded-full hover:bg-[#7eb89a] transition-colors duration-300"
          >
            Get in touch
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
