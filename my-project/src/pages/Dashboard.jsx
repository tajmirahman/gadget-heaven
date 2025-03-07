import { useEffect, useState } from "react";
import { getToLocalStorage, removeFromCart } from "../utility";
import Card from "../components/Card";



const Dashboard = () => {

    const [gadget, setGadget] = useState([]);
    const [price, setPrice] = useState([]);


    useEffect(() => {
        const gadget = getToLocalStorage();
        setGadget(gadget);
        setPrice(gadget);
    }, []);

    const handleSortPrice = (sortBy) => {
        if (sortBy === 'price') {
            const sortByPrice = [...gadget].sort((a, b) => b.price - a.price);
            setPrice(sortByPrice);
            
        }
    }

    /// remove cart from dashboard
    const handleRemove = (product_id) => {
        removeFromCart(product_id);
        const gadget = getToLocalStorage();
        setGadget(gadget);
        setPrice(gadget);

    }


    return (
        <>
            <div className="flex justify-end mt-4">
                <button onClick={() => handleSortPrice('price')} className="btn bg-purple-700 text-white">Filter By Price</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-5">

                {
                    price.map(gadget => <Card key={gadget.product_id} handleRemove={handleRemove} gadget={gadget} />)
                }
            </div>
        </>
    );
};

export default Dashboard;