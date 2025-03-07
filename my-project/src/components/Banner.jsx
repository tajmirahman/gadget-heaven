import bannerImg from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="md:flex items-center justify-center bg-purple-800 md:py-10">
            <div className="text-center md:w-4/6 space-y-3 md:h-64 mb-3">
                <h1 className="md:text-3xl font-bold text-white">Upgrade Your Tech Accessorize With Gadget Heaven Accessories</h1>
                <p className='text-white'>Explore the latest gadgets that will take your experience to the next level. Start form devices to the coolest accessories, we have it all</p>
                <button className="btn ">Shop Now</button>
            </div>
            <div className='md:absolute md:top-[350px] md:border-4 rounded-lg'>
                <img className='h-[250px] w-[500px] rounded-lg' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;