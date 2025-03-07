import { useEffect, useState } from "react";
import { getToLocalStorage } from "../utility";
import Card from "../components/Card";


const Dashboard = () => {

    const [gadget, setGadget]=useState([]);
    useEffect(()=>{
        const gadget=getToLocalStorage();
        setGadget(gadget);
    },[])
    return (
        <div>
            <h1>This is Dashboard page</h1>
            {
                gadget.map(gadget=>  <Card gadget={gadget}/>)
            }
        </div>
    );
};

export default Dashboard;