import AllLinkContext from './AllLinkContext'
import{useState} from 'react';

function AllLinkContextProvider({children}) {
    const [allLinks , setAllLinks] = useState([]);
    const[searchText , setSearchText] = useState('');

  return (
    <AllLinkContext.Provider value={{allLinks, setAllLinks , searchText, setSearchText}}>
      {children}
    </AllLinkContext.Provider>
  )
}


export default AllLinkContextProvider