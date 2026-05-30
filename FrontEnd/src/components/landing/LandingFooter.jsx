import { Globe2 } from 'lucide-react'

function LandingFooter() {
  return (
    <footer className="border-t border-[#c3c6d7] bg-[#f8f9ff]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-lg font-semibold text-[#004ac6]">Link Precision</p>
          <p className="mt-1 text-sm text-[#434655]">© 2024 Link Precision. All rights reserved.</p>
        </div>

        <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-[#434655]">
          {['Privacy', 'Terms', 'Security', 'Contact'].map((item) => (
            <a key={item} href="#" className="transition hover:text-[#004ac6]">
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 text-[#434655]">
          <Globe2 className="h-5 w-5 transition hover:text-[#004ac6]" />
          <span className="text-sm font-medium">Global</span>
        </div>
      </div>
    </footer>
  )
}

export default LandingFooter
