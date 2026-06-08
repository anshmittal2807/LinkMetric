import React from 'react'
import DashboardSideBar from '../components/dashboard/DashBoardSideBar'
import AnalyticHeader from '../components/analytics/AnalyticHeader'
import AnalyticsBoxes from '../components/analytics/AnalyticsBoxes'
import AnalyticChart from '../components/analytics/AnalyticChart'

function AnalyticsPage() {
  return (
    <>
    <div className ='bg-[#F9F5FF] '>
  <AnalyticHeader className="bg-[#FCF8FF]"/>
  <AnalyticsBoxes/>
  <AnalyticChart/>

    </div>
      
    </>
  
  )
}

export default AnalyticsPage