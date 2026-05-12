import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='container mx-auto flex justify-between'>
           <ul className='flex gap-4'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/destinations'}>Destinations</Link></li>
                <li><Link href={'/my-bookings'}>My Bookings</Link></li>
                <li><Link href={'/admin'}>Admin</Link></li>
                <li><Link href={'/add-destination'}>Add Destination</Link></li>
            </ul> 
            <div>
                <Image 
                    src={'/assets/Wanderlast.png'}
                    alt='logo'
                    height={100}
                    width={100}
                />
            </div>
            <ul className='flex gap-4'>
                <li><Link href={'/'}>Profile</Link></li>
                <li><Link href={'/'}>Login</Link></li>
                <li><Link href={'/'}>Sign Up</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;