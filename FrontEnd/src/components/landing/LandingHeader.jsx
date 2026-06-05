import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import BrandMark from '../BrandMark'
import { useContext } from 'react'
import UserContext from '../../context/UserContext'
import {logout} from '../../services/authService'

function LandingHeader() {
    const { user, setUser } = useContext(UserContext);
    const handleLogout = async () => {
      try {
        console.log('Logout initiated...');
        const data = await logout();
        if(data?.success){

          setUser(null);
          window.location.href = '/';
        } else {
          throw new Error(data?.message || 'Logout failed');
        }

      } catch (err) {
        console.error('Error occurred while logging out:', err);
      }
    };

  return (
    <header className="sticky top-0 z-50 border-b border-[#c3c6d7] bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <BrandMark
        />

        <div className="flex items-center gap-2">
          {!user &&

            <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-full border border-[#c3c6d7] bg-white px-4 py-2 font-medium text-[#004ac6] shadow-sm transition hover:-translate-y-0.5 hover:border-[#b4c5ff] hover:bg-[#e5eeff]"
            >
            Login
            <ArrowRight className="h-4 w-4" />
          </Link>
          }
          {!user &&
            
            <Link to="/signup" className="rounded-full bg-[#004ac6] px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(0,74,198,0.8)] transition hover:bg-[#003ea8]">
            Get Started
          </Link>
          }

           {user &&
<>
            <Link to="/dashboard" className="rounded-full bg-[#004ac6] px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_-18px_rgba(0,74,198,0.8)] transition hover:bg-[#003ea8]">
            Dashboard
          </Link>

          
            <Link to="/" className="rounded-full  px-5 py-2 text-sm font-semibold text-[#004ac6] border-2-[#004ac6] border   shadow-[0_12px_30px_-18px_rgba(0,74,198,0.8)] transition hover:bg-[#003ea8] hover:text-white " onClick={handleLogout}>
            Logout
          </Link>
</>
          }
          
        </div>
      </div>
    </header>
  )

}

export default LandingHeader
