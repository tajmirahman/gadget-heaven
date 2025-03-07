import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToLocalStorage } from "../utility";




const GadgetDetails = () => {

    const data = useLoaderData();
    const { id } = useParams();
    const [gadget, setGadget] = useState({});



    useEffect(() => {
        if (data) {
            const singleData = data.find(gadget => gadget.product_id == id);
            setGadget(singleData);
        }
    }, [data, id]);

    const handleAddToCart=(gadget)=>{
        addToLocalStorage(gadget);
    }

    const { product_img, product_title, price, description, specification, availability } = gadget;

    return (
        <div className="mb-[300px]">
            <div className="flex items-center justify-center bg-purple-800  relative ">
                <div className="text-center lg:w-4/6 space-y-3 h-60">
                    <h1 className="text-3xl font-bold text-white">Product Details</h1>
                    <p className='text-white'>Explore the latest gadgets that will take your experience to the next level. Start form devices to the coolest accessories, we have it all</p>
                </div>


                <div className="absolute z-30 top-[120px]  bg-gray-300 ">
                    <div className="flex justify-center items-center p-2 border-4 gap-4">
                        <div>
                            <figure className="h-[300px] w-[300px] object-cover">
                                <img className="h-[300px] w-[300px]" src={product_img} alt="" />
                            </figure>
                        </div>
                        <div className="space-y-2">
                            <h1 className="font-bold">{product_title}</h1>
                            <p ><span className="font-bold">Price</span>- $ {price}</p>

                            <div className="text-center w-20">

                                <span className="rounded-full">{availability ? <p className="bg-green-500 rounded-full text-xl text-white ">In Stock</p> : <p className="bg-red-500 rounded-full text-xl text-white">Stock Out</p>}</span>

                            </div>
                            <p className="font-bold">{description}</p>

                            <p ><span className="font-bold">Specification:</span>{specification && specification.map((spec, idx) => <li key={idx}>{spec}</li>)}</p>


                            <button onClick={()=>handleAddToCart(gadget)} className="btn bg-purple-600 text-white">Add To Cart</button>

                        </div>

                    </div>
                </div>

            </div>


        </div>
    );
};

export default GadgetDetails;