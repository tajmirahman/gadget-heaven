import bannerImg from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="flex items-center justify-center bg-purple-800 py-10">
            <div className="text-center w-4/6 space-y-3 h-64">
                <h1 className="text-3xl font-bold text-white">Upgrade Your Tech Accessorize With Gadget Heaven Accessories</h1>
                <p className='text-white'>Explore the latest gadgets that will take your experience to the next level. Start form devices to the coolest accessories, we have it all</p>
                <button className="btn ">Shop Now</button>
            </div>
            <div className='absolute top-[350px] border-4 rounded-lg'>
                <img className='h-[250px] w-[500px] rounded-lg' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;