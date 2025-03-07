import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navber from "../components/Navber";
import  { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <>
        <Toaster />
        
        <div className="px-10 py-10 ">
            {/* Navber section */}
            <Navber />

            {/* Dynamic seciton */}
            <div className="min-h-[calc(100vh-370px)] container mx-auto">
          
                <Outlet />

            </div>


            
            
        </div>
        {/* Footer section */}
        <Footer />
        
        </>
    );
};

export default MainLayout;