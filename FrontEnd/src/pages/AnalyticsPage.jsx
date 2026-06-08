import React from 'react'
import DashboardSideBar from '../components/dashboard/DashBoardSideBar'
import AnalyticHeader from '../components/analytics/AnalyticHeader'
import AnalyticsBoxes from '../components/analytics/AnalyticsBoxes'
import AnalyticChart from '../components/analytics/AnalyticChart'

function AnalyticsPage() {
  return (
    <>
    <div className="flex min-h-screen w-screen ">
      <div className="hidden md:block">
        
    <DashboardSideBar bgColor = {"[#F9F5FF]"} />
      </div>

    <div className ='bg-[#F9F5FF] flex-1 px-6 w-full flex flex-col '>
  <AnalyticHeader className="bg-[#FCF8FF]"/>
  <AnalyticsBoxes/>
  <AnalyticChart />
    </div>

    </div>
      
    </>
  
  )
}

export default AnalyticsPage