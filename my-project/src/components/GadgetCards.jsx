import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";


const GadgetCards = () => {
    const data=useLoaderData();

    const category =useParams();


    return (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 bg-gray-200 p-3">
            
            {
                data.map(gadget=> <Card key={gadget.id} gadget={gadget} />)
            }
        </div>
        </>
    );
};

export default GadgetCards;