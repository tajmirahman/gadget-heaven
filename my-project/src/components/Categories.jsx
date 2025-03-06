import { Outlet, useLoaderData } from "react-router-dom";
import Category from "./Category";


const Categories = () => {
    const categories= useLoaderData();

    return (
        <>
            <div className="text-center mb-10">
                <h1 className="text-3xl font-bold">Explore Cutting-Edge Gadgets</h1>

            </div>

            <div className="flex gap-6">

                <div>
                    {
                      categories.map(category=> <Category key={category.id} category={category}  />)  
                    }
                </div>

                <div>
                    <Outlet />
                </div>
            </div>

        </>
    );
};

export default Categories;