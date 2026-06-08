// DashboardSideBar.jsx
import { Link } from 'react-router-dom';
import BrandMark from '../BrandMark';

const DashboardSideBar = ({bgColor}) => {
  return (
    <aside className={`flex h-full w-64 flex-col border-r border-white/70 bg-${bgColor} px-5 py-6 shadow-[4px_0_24px_rgba(15,23,42,0.06)] backdrop-blur-sm`}>
      <div>
        <div className="mb-8">
        <BrandMark /> <br/>
            
          <p className="text-sm text-slate-500 font-semibold">Quick navigation</p>
        </div>

        <nav className="space-y-2 text-sm font-medium">
          <Link
            to='/'
            className="flex font-semibold items-center gap-3 rounded-xl px-3 py-3 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Home
          </Link>
      
          <Link
            to='/analytics'
            className="flex font-semibold items-center gap-3 rounded-xl px-3 py-3 text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
          >
            Analytics
          </Link>
        </nav>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-slate-700 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Quick tip</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Use the pencil button on each link card to create a custom link.
        </p>
      </div>

      <div className="mt-8 rounded-2xl bg-linear-to-br from-blue-600 to-indigo-600 p-4 text-white shadow-lg">
        <p className="text-sm font-semibold">Feature Update</p>
        <p className="mt-2 text-sm text-blue-50">Soon the Qr code feature will be available!</p>
      </div>
    </aside>
  );
};

export default DashboardSideBar;