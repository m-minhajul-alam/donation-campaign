import HomeCard from "./homeCard/homeCard";

const HomeCards = ({ jsonData }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-12">

            {
                jsonData?.map(card => <HomeCard key={card.id} card={card}></HomeCard>)
            }

        </div>
    );
};

export default HomeCards;