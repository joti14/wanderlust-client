import MyBookingCard from '@/components/MyBookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const MyBookingPage = async () => {
    // server side user session
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user;
    // console.log(user)

    const res = await fetch(`http://localhost:5000/booking/${user?.id}`);

    const bookings = await res.json();
    console.log(bookings);

    return (
        <div className='max-w-5xl mx-auto'>
            <h1 className='text-3xl font-bold'>My Bookings</h1>
            <div>
                <h1>My Bookings</h1>
                <p>Manage and view your upcoming travel plans</p>
                {
                    bookings.map(booking => <MyBookingCard key={booking._id} booking={booking} />)
                }
            </div>
        </div>
    );
};

export default MyBookingPage;