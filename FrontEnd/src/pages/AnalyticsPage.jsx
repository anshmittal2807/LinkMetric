import React from 'react'
import DashboardSideBar from '../components/dashboard/DashBoardSideBar'
import AnalyticHeader from '../components/analytics/AnalyticHeader'
import AnalyticsBoxes from '../components/analytics/AnalyticsBoxes'
import AnalyticChart from '../components/analytics/AnalyticChart'
import { useContext } from 'react'
import UserContext from '../context/UserContext'


function AnalyticsPage() {
const{user} = useContext(UserContext);
console.log('User from context in AnalyticsPage:', user.totalClicks );

  return (
    <>
    <div className="flex min-h-screen w-screen ">
      <div className="hidden md:block">
        
    <DashboardSideBar bgColor = {"[#F9F5FF]"} />
      </div>

    <div className ='bg-[#F9F5FF] flex-1 px-6 w-full flex flex-col '>
  <AnalyticHeader className="bg-[#FCF8FF]" />
  <AnalyticsBoxes totalLinks={user.totalLinks}  totalClicks={user.totalClicks}/>
  <AnalyticChart />
    </div>

    </div>
      
    </>
  
  )
}

export default AnalyticsPage