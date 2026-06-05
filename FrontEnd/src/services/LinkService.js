 export const shortenLink = async (originalUrl) => {
    try{
        const res = await  fetch(`${import.meta.env.VITE_BACKEND_URL}/link/saveLink`, {
            method: 'POST',
            body: JSON.stringify({
                'link' : originalUrl
            }),
            credentials: 'include', // Include cookies for session management
            
            headers: { 'Content-Type': 'application/json' },
        });
        const data =  await res.json();
        console.log('Shorten link response:', data);

        if(!data.success){
            throw new Error(data?.message || 'Failed to shorten link');

        }
        return data;
    }catch(err){

        console.log('Error shortening link:', err);
        throw err;
    }

}


export const getUserLinks = async () => {

    try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/link/getAllLinks`, {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body : {
            }
        })
        const data = await res.json();
        return data;
    
    } catch(err){
        console.error('Error fetching user links:', err);
        throw err;
    }


}

