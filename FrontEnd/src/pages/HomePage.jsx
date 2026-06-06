import LandingHeader from "../components/landing/LandingHeader";
import HeroSection from "../components/landing/HeroSection";
import FeatureSection from "../components/landing/FeatureSection";
import LandingCTA from "../components/landing/LandingCTA";
import LandingFooter from "../components/landing/LandingFooter";
import { motion } from "motion/react";
import { useEffect , useState } from "react";
import { useContext } from "react";
import { checkLoginStatus } from "../services/authService";
import UserContext from "../context/UserContext";

function HomePage() {
  const [loading , setLoading] = useState(true);
  
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const checkAuth = async () => { try {

      console.log("Checking login status on dashboard load...");
      
      const data = await checkLoginStatus();
      
      if (data?.success) {
        setUser(data.user);
      } else {
        setUser(null);
      }
      
      setLoading(false);
    } catch (err) {
      console.error("Error checking login status:", err);
      setUser(null);
    }finally{
      setLoading(false);
    }
  }

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9ff] text-[#0b1c30]">
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/70 bg-white px-8 py-7 shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />
          <p className="text-sm font-medium text-slate-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f9ff] text-[#0b1c30]">
      <motion.div
        initial={{ x: -24, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <LandingHeader />
      </motion.div>
      <main>
        <motion.div
          initial={{ x: 28, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.08 }}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          initial={{ x: -28, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
        >
          <FeatureSection />
        </motion.div>

        <motion.div
          initial={{ x: 28, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.24 }}
        ></motion.div>
      </main>
      <motion.div
        initial={{ x: -24, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
      >
        {/* <LandingFooter /> */}
      </motion.div>
    </div>
  );
}

export default HomePage;
