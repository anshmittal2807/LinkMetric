import DashboardSideBar from '../components/dashboard/DashBoardSideBar'
import AnalyticHeader from '../components/analytics/AnalyticHeader'
import AnalyticsBoxes from '../components/analytics/AnalyticsBoxes'
import AnalyticChart from '../components/analytics/AnalyticChart'
import AnalyticsLinkList from '../components/analytics/AnalyticsLinkList'
import { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'
import LoadingScreen from '../components/shimmer/LoadingScreen'
import { getAnalytics } from '../services/analyticsService'
import { getUserLinks } from '../services/linkService'


function AnalyticsPage() {

  const { user } = useContext(UserContext)

  const [loading, setLoading] = useState(true)

  const [clickRange, setClickRange] = useState('daily')


  const [analytics, setAnalytics] = useState({
    topReferrers: [],
    dailyClicks: [],
    monthlyClicks: [],
  })


  const [links, setLinks] = useState([])

  const [linksLoading, setLinksLoading] = useState(true)



  useEffect(() => {

    console.log(user)
    const loadAnalytics = async () => {

      try {

        setLoading(true)

        const data = await getAnalytics()


        if (data?.success) {

          setAnalytics({

            topReferrers: Array.isArray(data.topReferrers)
              ? data.topReferrers
              : [],


            dailyClicks: Array.isArray(data.dailyClicks)
              ? data.dailyClicks
              : [],


            monthlyClicks: Array.isArray(data.monthlyClicks)
              ? data.monthlyClicks
              : [],

          })


        } else {

          setAnalytics({
            topReferrers: [],
            dailyClicks: [],
            monthlyClicks: [],
          })

        }


      } catch(err) {


        setAnalytics({
          topReferrers: [],
          dailyClicks: [],
          monthlyClicks: [],
        })


      } finally {

        setLoading(false)

      }

    }


    loadAnalytics()


  }, [])



  useEffect(() => {


    const loadLinks = async () => {


      try {


        setLinksLoading(true)


        const data = await getUserLinks()



        if(data?.success && Array.isArray(data.data)) {


          setLinks(data.data)


        } else {


          setLinks([])

        }



      } catch(err) {


        setLinks([])


      } finally {


        setLinksLoading(false)

      }


    }


    loadLinks()


  }, [])



  if(loading || linksLoading) {

    return (
      <LoadingScreen 
        title="Loading analytics"
        subtitle="Preparing your clicks and referrer data."
      />
    )

  }



  return (

    <div className="flex min-h-screen w-screen ">


      <div className="hidden md:block">
        
        <DashboardSideBar bgColor={"[#F9F5FF]"} />

      </div>



      <div className='bg-[#F9F5FF] flex-1 px-4 py-4 sm:px-6 w-full flex flex-col overflow-y-auto'>


        <AnalyticHeader className="bg-[#FCF8FF]" />


        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col">


          <AnalyticsBoxes


            totalLinks={user?.totalLinks || 0}


            totalClicks={user?.totalClicks || 0}


            topReferrers={analytics.topReferrers}


          />



          <AnalyticChart


            dailyClicks={analytics.dailyClicks}


            monthlyClicks={analytics.monthlyClicks}


            clickRange={clickRange}


            setClickRange={setClickRange}


          />



          <AnalyticsLinkList links={links} />



        </div>


      </div>


    </div>

  )

}


export default AnalyticsPage