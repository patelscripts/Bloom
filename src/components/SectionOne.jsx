// src/components/SectionOne.jsx
// Two-column layout: text on the left, circular image on the right
// Introduces the studio's story / approach

function SectionOne() {
  return (
    <section id="studio" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* ── Grid: stacks on mobile, side-by-side on desktop ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ── Left: Text content ──────────────────────────── */}
          <div className="space-y-6">

            {/* Section label */}
            <span className="inline-block text-xs font-semibold tracking-widest text-[#7eb89a] uppercase">
              — About Us
            </span>

            {/* Heading with styled words */}
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-[#2d2d2d] leading-tight">
              We turn your{' '}
              <span className="highlight-pink">big ideas</span>
              {' '}into{' '}
              <span className="underline-yellow">reality</span>
            </h2>

            {/* Body paragraph */}
            <p className="font-body text-[#666] text-base leading-relaxed">
              Founded in 2020, Bloom Studio is a small but mighty team of designers,
              strategists, and storytellers. We believe every brand has a unique story —
              our job is to help you tell it beautifully.
            </p>

            <p className="font-body text-[#666] text-base leading-relaxed">
              From early-stage startups to established businesses, we partner closely
              with our clients to create work that is not only stunning, but strategic.
            </p>

            {/* Stats row */}
            <div className="flex gap-8 pt-2">
              {[
                { value: '200+', label: 'Projects done' },
                { value: '6+',   label: 'Years active' },
                { value: '98%',  label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display font-bold text-2xl text-[#2d2d2d]">{stat.value}</p>
                  <p className="text-xs text-[#999] mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Read more link */}
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2d2d2d] hover:text-[#7eb89a] transition-colors group"
            >
              Read our full story
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* ── Right: Circular image ────────────────────────── */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Main large circular image */}
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#f5c842] shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop"
                  alt="Our team at work"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Small floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#7eb89a] text-white rounded-2xl px-4 py-2 shadow-lg">
                <p className="font-bold text-lg leading-none">6+</p>
                <p className="text-xs opacity-90">Years of craft</p>
              </div>

              {/* Decorative pink dot cluster */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#f4a7b9] rounded-full opacity-60" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SectionOne
