import React from "react";
import { MousePointerClick, Link as LinkIcon , Share } from "lucide-react";

function AnalyticsBoxes({ totalLinks }) {
  console.log('Total Links in AnalyticsBoxes:', totalLinks);
  return (
    <div className="w-full">
      {/* Container: column on mobile, row on md+ */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-1/2 border rounded-lg flex items-center justify-between gap-2 p-4 border-[#464554]/40 bg-[#FCF8FF]">
          <div className="flex flex-col gap-1">
            <p className="text-[#464554] text-sm font-semibold">Total Clicks</p>
            <p className="text-3xl font-bold text-[#4648D4]">{totalLinks}</p>
          </div>
          <div className="flex items-center justify-center pr-2">
            <MousePointerClick className="h-6 w-6 text-[#4648D4]" />
          </div>
        </div>

        <div className="w-full md:w-1/2 border rounded-lg flex items-center justify-between gap-2 p-4 border-[#464554]/40 bg-[#FCF8FF]">
          <div className="flex flex-col gap-1">
            <p className="text-[#464554] text-sm font-semibold">Active Links</p>
            <p className="text-3xl font-bold text-[#4648D4]">{totalLinks}</p>
          </div>
          <div className="flex items-center justify-center pr-2">
            <LinkIcon className="h-6 w-6 text-gray-600" />
          </div>
        </div>
        
        <div className="w-full md:w-1/2 border rounded-lg flex items-center justify-between gap-2 p-4 border-[#464554]/40 bg-[#FCF8FF]">
          <div className="flex flex-col gap-1">
            <p className="text-[#464554] text-sm font-semibold">Top Referrer</p>
            <p className="text-3xl font-bold text-[#4648D4]">Instagram</p>
          </div>
          <div className="flex items-center justify-center pr-2">
            <Share className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticsBoxes;
