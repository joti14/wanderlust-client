import { TrashBin } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import BookingCancelAlert from './BookingCancelAlert';

const MyBookingCard = ({ booking }) => {
    const { destinationName, departureDate, _id, price } = booking;
    return (
        <div className='flex gap-5  space-y-5 border p-5 min-w-3xl'>
            <div>
                <Image
                    src={booking.imageUrl}
                    alt={booking.destinationName}
                    height={300}
                    width={300}
                />
            </div>
            <div>
                {/* <p>confirmed</p> */}
                <h2 className='text-xl font-bold'>{destinationName}</h2>
                <p className="text-gray-600">
                    Departure: {new Date(departureDate).toLocaleDateString(
                        "en-US",
                        {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }
                    )}
                </p>
                <p>Booking ID: {_id}</p>
                <h2 className='text-2xl text-cyan-500 font-bold'>${price}</h2>
                <BookingCancelAlert booking={booking} />
            
            </div>

        </div>
    );
};

export default MyBookingCard;