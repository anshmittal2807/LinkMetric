import { Link } from 'react-router-dom'
import { Link2 } from 'lucide-react'

function BrandMark() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#004ac6] text-white shadow-[0_12px_30px_-18px_rgba(0,74,198,0.8)]">
        <Link2 className="h-5 w-5" />
      </div>

      <div className="leading-tight">
        <h1 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0053db]">Link Metric</h1>
      </div>
    </Link>
  )
}

export default BrandMark