import { Link } from "react-router-dom";


const Card = ({ gadget }) => {
    const {product_id,product_img,product_title,price}=gadget;

    

    return (
        <div className="card bg-white  p-2">
            <figure className="h-[250px] w-full object-cover">
                <img className="h-[250px] w-full" src={product_img} alt="Shoes" />
            </figure>
            <div>
                <h1 className="font-bold">{product_title}</h1>
                <p>Price- $ {price}</p>
            
            </div>
            <div className="py-3 ">
                <Link to={`/details/${product_id}`}><button  className="btn bg-purple-800 text-white">Details</button></Link>
            </div>
        </div>
    );
};

export default Card;