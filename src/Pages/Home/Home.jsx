import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import HomeCards from "../../Components/Main/homeCards/homeCards";
import { useState } from "react";

const Home = () => {
    const jsonData = useLoaderData();
    const [filteredData, setFilteredData] = useState(jsonData);

    const handleCategoryFilter = (category) => {
        if (category === "") {

            setFilteredData(jsonData);
        } else {

            const filtered = jsonData.filter((item) => item.category === category);
            setFilteredData(filtered);
        }
    };

    return (
        <div>
            <Banner handleCategoryFilter={handleCategoryFilter}></Banner>
            <HomeCards filteredData={filteredData}></HomeCards>
        </div>
    );
};

export default Home;