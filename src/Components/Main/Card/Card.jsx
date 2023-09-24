

const Card = ({card}) => {

    const { photo, category, title, category_bg, card_bg, text_button_bg } = card;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category}</h2>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default Card;