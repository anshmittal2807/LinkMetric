import {Clipboard} from 'lucide-react';
import { Check } from "lucide-react";
import{useState} from 'react';


const CopyButton = ({ textToCopy }) => {
    const[tick , setTick] = useState(false);
    const copy = async () => {

        console.log('Attempting to copy text:', textToCopy);

        try 
        {
            await navigator.clipboard.writeText(textToCopy);
            setTick(true);
            setTimeout(() => setTick(false), 2000); // Reset tick after 2 seconds
            return true;
        } catch (err) {
            console.error('Failed to copy text: ', err);
            return false;
        }
    }
    
    return <>
    <div>

    <button onClick={copy} className = 'bg-blue-300 p-2 rounded-md text-white hover:bg-blue-500 transition-colors duration-200 flex items-center gap-1 '>
        {tick ? (
            <Check className="h-4 w-4" />

        ) : (
            <Clipboard className="h-4 w-4" />
        )}
        
    </button>
    </div>
    
    
    </>
}

export default CopyButton;