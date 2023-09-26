import { useEffect, useState } from "react";
import DonationCard from "./DonationCard/DonationCard";

const Donation = () => {
    const [donations, setDonetions] = useState([]);
    const [noFound, setNoFound] = useState('');


    const [isShow, setIsShow] = useState(false)


    useEffect(() => {
        const allDonation = JSON.parse(localStorage.getItem("donations"));
        if (allDonation) {
            setDonetions(allDonation)
        } else {
            setNoFound('No Data Found')
        }
    }, [])


    return (
        <div className="my-8">



            {
                noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> : <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {
                        isShow ? donations.map(donation => (<DonationCard key={donation.id} donation={donation}></DonationCard>))
                            : donations.slice(0, 3).map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
                    }
                </div>
            }
            {
                donations.length > 3 ? <button onClick={() => { setIsShow(!isShow) }} className="btn text-base font-semibold text-white hover:bg-green-700 block mx-auto mt-2 bg-[#009444]">See More</button> : ""
            }


        </div>
    );
};

export default Donation;