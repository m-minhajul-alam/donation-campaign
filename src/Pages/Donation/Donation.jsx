import { useEffect, useState } from "react";
import DonationCard from "./DonationCard/DonationCard";

const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [noFound, setNoFound] = useState('');
    const [isShowAll, setIsShowAll] = useState(false);

    useEffect(() => {
        const allDonations = JSON.parse(localStorage.getItem("donations"));
        if (allDonations) {
            setDonations(allDonations);
        } else {
            setNoFound('No Data Found');
        }
    }, []);

    return (
        <div className="my-8 max-w-[1180px] mx-auto">
            {
                noFound
                    ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
                    : <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {
                            isShowAll
                                ? donations.map(donation => (<DonationCard key={donation.id} donation={donation}></DonationCard>))
                                : donations.slice(0, 3).map(donation => (<DonationCard key={donation.id} donation={donation}></DonationCard>))
                        }
                    </div>
            }
            {
                !isShowAll && donations.length > 3 && <button onClick={() => { setIsShowAll(true) }} className="btn text-base font-semibold text-white hover:bg-green-700 block mx-auto mt-2 bg-[#009444]">See All</button>
            }
        </div>
    );
};

export default Donation;
