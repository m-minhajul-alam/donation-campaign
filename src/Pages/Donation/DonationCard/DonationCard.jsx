import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
    const { id, thumbnail, category, title, category_bg, card_bg, text_button_bg, price } = donation;

    return (
        <div>

            <div style={{ backgroundColor: card_bg }} className="flex items-center rounded-md gap-5">
                <div>
                    <img className="h-44 w-full" src={thumbnail} alt="" />
                </div>
                <div className="p-y-3">
                    <h4 style={{ backgroundColor: category_bg, color: text_button_bg }} className="w-fit text-xs font-normal py-1 px-2 rounded">{category}</h4>
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p style={{ color: text_button_bg }} className="text-sm font-semibold mb-2">{`$${price}`}</p>
                    <Link to={`/cardDetails/${id}`}><button style={{ backgroundColor: text_button_bg }} className="text-base font-semibold text-white py-1 px-2 rounded">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;