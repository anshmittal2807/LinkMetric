import {Copy} from 'lucide-react';
import { Check } from "lucide-react";
import{useState} from 'react';


const CopyButton = ({ textToCopy, buttonClassName = '', iconClassName = 'text-blue-800' }) => {
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

    <button onClick={copy} className={`p-2 rounded-md transition-colors duration-200 flex items-center gap-1 ${buttonClassName}`}>
        {tick ? (
            <Check className={`h-4 w-4 ${iconClassName}`} strokeWidth={3} />

        ) : (
            <Copy className={`h-4 w-4 ${iconClassName}`} strokeWidth={3} />
        )}
        
    </button>
    </div>
    
    
    </>
}

export default CopyButton;