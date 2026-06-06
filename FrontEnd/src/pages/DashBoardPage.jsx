// DashBoardPage.jsx
import React from 'react'
import LinkInfo from '../components/dashboard/LinkInfo'
import DashBoardHeader from '../components/dashboard/DashBoardHeader'
import DashboardSideBar from '../components/dashboard/DashBoardSideBar'
import { useEffect , useContext } from 'react'
import{OrbitProgress} from 'react-loading-indicators'
import{motion} from 'framer-motion'
import AllLinkContext from '../context/AllLinkContext'

import{getUserLinks} from '../services/linkService'
// DashBoardPage.jsx
function DashBoardPage() {
  const {allLinks, setAllLinks , searchText , setSearchText} = useContext(AllLinkContext);
  const[loading,  setLoading] = React.useState(false);
  const[filteredLinks , setFilteredLinks] = React.useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        setLoading(true);
      
        const data = await getUserLinks();
        if (data?.success) {
          setAllLinks(data.data);
          console.log('Fetched user links:', data.data);
          setFilteredLinks(data.data);
        } else {
          setAllLinks([]);
          setFilteredLinks([]);
        } 
    }catch (err){
          console.error('Error fetching user links:', err);
          setAllLinks([]);
          setFilteredLinks([]);
        }finally{
          setLoading(false);
      }
    }
    fetchLinks();
  }
    , []);

    useEffect(() =>{

      if(searchText.trim() === ''){
        setFilteredLinks(allLinks);
      }

      else {
        const filtered = allLinks.filter((l) => l.originalLink.toLowerCase().trim().includes(searchText.toLowerCase()));
        setFilteredLinks(filtered);
      }

    } ,[searchText , allLinks])



  if (loading) {
    return (
      <div className='flex h-screen w-full items-center justify-center bg-slate-100 text-[#0b1c30]'>
        <OrbitProgress variant="disc" dense color="blue" size="large" text="" />
      </div>
    );
  }

  return (
    <div className='flex h-screen w-full items-stretch overflow-hidden bg-slate-100 text-[#0b1c30]'>
      
      <motion.div
      initial = {{y:-100 ,
        opacity:0}}
      animate = {{y:0,
        opacity:1}}
      transition = {{duration:0.55 , ease:'easeOut'}}
      >

      <div className='hidden md:block h-full shrink-0'>
        <DashboardSideBar />
      </div>
      </motion.div>

      
      <div className='flex-1 min-w-0 overflow-y-auto p-4 lg:p-6'>
         <motion.div
              initial = {{
                x:24,
                opacity:0
              }}
              animate = {{
                x:0,
                opacity:1}}

                transition ={{
                  duration:0.55,
                  ease:'easeOut'
                }}

            >
        <div className='mx-auto w-full max-w-6xl'>
          <DashBoardHeader />
          
          <div 
          className="flex flex-col gap-3 mt-4">
            {
              filteredLinks.map((link) => (
                console.log('Rendering LinkInfo for link:', link.host),
                <LinkInfo key={link._id} originalLink={link.originalLink} shortLink={link.shortLink} totalClicks={link.totalClicks} date={link.dateTime.substring(0, 10)} hostname={link.host} />
              ))
            }

          </div>
        </div>
            </motion.div>
      </div>

    </div>
  );
}

export default DashBoardPage;

