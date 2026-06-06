import CopyButton from "../landing/CopyButton";
import{Pencil} from 'lucide-react';
const LinkInfo = () => {

const text = "https://www.google.com/search?q=react+context+api&rlz=1C1GCEU_enIN832IN832&oq=react+context+api&aqs=chrome..69i57j0i512l9.1225j0j7&sourceid=chrome&ie=UTF-8";
  return (
    <article className="relative m-0 w-full rounded-2xl border border-white/80 bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)] sm:p-5">
      <div className="flex flex-col gap-4 sm:gap-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-700">
              Active link
            </div>
            <div className="mt-3 flex items-start gap-3">
              <div className="min-w-0 flex-1">
                <p className="truncate text-lg font-semibold text-slate-900 sm:text-xl">Google.com</p>
                <p className="mt-1 text-sm text-slate-500">Short URL</p>
              </div>
            </div>
          </div>

          <button className="absolute right-4 top-4 rounded-xl p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 sm:static sm:ml-auto sm:shrink-0" aria-label="Edit link">
            <Pencil className="h-4 w-4" />
          </button>
          
        </div>

        <div className="flex justify-between gap-3 rounded-2xl bg-blue-700  px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="min-w-0 truncate text-sm font-semibold text-white sm:text-base relative top-1.5 sm:top-0">LocalHost:8080</p>
          <div className="shrink-0">
            <CopyButton buttonClassName="rounded-xl bg-blue-600 hover:bg-blue-500 text-white relative bottom-0.5" iconClassName="text-white" />
          </div>
        </div>

        <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className='min-w-0 flex-1 wrap-break-word text-sm leading-6 text-slate-600'>
            {text.length > 70 ? text.slice(0, 70) + "..." : text}
          </p>

          <div className="flex shrink-0 items-center gap-3 sm:justify-end">
            <span className="rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm">
              500 Clicks
            </span>
            <span className="text-xs text-slate-500 sm:text-sm">28-07-2026</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default LinkInfo;
