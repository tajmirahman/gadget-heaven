import { NavLink } from "react-router-dom";


const Category = ({category}) => {
    return (
        <div role="tablist" className="tabs tabs-border flex justify-center">

            <NavLink to={`/category/${category.category}`}  role="tab" className={({isActive})=> `tab text-2xl font-bold ${isActive ? "tab-active text-purple-700": ""}`}>{category.category}</NavLink>
            
        </div>
    );
};

export default Category;