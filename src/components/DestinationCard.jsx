import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { PiMapPinLineBold } from 'react-icons/pi';
import { SlCalender } from 'react-icons/sl';

const DestinationCard = ({ destination }) => {
    const { _id, imageUrl, destinationName, country, duration, price, } = destination;
    return (
        <div className='border p-5 rounded-md shadow-md my-15'>
            <Image
                src={imageUrl}
                alt={destinationName}
                width={400}
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
            <Link href={`/destinations/${_id}`}>
                <Button variant='ghost' className='mt-1 text-cyan-500 underline'>
                    BOOK NOW
                    <GoArrowUpRight />
                </Button>
            </Link>
        </div>
    );
};

export default DestinationCard;