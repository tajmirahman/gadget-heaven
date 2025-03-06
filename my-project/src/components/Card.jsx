

const Card = ({ gadget }) => {
    const {product_img,product_title,price,description,}=gadget;

    return (
        <div className="card bg-white  p-2">
            <figure className="h-[250px] w-full object-cover">
                <img className="h-[250px] w-full" src={product_img} alt="Shoes" />
            </figure>
            <div>
                <h1>{product_title}</h1>
                
            </div>
        </div>
    );
};

export default Card;