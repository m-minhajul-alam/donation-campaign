import Card from "../Card/Card";

const Cards = ({ dataCards }) => {

    return (
        <div>
            <h2>Here all card</h2>

            {
                dataCards?.map(card => <Card key={card.id} card={card}></Card>)
            }

        </div>
    );
};

export default Cards;