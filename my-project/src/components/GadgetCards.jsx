import { useParams } from "react-router-dom";


const GadgetCards = () => {
    const category =useParams();
    return (
        <div>
            <h1>Gadgets Card..{category.category}</h1>
        </div>
    );
};

export default GadgetCards;