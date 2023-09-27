import { useState } from "react";

const Banner = ({ handleCategoryFilter }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSearchClick = () => {
        handleCategoryFilter(inputValue);
    };

    return (
        <div className="hero min-h-[75vh] mt-3 relative" style={{ backgroundImage: 'url(https://i.ibb.co/rMmzrQZ/Banner-bg.jpg)' }}>
            <div className="bg-white h-full w-full absolute opacity-90"></div>
            <div className="absolute">
                <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-bold my-9 px-3 md:px-0">I Grow By Helping People In Need</h1>
                <div className="flex justify-center items-center px-4 md:px-0">
                    <input type="text" onChange={handleInputChange} placeholder="Search Here... (ex: 'Health')" className="px-4 h-12 text-sm text-black outline-none w-full max-w-xs border border-r-0 border-[#DEDEDE] rounded-lg rounded-r-none" />
                    <button onClick={handleSearchClick} className="h-12 px-4 rounded-lg rounded-l-none bg-[#FF444A] border-[#FF444A] hover:bg-[#984648] hover:border-[#984648] text-white text-sm font-semibold">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;