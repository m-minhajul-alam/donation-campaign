import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import HomeCards from "../../Components/Main/homeCards/homeCards";


const Home = () => {

    const jsonData = useLoaderData()

    return (
        <div>
            <h2>This is Home Page</h2>
            <Banner></Banner>
            <HomeCards jsonData={jsonData}></HomeCards>
        </div>
    );
};

export default Home;