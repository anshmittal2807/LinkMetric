const AnalyticsLinkList = ({ links = [] }) => {
  if (!links.length) {
    return (
      <div className="mt-6 rounded-2xl border border-[#464554]/10 bg-[#FCF8FF] p-5 text-center text-sm text-[#464554] shadow-sm">
        No links available yet.
      </div>
    )
  }

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-[#464554]/10 bg-[#FCF8FF] p-4 sm:p-5">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-gray-800 sm:text-xl">Your Links</h3>
          <p className="text-sm text-gray-500">Latest live link performance</p>
        </div>
        <span className="rounded-full bg-[#EEF2FF] px-3 py-1 text-xs font-semibold text-[#4648D4]">
          {links.length} total
        </span>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {links.map((link) => (
          <article
            key={link.linkId}
            className="flex h-full min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-white/80 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
          >
            <div className="space-y-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <p className="wrap-break-word text-base font-semibold text-slate-900">
                    {link.host || 'Unknown host'}
                  </p>
                  <p className="mt-1 break-all text-sm text-slate-500">
                    {link.orignalLink}
                  </p>
                </div>
                <span className="inline-flex shrink-0 self-start rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {link.totalClicks ?? 0} clicks
                </span>
              </div>

              <div className="rounded-2xl bg-blue-700 px-4 py-3">
                <p className="break-all text-sm font-semibold text-white">{link.shortLink}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
              <span className="truncate">{link.dateTime ? String(link.dateTime).substring(0, 10) : 'Recent'}</span>
              <span className="font-medium text-[#4648D4]">Live data</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default AnalyticsLinkList