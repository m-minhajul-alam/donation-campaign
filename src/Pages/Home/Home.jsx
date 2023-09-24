import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Cards from "../../Components/Main/Cards/Cards";


const Home = () => {

    const dataCards = useLoaderData()

    return (
        <div>
            <h2>This is Home Page</h2>
            <Banner></Banner>
            <Cards dataCards={dataCards}></Cards>
        </div>
    );
};

export default Home;