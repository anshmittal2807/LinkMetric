const SkeletonBlock = ({ className = '' }) => (
  <div className={`animate-pulse rounded-2xl bg-slate-200/80 ${className}`} />
)

const PageLoadingScreen = ({ title, subtitle }) => (
  <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f9ff] px-4 py-8 text-[#0b1c30] sm:px-6">
    <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-blue-100/60 to-transparent" />
    <div className="absolute -left-20 top-20 h-52 w-52 rounded-full bg-blue-200/30 blur-3xl" />
    <div className="absolute -right-20 bottom-16 h-56 w-56 rounded-full bg-slate-200/50 blur-3xl" />

    <div className="relative w-full max-w-md rounded-3xl border border-white/70 bg-white/85 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <SkeletonBlock className="h-12 w-12 rounded-2xl" />
        <div className="flex-1 space-y-2">
          <SkeletonBlock className="h-3 w-28" />
          <SkeletonBlock className="h-4 w-40" />
        </div>
      </div>

      <div className="space-y-3">
        <SkeletonBlock className="h-8 w-3/4" />
        <SkeletonBlock className="h-4 w-full" />
        <SkeletonBlock className="h-4 w-5/6" />
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <SkeletonBlock className="h-10" />
        <SkeletonBlock className="h-10" />
        <SkeletonBlock className="h-10" />
      </div>

      <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50/80 p-4">
        <div className="space-y-3">
          <SkeletonBlock className="h-3 w-24" />
          <SkeletonBlock className="h-3 w-full" />
          <SkeletonBlock className="h-3 w-4/5" />
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm font-medium text-slate-600">{title}</p>
        {subtitle ? <p className="mt-1 text-xs text-slate-500">{subtitle}</p> : null}
      </div>
    </div>
  </div>
)

const DashboardLoadingScreen = () => (
  <div className="min-h-screen bg-slate-100 px-4 py-4 text-[#0b1c30] sm:px-6 lg:px-8 lg:py-6">
    <div className="mx-auto flex w-full max-w-7xl gap-4 lg:gap-6">
      <aside className="hidden min-h-[calc(100vh-2rem)] w-72 shrink-0 rounded-3xl border border-white/70 bg-white/85 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] backdrop-blur-sm md:block lg:min-h-[calc(100vh-3rem)]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <SkeletonBlock className="h-11 w-11 rounded-2xl" />
            <div className="space-y-2">
              <SkeletonBlock className="h-3 w-20" />
              <SkeletonBlock className="h-4 w-28" />
            </div>
          </div>
          <div className="space-y-3 pt-4">
            <SkeletonBlock className="h-10 w-full" />
            <SkeletonBlock className="h-10 w-5/6" />
            <SkeletonBlock className="h-10 w-4/6" />
            <SkeletonBlock className="h-10 w-5/6" />
          </div>
        </div>
      </aside>

      <main className="min-w-0 flex-1 rounded-3xl border border-white/70 bg-white/70 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm sm:p-6 lg:p-8">
        <div className="space-y-6">
          <div className="space-y-3">
            <SkeletonBlock className="h-4 w-24" />
            <SkeletonBlock className="h-9 w-64 max-w-full" />
            <SkeletonBlock className="h-4 w-96 max-w-full" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <SkeletonBlock className="h-28" />
            <SkeletonBlock className="h-28" />
            <SkeletonBlock className="h-28" />
            <SkeletonBlock className="h-28" />
          </div>

          <div className="rounded-3xl border border-slate-100 bg-slate-50/80 p-4 sm:p-5">
            <div className="space-y-3">
              <SkeletonBlock className="h-5 w-40" />
              <SkeletonBlock className="h-4 w-2/3" />
            </div>
            <div className="mt-5 space-y-3">
              <SkeletonBlock className="h-16 w-full" />
              <SkeletonBlock className="h-16 w-full" />
              <SkeletonBlock className="h-16 w-full" />
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
)

const LoadingScreen = ({ variant = 'page', title = 'Loading...', subtitle = '' }) => {
  if (variant === 'dashboard') {
    return <DashboardLoadingScreen />
  }

  return <PageLoadingScreen title={title} subtitle={subtitle} />
}

export default LoadingScreen