import { BarChart3, Check, QrCode, ShieldCheck, Sparkles, Target } from 'lucide-react'

const featureCards = [
  {
    icon: Sparkles,
    title: 'Custom Aliases',
    text: 'Create short, branded links that are easier to remember and better aligned with your identity.',
    accent: 'bg-[#ffdbcd] text-[#943700]',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Links',
    text: 'Keep destinations protected with a design that emphasizes reliability and trust.',
    accent: 'bg-[#dae2fd] text-[#565e74]',
  },
]

const highlights = [
  'Fast link shortening',
  'Branded domains',
  'API-friendly workflow',
  'QR code generation',
]

function FeatureSection() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <article className="group overflow-hidden rounded-3xl border border-[#c3c6d7] bg-[#eff4ff] p-6 md:col-span-2">
            <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-16">
              <div className="flex-1">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#004ac6]/10 text-[#004ac6]">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#0b1c30]">Real-time Analytics</h2>
                <p className="mt-3 max-w-xl text-[#434655]">
                  Track every click as it happens. Monitor geographic data, device types, and referral sources with
                  pinpoint clarity.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-[#c3c6d7] bg-white p-3 shadow-sm lg:w-md">
                <img
                  alt="Dashboard analytics preview"
                  className="aspect-16/10 w-full rounded-2xl object-fit grayscale-[0.4] transition duration-500 group-hover:grayscale-0"
                  src={"src/assets/dashboardImg.png"}
                />
              </div>
            </div>
          </article>

          {featureCards.map(({ icon: Icon, title, text, accent }) => (
            <article
              key={title}
              className="rounded-3xl border border-[#c3c6d7] bg-white p-6 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.35)]"
            >
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${accent}`}>
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#0b1c30]">{title}</h2>
              <p className="mt-3 text-[#434655]">{text}</p>
            </article>
          ))}

          <article className="overflow-hidden rounded-3xl border border-[#c3c6d7] bg-white p-6 md:col-span-2">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="flex-1">
                <h2 className="text-2xl font-semibold tracking-tight text-[#0b1c30]">Dynamic QR Codes</h2>
                <p className="mt-3 max-w-xl text-[#434655]">
                  Bridge physical and digital touchpoints. Generate custom QR codes for every link and update them
                  anytime without reprinting.
                </p>
              
              </div>

              <div className="flex h-48 w-48 items-center justify-center rounded-[28px] border border-[#c3c6d7] bg-[#f8f9ff] text-[#0b1c30] shadow-sm">
                <QrCode className="h-28 w-28 text-[#434655] opacity-20" />
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-[#c3c6d7] bg-[#dbe1ff] p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#004ac6]">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#0b1c30]">Focused workflow</h2>
            <p className="mt-3 text-[#434655]">
              Keep your team moving with a simple interface that gets out of the way and highlights the next action.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <div className="rounded-4xl border border-[#c3c6d7] bg-white p-6 shadow-[0_24px_64px_-36px_rgba(15,23,42,0.55)] lg:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0053db]">Why teams use it</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0b1c30] sm:text-4xl">
                Clean, fast, and designed for link operations
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#434655]">
                The layout keeps the focus on the core task: shorten a link, measure the outcome, and move on with a
                clearer view of performance.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:w-105">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#d3e4fe] bg-[#f8f9ff] p-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#004ac6]/10 text-[#004ac6]">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="font-medium text-[#0b1c30]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeatureSection