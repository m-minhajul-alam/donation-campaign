import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';

const CardDetails = () => {
    const [card, setCard] = useState({})
    const { photo, title, description, price, text_button_bg } = card;

    const { id } = useParams();
    const cards = useLoaderData();
    useEffect(() => {
        if (cards) {
            const findCard = cards.find(card => card.id === id)
            setCard(findCard)
        }
    }, [id, cards])

    const handelDonations = () => {
        const addedDonation = [];
        const allDonation = JSON.parse(localStorage.getItem("donations"));
        if (!allDonation) {
            addedDonation.push(card);
            localStorage.setItem("donations", JSON.stringify(addedDonation));
            swal("Thanks!", "Thanks For Your Donation!", "success");
        } else {
            const isExist = allDonation?.find(donation => donation.id === id);
            if (!isExist) {
                addedDonation.push(...allDonation, card);
                localStorage.setItem("donations", JSON.stringify(addedDonation));
                swal("Thanks!", "Thanks For Your Donation!", "success");
            } else {
                swal("Attention", "You Alredy Send Donation!", "info");
            }
        }
    }



    return (
        <div className="my-11 ">
            <div className="relative">
                <img src={photo} alt="Your Image" className="w-full h-full rounded lg:rounded-[30px]" />
                <div className="absolute inset-0 bg-black opacity-50 mt-auto h-11 lg:h-24 rounded-b-[30px]"></div>
                <button onClick={handelDonations} style={{ backgroundColor: text_button_bg }} className="absolute rounded text-xs p-1 lg:btn border-none bottom-2 lg:bottom-5 left-2 lg:left-5 lg:text-white text-white">{`Donate $${price}`}</button>
            </div>
            <div className="my-12">
                <h3 className="text-3xl font-bold">{title}</h3>
                <p className="mt-5 text-base font-normal">{description}</p>
            </div>
        </div>
    );
};

export default CardDetails;