import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4 flex justify-between items-center">
            <div className="text-white text-2xl font-bold">ProTalks.io</div>
            <div className="flex">
                <Link href="/" className="text-white mr-4">
                    Home
                </Link>
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
                <Link href="/logout" className="text-white">
                    Logout
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
