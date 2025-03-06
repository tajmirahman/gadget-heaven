import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";


const GadgetCards = () => {
    const data=useLoaderData();

    const {category} =useParams();

    const [gadget, setGadget]=useState([]);

    useEffect(()=>{
        if(category){
            if(data && category){
                const filterCategory= [...data].filter(gadget=> gadget.category === category);
                setGadget(filterCategory);
            }
        }
        else{
            setGadget(data);
        }
    
    },[category, data])



    return (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 bg-gray-200 p-3">
            
            {
                gadget.length >0 ?(gadget.map(gadget=> <Card key={gadget.id} gadget={gadget} />))
                :<h1 className="text-2xl font-bold text-red-600 ">Category has no found</h1>
            }
        </div>
        </>
    );
};

export default GadgetCards;