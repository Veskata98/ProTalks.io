'use client';

import Login from '@/app/(auth)/login/page';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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

                {isLoggedIn ? (
                    <Link href="/logout" className="text-white mr-4">
                        Logout
                    </Link>
                ) : (
                    <>
                        <Link href="/login" className="text-white mr-4">
                            Login
                        </Link>
                        <Link href="/register" className="text-white mr-4">
                            Register
                        </Link>
                    </>
                )}
                <button onClick={() => setIsLoggedIn((prevState) => !prevState)} className="ml-4">
                    Toggle login
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
