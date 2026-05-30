function LandingCTA() {
  return (
    <section className="px-6 pb-16 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-200 overflow-hidden rounded-[34px] bg-[#004ac6] p-6 text-center text-white shadow-[0_24px_64px_-30px_rgba(0,74,198,0.8)] lg:p-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to take control?</h2>
          <p className="mt-4 text-lg leading-8 text-white/90">
            Join thousands of professionals using Link Precision to manage and optimize their digital connections.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button className="rounded-2xl bg-white px-6 py-4 font-semibold text-[#004ac6] transition hover:bg-[#eff4ff]">
              Get Started for Free
            </button>
            <button className="rounded-2xl border border-white/30 px-6 py-4 font-semibold text-white transition hover:bg-white/10">
              View Enterprise
            </button>
          </div>
          <p className="mt-4 text-sm text-white/60">No credit card required. Cancel anytime.</p>
        </div>
     </div>
    </section>
  )
}

export default LandingCTA
