import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navber from "../components/Navber";
import  { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <>
        <Toaster />
        
        <div className="md:px-10 px-5 md:py-10 py-5 ">
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