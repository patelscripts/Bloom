// src/components/Hero.jsx
// Large centered hero with styled heading, subtext, avatars, and CTA buttons

// Avatar data — using placeholder images with unique seeds
const AVATARS = [
  { id: 1, src: 'https://i.pravatar.cc/80?img=1',  alt: 'Client 1' },
  { id: 2, src: 'https://i.pravatar.cc/80?img=5',  alt: 'Client 2' },
  { id: 3, src: 'https://i.pravatar.cc/80?img=9',  alt: 'Client 3' },
  { id: 4, src: 'https://i.pravatar.cc/80?img=12', alt: 'Client 4' },
]

function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-6">

      {/* ── Decorative background blobs ─────────────────────── */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-[#f4a7b9]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#7eb89a]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* ── Small badge label ───────────────────────────────── */}
        <div className="inline-flex items-center gap-2 bg-white border border-[#e0d8cc] rounded-full px-4 py-1.5 mb-6 shadow-sm animate-fadeInUp">
          <span className="w-2 h-2 bg-[#7eb89a] rounded-full" />
          <span className="text-xs font-medium text-[#555]">Creative Studio — Est. 2020</span>
        </div>

        {/* ── Main heading ────────────────────────────────────── */}
        <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-tight text-[#2d2d2d] mb-6 animate-fadeInUp delay-100">
          We craft{' '}
          <span className="highlight-green">beautiful</span>
          <br />
          brands that{' '}
          <span className="underline-yellow">truly</span>
          <br />
          <span className="italic text-[#7eb89a]">connect</span>
          {' '}with people
        </h1>

        {/* ── Subtext ─────────────────────────────────────────── */}
        <p className="font-body text-base md:text-lg text-[#777] max-w-xl mx-auto mb-10 leading-relaxed animate-fadeInUp delay-200">
          A boutique creative studio helping ambitious founders build
          brands worth remembering — from strategy to final pixel.
        </p>

        {/* ── CTA Buttons ─────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 animate-fadeInUp delay-300">
          <a
            href="#services"
            className="px-8 py-3.5 bg-[#2d2d2d] text-white font-medium rounded-full hover:bg-[#7eb89a] transition-all duration-300 hover:scale-105 shadow-md"
          >
            Explore our work
          </a>
          <a
            href="#studio"
            className="px-8 py-3.5 bg-white text-[#2d2d2d] font-medium rounded-full border border-[#e0d8cc] hover:border-[#7eb89a] transition-all duration-300 hover:scale-105 shadow-sm"
          >
            Our story →
          </a>
        </div>

        {/* ── Social proof — avatars + count ──────────────────── */}
        <div className="flex items-center justify-center gap-4 animate-fadeInUp delay-400">

          {/* Overlapping circular avatar images */}
          <div className="flex -space-x-3">
            {AVATARS.map((avatar) => (
              <img
                key={avatar.id}
                src={avatar.src}
                alt={avatar.alt}
                className="w-10 h-10 rounded-full border-2 border-[#f5f0e8] object-cover animate-float"
                style={{ animationDelay: `${avatar.id * 0.4}s` }}
              />
            ))}
          </div>

          {/* Text beside avatars */}
          <div className="text-left">
            <p className="text-sm font-semibold text-[#2d2d2d]">200+ happy clients</p>
            <div className="flex items-center gap-1">
              {/* Star rating */}
              {[1,2,3,4,5].map((s) => (
                <span key={s} className="text-[#f5c842] text-xs">★</span>
              ))}
              <span className="text-xs text-[#777] ml-1">5.0</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
