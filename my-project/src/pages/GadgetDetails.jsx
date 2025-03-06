import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";



const GadgetDetails = () => {
    const data= useLoaderData();
    const {id}= useParams();
    const [gadget,setGadget]=useState({});

    useEffect(()=>{
        if(data){
            const singleData=data.find(gadget=> gadget.product_id == id);
        setGadget(singleData);
        }
    },[data, id]);

    

    const {product_id,product_img,product_title,price,description,rating,specification,availability}=gadget;
    
    return (
        <div className="flex">
            <div>
                <figure className="h-[300px] w-[300px] object-cover">
                    <img className="h-[300px] w-[300px]" src={product_img} alt="" />
                </figure>
            </div>
            <div>
                <h1>{product_title}</h1>
                
            </div>
                 
        </div>
    );
};

export default GadgetDetails;