import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import HomeCards from "../../Components/Main/homeCards/homeCards";


const Home = () => {

    const jsonData = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <HomeCards jsonData={jsonData}></HomeCards>
        </div>
    );
};

export default Home;