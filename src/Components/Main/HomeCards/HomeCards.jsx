import HomeCard from "./homeCard/homeCard";

const HomeCards = ({ filteredData }) => {

    return (
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12">
            {filteredData.map(card => <HomeCard key={card.id} card={card}></HomeCard>)}
        </div>
    );
};

export default HomeCards;