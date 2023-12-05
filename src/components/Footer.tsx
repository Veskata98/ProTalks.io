import React from 'react';

import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-blue-500 p-8 flex flex-col items-center">
            <div className="flex items-center space-x-4 mb-6">
                <Link href="/about" className="text-white hover:text-gray-300 transition duration-300">
                    About Us
                </Link>
                <Link href="/faq" className="text-white hover:text-gray-300 transition duration-300">
                    FAQ
                </Link>
                <Link href="/services" className="text-white hover:text-gray-300 transition duration-300">
                    Services
                </Link>
                <Link href="/contact" className="text-white hover:text-gray-300 transition duration-300">
                    Contact
                </Link>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-white mb-2">Subscribe to our newsletter</p>
                <div className="flex items-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-3 py-2 mr-2 border border-white rounded focus:outline-none"
                    />
                    <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200 transition duration-300">
                        Subscribe
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
