import { Link } from "react-router-dom";


const DonationCard = ({ donation }) => {

    const { thumbnail, category, title, category_bg, card_bg, text_button_bg, price } = donation;

    return (
        <div>

            <div style={{ backgroundColor: card_bg }} className="flex items-center rounded-md gap-5">
                <div>
                    <img className="h-32" src={thumbnail} alt="" />
                </div>
                <div>
                    <h4 style={{ backgroundColor: category_bg, color: text_button_bg }} className="w-fit">{category}</h4>
                    <h2>{title}</h2>
                    <p style={{ color: text_button_bg }}>{`$${price}`}</p>
                    <Link><button style={{ backgroundColor: text_button_bg }} className="text-white">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;