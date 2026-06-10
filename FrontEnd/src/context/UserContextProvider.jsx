import { useState } from 'react'
import UserContext from './UserContext'
import { useEffect } from 'react'

function UserContextProvider({children}) {
  const [user, setUser] = useState(null);
    const[loading , setLoading] = useState(true);


   useEffect(() => {
  const checkAuth = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/checkAuth`,
        {
          credentials: "include",
        }
      );

      const result = await response.json();

      setUser(result.user);
      setLoading(false);
    } catch (err) {
      setUser(null);
      setLoading(false);
      
    } finally {
      setLoading(false);
    }
  };

  checkAuth();
}, []);

  return (
    <UserContext.Provider value={{user, setUser , loading , setLoading}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider