import { useEffect, useState } from "react";
import DonationCard from "./DonationCard/DonationCard";

const Donation = () => {
    const [donations, setDonetions] = useState([]);
    const [noFound, setNoFound] = useState('');
    useEffect(() => {
        const allDonation = JSON.parse(localStorage.getItem("donations"));
        if (allDonation) {
            setDonetions(allDonation)
        } else {
            setNoFound('No Data Found')
        }
    }, [])

    return (
        <div>

            {noFound ? <p>{noFound}</p>
                :
                <div>
                    <div>
                        {donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)}
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;