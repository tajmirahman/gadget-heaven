import bannerImg from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="text-center w-4/6 space-y-3">
                <h1 className="text-3xl font-bold">Upgrade Your Tech Accessorize With Gadget Heaven Accessories</h1>
                <p>Explore the latest gadgets that will take your experience to the next level. Start form devices to the coolest accessories, we have it all</p>
                <button className="btn ">Shop Now</button>
            </div>
            <div className='absolute top-80'>
                <img className='h-[200px] w-[400px]' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;