import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navber from "../components/Navber";


const MainLayout = () => {
    return (
        <div>
            {/* Navber section */}
            <Navber />

            {/* Dynamic seciton */}
            <div className="min-h-[calc(100vh-370px)] container mx-auto px-20 py-12">
          
                <Outlet />

            </div>


            {/* Footer section */}
            <Footer />
            
        </div>
    );
};

export default MainLayout;