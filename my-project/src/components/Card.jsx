import { Link, useLocation } from "react-router-dom";
import { FaTrash } from "react-icons/fa";


const Card = ({ gadget,handleRemove }) => {

    const {pathname}=useLocation();

    const {product_id,product_img,product_title,price}=gadget;

    

    
    return (
        <div className="card bg-white  p-2">
            {pathname === '/dashborad' && <div onClick={()=>handleRemove(product_id)} className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 text-white"><FaTrash /></div>}

            

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