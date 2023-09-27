import { useContext } from "react";
import HomeCard from "./homeCard/homeCard";
import { SearchValue } from "../../../Root/Root";

const HomeCards = ({ jsonData }) => {

    const [inputSearch, setInputSrarch] = useContext(SearchValue)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12">

            {jsonData.map(
                card => <HomeCard key={card.id} card={card}></HomeCard>)}

            {jsonData.map(
                card => inputSearch == card.category
                    && <HomeCard key={card.id} card={card}></HomeCard>)}

        </div>
    );
};

export default HomeCards;