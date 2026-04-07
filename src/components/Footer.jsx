// src/components/Footer.jsx
// Multi-column footer with company links, policies, social links, and contact info

// Footer link columns data
const FOOTER_COLUMNS = [
  {
    heading: 'Company',
    links: [
      { label: 'Home',         href: '#' },
      { label: 'About',        href: '#studio' },
      { label: 'Services',     href: '#services' },
      { label: 'Portfolio',    href: '#' },
      { label: 'Blog',         href: '#' },
    ],
  },
  {
    heading: 'Terms & Policies',
    links: [
      { label: 'Privacy Policy',    href: '#' },
      { label: 'Terms of Service',  href: '#' },
      { label: 'Cookie Policy',     href: '#' },
      { label: 'Refund Policy',     href: '#' },
    ],
  },
]

// Social media links
const SOCIAL_LINKS = [
  { label: 'Instagram', href: '#', icon: '📸' },
  { label: 'Twitter/X', href: '#', icon: '𝕏' },
  { label: 'LinkedIn',  href: '#', icon: '💼' },
  { label: 'Dribbble',  href: '#', icon: '🏀' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#2d2d2d] text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        {/* ── Top grid: brand info + link columns ─────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* ── Column 1: Brand bio ───────────────────────────── */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 mb-4 group w-fit">
              <span className="w-8 h-8 rounded-full bg-[#7eb89a] flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                B
              </span>
              <span className="font-display font-bold text-xl tracking-tight">
                Bloom<span className="text-[#7eb89a]">.</span>
              </span>
            </a>

            {/* Short bio */}
            <p className="text-sm text-[#aaa] leading-relaxed mb-4">
              A boutique creative studio helping ambitious founders build brands worth remembering.
            </p>

            {/* Location */}
            <p className="text-xs text-[#666]">📍 Amsterdam, Netherlands</p>
          </div>

          {/* ── Columns 2 & 3: Link columns ───────────────────── */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="font-semibold text-sm text-white mb-4 tracking-wide">
                {col.heading}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#aaa] hover:text-[#7eb89a] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Column 4: Contact + Social ────────────────────── */}
          <div>
            <h4 className="font-semibold text-sm text-white mb-4 tracking-wide">
              Get In Touch
            </h4>

            {/* Contact details */}
            <div className="space-y-2 mb-6 text-sm text-[#aaa]">
              <p>✉️ hello@bloomstudio.co</p>
              <p>📞 +31 20 123 4567</p>
            </div>

            {/* Social links */}
            <h4 className="font-semibold text-xs text-[#888] mb-3 tracking-widest uppercase">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  className="w-9 h-9 rounded-full border border-[#444] flex items-center justify-center text-sm hover:border-[#7eb89a] hover:bg-[#7eb89a]/10 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* ── Divider ───────────────────────────────────────────── */}
        <div className="h-px bg-[#444] mb-6" />

        {/* ── Bottom bar: copyright + made with love ────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#666]">
          <p>© {currentYear} Bloom Studio. All rights reserved.</p>
          <p>
            Made with{' '}
            <span className="text-[#f4a7b9]">♥</span>
            {' '}using React + Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
