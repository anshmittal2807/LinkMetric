import LinkInfo from '../components/dashboard/LinkInfo'
import DashBoardHeader from '../components/dashboard/DashBoardHeader'
import DashboardSideBar from '../components/dashboard/DashBoardSideBar'
import { useEffect , useContext, useState } from 'react'
import{OrbitProgress} from 'react-loading-indicators'
import{motion} from 'framer-motion'
import AllLinkContext from '../context/AllLinkContext'
import { sortRecentlyCreatedFirst } from '../services/sortingService'
import EditLinkInfo from '../components/dashboard/EditLinkInfo'
import {AnimatePresence} from 'framer-motion'


import{getUserLinks} from '../services/linkService'
// DashBoardPage.jsx
function DashBoardPage() {
  const {allLinks, setAllLinks , searchText , setSearchText} = useContext(AllLinkContext);
  const[loading,  setLoading] = useState(false);
  const[filteredLinks , setFilteredLinks] = useState([]);
  const[editLinkVisibility , setEditLinkVisibility] = useState(false);
  const[linkToEdit , setLinkToEdit] = useState(null);
  const[linkId , setLinkId] = useState(null);


  useEffect(() => {
    const fetchLinks = async () => {
      try {
        setLoading(true);
      
        const data = await getUserLinks();
        if (data?.success) {
          setAllLinks(data.data);
          console.log('Fetched user links:', data.data);
          const sortedLinks = sortRecentlyCreatedFirst(data.data);
          setFilteredLinks(sortedLinks);
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
        const normalizedSearchText = String(searchText).trim().toLowerCase(); 
        const filteredOriginalLinks = allLinks.filter((link) =>
          String(link?.orignalLink ?? '').toLowerCase().trim().includes(normalizedSearchText) ||           String(link?.shortLink ?? '').toLowerCase().trim().includes(normalizedSearchText)

        );
               
        setFilteredLinks(filteredOriginalLinks);
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
     <AnimatePresence>
       {editLinkVisibility && <EditLinkInfo setVisibility={setEditLinkVisibility} originalLink={linkToEdit?.originalLink} shortLink={linkToEdit?.shortLink} linkId={linkId} />}
     </AnimatePresence>

        
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
              filteredLinks.map((link , index) => (
                console.log('Rendering LinkInfo for link:', link.host),
                <LinkInfo key={link.linkId} originalLink={link.orignalLink} shortLink={link.shortLink} totalClicks={link.totalClicks} date={link.dateTime.substring(0, 10)} linkId={link.linkId} hostname={link.host} setLinkToEdit={setLinkToEdit} setEditLinkVisibility={setEditLinkVisibility} setLinkId={setLinkId} />
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

