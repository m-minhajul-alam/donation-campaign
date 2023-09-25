import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {

    const [card, setCard] = useState({})

    const { photo, category, title, description, price, category_bg, card_bg, text_button_bg } = card;

    console.log(card);

    const { id } = useParams();

    const cards = useLoaderData();

    useEffect(() => {

        if (cards) {
            const findCard = cards.find(card => card.id === id)
            setCard(findCard)
        }

    }, [id, cards])

    return (
        <div className="my-11 ">
            <div className="relative">
                <img src={photo} alt="Your Image" className="w-full h-full rounded-[30px]" />
                <div className="absolute inset-0 bg-black opacity-50 mt-auto h-[90px] rounded-b-[30px]"></div>
                <button style={{ backgroundColor: text_button_bg }} className="absolute btn border-none bottom-5 left-5 text-white">{`Donate $${price}`}</button>
            </div>
            <div className="my-12">
                <h3 className="text-3xl font-bold">{title}</h3>
                <p className="mt-5 text-base font-normal">{description}</p>
            </div>
        </div>
    );
};

export default CardDetails;