import { useEffect } from "react"
import { getUserLinks } from "../../services/linkService"

const LinkTable = () => {
    const[linkData , setLinkData] = useState([]);
    const[loading , setLoading] = useState(true);

    
    useEffect(() => {
        const fetchLinks =  async () => {
            const data = await getUserLinks();
            setLinkData(data);
            setLoading(false);
        }
        
        fetchLinks();

    })
    if(loading) return <p>Loading...</p>

    return <>
    </>
}

export default LinkTable