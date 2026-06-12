import LinkInfo from '../components/dashboard/LinkInfo'
import { Link } from 'react-router-dom'
import DashBoardHeader from '../components/dashboard/DashBoardHeader'
import DashboardSideBar from '../components/dashboard/DashBoardSideBar'
import { useEffect , useContext, useState } from 'react'
import{motion} from 'framer-motion'
import AllLinkContext from '../context/AllLinkContext'
import { sortRecentlyCreatedFirst } from '../services/sortingService'
import EditLinkInfo from '../components/dashboard/EditLinkInfo'
import {AnimatePresence} from 'framer-motion'
import UserContext from '../context/UserContext'
import LoadingScreen from '../components/shimmer/LoadingScreen'


import{getUserLinks} from '../services/linkService'
// DashBoardPage.jsx
function DashBoardPage() {
  const {allLinks, setAllLinks , searchText , setSearchText} = useContext(AllLinkContext);
  const[loading,  setLoading] = useState(false);
  const[filteredLinks , setFilteredLinks] = useState([]);
  const[editLinkVisibility , setEditLinkVisibility] = useState(false);
  const[linkToEdit , setLinkToEdit] = useState(null);
  const[linkId , setLinkId] = useState(null);
  const {user} = useContext(UserContext);


  useEffect(() => {
    const fetchLinks = async () => {
      console.log('Fetching user links for user:', user);
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
    return <LoadingScreen variant="dashboard" />;
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
          
          {/* Links list or empty state */}
          {filteredLinks.length === 0 ? (
            <div className="flex items-center justify-center w-full py-24">
              <div className="text-center bg-white/60 backdrop-blur-sm rounded-lg p-8 md:p-12 max-w-xl mx-4 shadow-md">
                <div className="flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12h3l3 8 4-16 3 8h4" />
                  </svg>
                </div>
                <p className="text-gray-800 text-xl md:text-2xl font-semibold">No links yet</p>
                <p className="text-sm text-gray-500 mt-2">Shorten your first link to start tracking clicks and performance.</p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm">Create Link</Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-3 mt-4">
              {
                filteredLinks.map((link , index) => (
                  console.log('Rendering LinkInfo for link:', link.host),
                  <LinkInfo key={link.linkId} originalLink={link.orignalLink} shortLink={link.shortLink} totalClicks={link.totalClicks} date={link.dateTime.substring(0, 10)} linkId={link.linkId} hostname={link.host} setLinkToEdit={setLinkToEdit} setEditLinkVisibility={setEditLinkVisibility} setLinkId={setLinkId} />
                ))
              }
            </div>
          )}
        </div>
            </motion.div>
      </div>

    </div>
  );
}

export default DashBoardPage;

