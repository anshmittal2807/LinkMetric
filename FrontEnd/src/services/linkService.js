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
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/link/getAllLinks`,
    {
      method: "GET",
      credentials: "include",
    }
  );

  console.log("STATUS:", res.status);

  const data = await res.json().catch(() => null);

  console.log("RESPONSE:", data);

  if (!res.ok) {
    throw new Error(data?.message || `HTTP ${res.status}`);
  }

  return data;
};


export const deleteLink = async (linkId) => {
    try {
      console.log(`${import.meta.env.VITE_BACKEND_URL}/link/delete/${linkId}`)
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/link/delete/${linkId}`, {
            method: 'DELETE',
            credentials: 'include',
        });
        const data = await res.json();
        if (!data.success) {
            throw new Error(data?.message || 'Failed to delete link');
        }
        return data;
    } catch (err) {
        console.log('Error deleting link:', err);
        throw err;
    }
};

export const updateLinkAlias = async (linkId, newAlias) => {

    console.log('Updating link alias:', { linkId, newAlias });
        try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/link/update`, {
                    method: 'PATCH',
                    credentials:'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        "hash": newAlias,
                        "linkId": linkId
                    })
                });
                const data = await res.json();
                if (!data.success) {
                    throw new Error(data?.message || 'Failed to update link alias');
                }

                return data;
        } catch (err) {
            console.log('Error updating link alias:', err);
            throw err;
        }
}


