'use client';

import { useUser } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const Nav = () => {
    const { user, isLoaded } = useUser();

    return (
        <nav className="bg-blue-500 p-4 flex justify-between items-center">
            <div className="text-white text-2xl font-bold">
                <Link href="/">ProTalks.io</Link>
            </div>
            <div className="flex">
                <Link href="/chat-rooms" className="text-white mr-4">
                    Chat Rooms
                </Link>
                <Link href="/about" className="text-white mr-4">
                    About Us
                </Link>
                <Link href="/profile" className="text-white mr-4">
                    Profile
                </Link>
                <Link href="/become-a-host" className="text-white mr-4">
                    Become a Host
                </Link>
                <Link href="/subscribe" className="text-white mr-4">
                    Subscribe
                </Link>
                <Link href="/faq" className="text-white mr-4">
                    FAQ
                </Link>

                {isLoaded && user && <UserButton afterSignOutUrl="/" />}
            </div>
        </nav>
    );
};

export default Nav;
