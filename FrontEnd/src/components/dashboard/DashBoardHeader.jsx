import {Link} from 'react-router-dom';
import {useContext, useState} from 'react';
import AllLinkContext from '../../context/AllLinkContext';
import { sortOldestCreatedFirst } from '../../services/sortingService';

const DashBoardHeader  = () => {

    const[searchTerm, setSearchTerm] = useState('');
    const {allLinks , setAllLinks , searchText , setSearchText} = useContext(AllLinkContext); 


    const sortLinks = (links) => {
        console.log('Sorting links:', links);
        const sortedLinks = sortOldestCreatedFirst(links);
        setAllLinks(sortedLinks);
    }


    return (
        <nav className='w-full flex flex-col gap-6 lg:gap-8'>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 w-full'>
                <div>
                    <h1 className='text-3xl font-bold'>Link Metric</h1>
                    <p className='text-sm text-gray-500'>Manage and analyze your short links</p>
                </div>
                <div className='flex flex-col sm:flex-row gap-3 w-full sm:w-auto'>
                    <Link to='/analytics' className='md:hidden w-full sm:w-fit px-4 py-2 border border-blue-600 text-blue-700 hover:bg-blue-50 rounded-md shadow-sm text-center'>View analytics</Link>
                    <Link to='/' className='w-full sm:w-fit px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md shadow-sm text-center'>Create link</Link>
                </div>
            </div>

            <div className='w-full flex flex-col xl:flex-row xl:items-center gap-3'>
                <div className='flex-1 flex justify-start'>
                    <input
                        type='text'
                        placeholder='Search links'
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setSearchText(e.target.value);
                        }}
                        className='w-full max-w-2xl rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-700 bg-white shadow-sm'
                    />
                </div>

                <div className='flex flex-wrap gap-3'>
                    <button onClick={() => sortLinks(allLinks)} className='flex items-center gap-2 rounded-lg px-3 py-2 bg-white shadow-sm whitespace-nowrap'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-gray-600' viewBox='0 0 20 20' fill='currentColor'>
                            <path d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 9h12v5H4V9z' />
                        </svg>
                        <span >Created oldest first</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default DashBoardHeader;
