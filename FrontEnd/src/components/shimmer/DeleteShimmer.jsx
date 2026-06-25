import React from "react";

const DeleteShimmer = () => {
  return (
    <div className="animate-pulse rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="h-4 w-32 bg-slate-200 rounded mb-3"></div>
      <div className="h-3 w-48 bg-slate-200 rounded mb-2"></div>
      <div className="h-3 w-40 bg-slate-200 rounded"></div>

      <div className="mt-4 h-10 bg-slate-200 rounded-xl"></div>

      <div className="mt-3 flex justify-between">
        <div className="h-3 w-24 bg-slate-200 rounded"></div>
        <div className="h-3 w-16 bg-slate-200 rounded"></div>
      </div>
    </div>
  );
};

export default DeleteShimmer;