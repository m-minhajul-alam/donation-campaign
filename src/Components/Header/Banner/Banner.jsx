

const Banner = () => {
    return (
        <div className="hero min-h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/rMmzrQZ/Banner-bg.jpg)' }}>
            <div className="hero-overlay bg-[#fffffff2] bg-opacity-90"></div>
            <div className="hero-content text-center text-neutral-content">
                <div>
                    <h1 className="mb-5 text-4xl font-bold text-black">I Grow By Helping People In Need</h1>
                    <div className="flex justify-center items-center">
                        <input type="text" placeholder="Search Here... (For Example: 'Health')" className="px-4 h-12 text-sm text-black outline-none w-full max-w-xs border border-r-0 border-[#DEDEDE] rounded-lg rounded-r-none" />
                        <button className="h-12 px-4 rounded-lg rounded-l-none bg-[#FF444A] border-[#FF444A] hover:bg-[#984648] hover:border-[#984648] text-white text-sm font-semibold">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;