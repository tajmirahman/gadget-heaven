import { useEffect, useState } from "react";
import { getToLocalStorage, removeFromCart } from "../utility";
import Card from "../components/Card";


const Dashboard = () => {

    const [gadget, setGadget]=useState([]);
    useEffect(()=>{
        const gadget=getToLocalStorage();
        setGadget(gadget);
    },[]);

    /// remove cart from dashboard
    const handleRemove=(product_id)=>{
        removeFromCart(product_id);
        const gadget=getToLocalStorage();
        setGadget(gadget);

    }


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-5">

            {
                gadget.map(gadget=>  <Card handleRemove={handleRemove} gadget={gadget}/>)
            }
        </div>
    );
};

export default Dashboard;