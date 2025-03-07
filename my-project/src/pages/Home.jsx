import Banner from "../components/Banner";
import Categories from "../components/Categories";


const Home = () => {
    return (
        <div>
            {/* Banner section */}
            <Banner />

            {/* Category Sideber */}
            
            <div className="mt-[220px]  lg:px-10">
            <Categories />
            </div>

            {/* Gadgets Card */}

            
        </div>
    );
};

export default Home;