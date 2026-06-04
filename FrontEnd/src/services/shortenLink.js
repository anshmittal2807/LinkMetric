const shortenLink = async (originalUrl) => {
    try{
        const res = await  fetch(`${import.meta.env.VITE_BACKEND_URL}/link/saveLink`, {
            method: 'POST',
            body: JSON.stringify({
                'link' : originalUrl
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        const data =  await res.json();
        console.log('Shorten link response:', data);

        if(!data.success){
            throw new Error(data?.message || 'Failed to shorten link');

        }
    }catch(err){

        console.error('Error shortening link:', err);
        throw err;
    }


}