import { ArrowRight, Link2, Sparkles } from 'lucide-react'

function HeroSection() {
  return (
    <section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-12 pt-14 text-center lg:px-8 lg:pb-16 lg:pt-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-[#dbe1ff] blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute left-0 top-16 h-48 w-48 rounded-full bg-[#ffdbcd] blur-3xl sm:h-56 sm:w-56" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#eff4ff] blur-3xl sm:h-80 sm:w-80" />
      </div>
      
      <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c3c6d7] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0053db] shadow-sm">
        <Sparkles className="h-4 w-4" />
        Precision link management
      </p>

      <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[#0b1c30] sm:text-5xl lg:text-6xl">
        Precision Control Over Every Connection
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#434655] sm:text-xl">
        Shorten, track, and optimize your links with a clean, modern workflow that feels fast and dependable.
      </p>

      <div className="mt-10 w-full max-w-4xl rounded-3xl border border-[#c3c6d7] bg-white p-3 shadow-[0_24px_60px_-34px_rgba(15,23,42,0.55)] backdrop-blur-md">
        <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
          <div className="flex flex-1 items-center gap-3 rounded-2xl border border-[#d3e4fe] bg-[#f8f9ff] px-4 py-4 text-left">
            <Link2 className="h-5 w-5 shrink-0 text-[#004ac6]" />
            <input
              type="text"
              placeholder="Paste your long URL here..."
              className="w-full border-0 bg-transparent text-base text-[#0b1c30] outline-none placeholder:text-[#737686]"
            />
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#004ac6] px-7 py-4 text-base font-semibold text-white shadow-[0_18px_40px_-24px_rgba(0,74,198,0.9)] transition hover:bg-[#003ea8] active:scale-[0.99]">
            Shorten
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#737686]">
        <span>Used by fast-moving teams for</span>
        <span className="rounded-full border border-[#d3e4fe] bg-white px-3 py-1 text-[#004ac6]">Campaigns</span>
        <span className="rounded-full border border-[#d3e4fe] bg-white px-3 py-1 text-[#004ac6]">Analytics</span>
        <span className="rounded-full border border-[#d3e4fe] bg-white px-3 py-1 text-[#004ac6]">QR codes</span>
      </div>
    </section>
  )
}

export default HeroSection
