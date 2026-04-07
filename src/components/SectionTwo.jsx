// src/components/SectionTwo.jsx
// Alternate two-column layout: image on the left, text on the right
// Showcases the studio's process / approach

// Process steps data
const STEPS = [
  { number: '01', title: 'Discovery',  desc: 'We dive deep into your brand, audience, and goals.' },
  { number: '02', title: 'Strategy',   desc: 'We craft a clear roadmap before a single pixel is drawn.' },
  { number: '03', title: 'Design',     desc: 'We bring the strategy to life with beautiful visuals.' },
  { number: '04', title: 'Deliver',    desc: 'You receive polished, ready-to-use files and assets.' },
]

function SectionTwo() {
  return (
    <section className="py-20 px-6 bg-[#f5f0e8]">
      <div className="max-w-6xl mx-auto">

        {/* ── Grid: image first on mobile → left on desktop ──── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ── Left: Circular image ─────────────────────────── */}
          <div className="flex justify-center md:justify-start order-1">
            <div className="relative">
              {/* Main image */}
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#f4a7b9] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?w=400&h=400&fit=crop"
                  alt="Our design process"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Floating quote card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-3 shadow-lg w-36 border border-[#e0d8cc]">
                <p className="text-xs text-[#777] italic leading-snug">"Design is not just what it looks like — it's how it works."</p>
              </div>

              {/* Decorative green circle */}
              <div className="absolute -top-5 -left-5 w-14 h-14 bg-[#7eb89a] rounded-full opacity-50" />
            </div>
          </div>

          {/* ── Right: Text content ──────────────────────────── */}
          <div className="space-y-6 order-2">

            {/* Section label */}
            <span className="inline-block text-xs font-semibold tracking-widest text-[#f4a7b9] uppercase">
              — Our Process
            </span>

            {/* Heading */}
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#2d2d2d] leading-tight">
              A simple process,{' '}
              <span className="highlight-green">exceptional</span>
              {' '}results
            </h2>

            {/* Body paragraph */}
            <p className="font-body text-[#666] text-base leading-relaxed">
              We follow a clear, transparent process so you always know where
              your project stands. No surprises — just great work, delivered on time.
            </p>

            {/* Process steps list */}
            <div className="space-y-4 pt-2">
              {STEPS.map((step) => (
                <div
                  key={step.number}
                  className="flex items-start gap-4 group cursor-default"
                >
                  {/* Step number badge */}
                  <span className="shrink-0 w-9 h-9 rounded-full bg-[#f5c842] flex items-center justify-center text-xs font-bold text-[#2d2d2d] group-hover:bg-[#7eb89a] group-hover:text-white transition-colors duration-200">
                    {step.number}
                  </span>

                  {/* Step info */}
                  <div>
                    <p className="font-semibold text-[#2d2d2d] text-sm mb-0.5">{step.title}</p>
                    <p className="text-xs text-[#888] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default SectionTwo
