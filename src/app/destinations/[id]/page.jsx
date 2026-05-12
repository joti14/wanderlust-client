import { DeleteDestination } from '@/components/DeleteDestination';
import { EditModal } from '@/components/EditModal';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { PiMapPinLineBold } from 'react-icons/pi';
import { SlCalender } from 'react-icons/sl';

const DestinationDetailsPage = async ({ params }) => {
    const { id } = await params

    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();

    const { _id, imageUrl, destinationName, country, duration, price, description } = destination;

    return (
        <div className='max-w-7xl mx-auto my-5'>
            <div className='flex justify-end items-center gap-3'>
                <EditModal destination={destination} />
                <DeleteDestination destination={destination}/>
            </div>
            <Image
                className='w-full h-100'
                src={imageUrl}
                alt={destinationName}
                width={500}
                height={400}
            />
            <div className='flex items-center gap-2 text-gray-500'>
                <PiMapPinLineBold />
                <p>{country}</p>
            </div>
            <div className='flex justify-between text-xl'>
                <h1>{destinationName}</h1>
                <p>${price}/person</p>
            </div>
            <div className='flex gap-2 items-center text-gray-500'>
                <SlCalender />
                {duration}
            </div>
            <h1 className='text-2xl font-bold mt-10'>Overview</h1>
            <p>{description}</p>
        </div>
    );
};

export default DestinationDetailsPage;