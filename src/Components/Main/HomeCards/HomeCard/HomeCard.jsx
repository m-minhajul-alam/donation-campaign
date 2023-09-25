

const HomeCard = ({ card }) => {

    const { photo, category, title, category_bg, card_bg, text_button_bg } = card;

    return (
        <div className="rounded-lg" style={{ background: card_bg }}>
            <figure><img className="w-full" src={photo} alt="" /></figure>
            <div className="p-3">
                <h2 style={{ background: category_bg, color: text_button_bg }} className="w-fit py-1 px-2 rounded my-1 text-xs font-medium">{category}</h2>
                <h2 style={{ color: text_button_bg }} className="text-base font-semibold">{title}</h2>
            </div>
        </div>
    );
};

export default HomeCard;