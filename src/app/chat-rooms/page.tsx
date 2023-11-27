import Link from 'next/link';

export default function ChatRooms() {
    return (
        <div className="flex m-auto w-3/4 justify-evenly h-auto items-center">
            <div>
                <Link href="/chat-rooms/1">Room 1</Link>
            </div>
            <div>
                <Link href="/chat-rooms/2">Room 2</Link>
            </div>
            <div>
                <Link href="/chat-rooms/3">Room 3</Link>
            </div>
            <div>
                <Link href="/chat-rooms/4">Room 4</Link>
            </div>
        </div>
    );
}
