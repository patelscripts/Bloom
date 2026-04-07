// src/components/Services.jsx
// Services listed in a vertical stack with description, title, and arrow
// Divider lines separate each service item

// Services data array
const SERVICES = [
  {
    id: 1,
    description: 'Build a memorable identity from scratch or refresh an existing one.',
    title: 'Brand Identity',
    tag: 'Strategy + Design',
  },
  {
    id: 2,
    description: 'Stunning websites that convert visitors into loyal customers.',
    title: 'Web Design',
    tag: 'UX + Development',
  },
  {
    id: 3,
    description: 'Thumb-stopping content and campaigns across all platforms.',
    title: 'Social Media',
    tag: 'Content + Growth',
  },
  {
    id: 4,
    description: 'Packaging, posters, brochures, and everything in between.',
    title: 'Print & Packaging',
    tag: 'Print + Production',
  },
  {
    id: 5,
    description: 'Motion graphics, explainers, and brand films that captivate.',
    title: 'Motion & Video',
    tag: 'Animation + Film',
  },
]

function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ───────────────────────────────────── */}
        <div className="mb-14 text-center md:text-left">
          <span className="inline-block text-xs font-semibold tracking-widest text-[#7eb89a] uppercase mb-3">
            — What we do
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-[#2d2d2d] leading-tight">
            What we can <span className="highlight-pink">offer</span> you!
          </h2>
        </div>

        {/* ── Service items list ───────────────────────────────── */}
        <div>
          {SERVICES.map((service, index) => (
            <div key={service.id}>

              {/* ── Single service row ─────────────────────────── */}
              <div className="group flex flex-col md:flex-row md:items-center justify-between py-6 gap-4 cursor-pointer hover:bg-[#f5f0e8] -mx-4 px-4 rounded-xl transition-colors duration-200">

                {/* Left: small description */}
                <div className="w-full md:w-1/4">
                  <span className="inline-block text-xs font-medium text-[#7eb89a] bg-[#7eb89a]/10 px-3 py-1 rounded-full mb-1">
                    {service.tag}
                  </span>
                  <p className="text-xs text-[#888] leading-relaxed hidden md:block">
                    {service.description}
                  </p>
                </div>

                {/* Center: main service title */}
                <div className="flex-1 text-center">
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-[#2d2d2d] group-hover:text-[#7eb89a] transition-colors duration-200">
                    {service.title}
                  </h3>
                  {/* Show description below title on mobile */}
                  <p className="text-xs text-[#888] mt-1 md:hidden">{service.description}</p>
                </div>

                {/* Right: animated arrow */}
                <div className="hidden md:flex w-1/4 justify-end">
                  <span className="w-10 h-10 rounded-full border border-[#e0d8cc] flex items-center justify-center text-[#2d2d2d] group-hover:bg-[#2d2d2d] group-hover:text-white group-hover:border-[#2d2d2d] transition-all duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>

              {/* Divider line between items (not after the last item) */}
              {index < SERVICES.length - 1 && (
                <div className="h-px bg-[#e0d8cc]" />
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services
