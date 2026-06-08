import React from "react";
import{MousePointerClick , Link} from 'lucide-react'


function AnalyticsBoxes() {
  return (
    <div className="flex flex-wrap  gap-2 mx-3 bg-[#FCF8FF]">
      <div className="w-full border rounded-lg flex justify-between gap-2 p-4 border-[#464554]/40">
        <div className ="flex flex-col gap-2">
          <p className="text-[#464554] text-sm font-semibold">Total Clicks</p>
          <p className="text-3xl font-bold text-[#4648D4]">12.4K</p>
        </div>
        <div className =" flex items-center justify center pr-4">
          <MousePointerClick className="text-[#4648D4]"/>
        </div>
      </div>
 <div className="w-full border rounded-lg flex justify-between gap-2 p-4 border-[#464554]/40">
        <div className ="flex flex-col gap-2">
          <p className="text-[#464554] text-sm font-semibold">Active Links</p>
          <p className="text-3xl font-bold ">842</p>
        </div>
        <div className =" flex items-center justify center pr-4">
          <Link />
        </div>
      </div>
    </div>
  );
}

export default AnalyticsBoxes;
