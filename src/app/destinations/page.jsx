import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage = async() => {
    const res = await fetch('http://localhost:5000/destination');
    const destinations = await res.json();
    console.log(destinations)
    return (
        <div className='max-w-7xl mx-auto'>
            <h1 className='text-2xl font-bold mt-10'>All Destinations</h1>
            <div className='grid grid-cols-4 gap-4'>
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination} />)
                }
            </div>
        </div>
    );
};

export default DestinationPage;