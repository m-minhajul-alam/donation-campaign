import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ['#FF444A', '#00C49F'];

const Statistics = () => {
    const datas = useLoaderData();

    const [donations, setDonetions] = useState([]);

    const totalPrice = datas.reduce((acc, item) => acc + item.price, 0);
    const totalDonation = donations == null
        ? "0"
        : donations.reduce((acc, item) => acc + item.price, 0)

    useEffect(() => {
        const allDonation = JSON.parse(localStorage.getItem("donations"));
        setDonetions(allDonation)
    }, [])

    const data = [
        { name: 'total_donation', value: totalPrice },
        { name: 'your_donation', value: totalDonation },
    ];

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
        const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">{`${(percent * 100).toFixed(0)}%`}</text>
        );
    };

    return (
        <div className="h-[80vh] flex flex-col items-center justify-center">
            <ResponsiveContainer width="80%" height={400}>
                <PieChart>
                    <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={128} fill="#8884d8" dataKey="value" label={renderCustomizedLabel}>
                        {data.map((entry, index) => (<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2'>
                    <p className='text-xs'>Your Donation</p>
                    <div className='h-2 w-14 rounded-lg bg-[#00C49F]'></div>
                </div>
                <div className='flex items-center gap-2'>
                    <p className='text-xs'>Total Donation</p>
                    <div className='h-2 w-14 rounded-lg bg-[#FF444A]'></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
