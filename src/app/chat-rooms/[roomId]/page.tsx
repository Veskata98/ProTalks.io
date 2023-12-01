'use client';

import { useRouter } from 'next/navigation';

type Params = {
    params: {
        roomId: string;
    };
};

export default function ChatRoom({ params }: Params) {
    const router = useRouter();
    return (
        <>
            <button type="button" onClick={() => router.back()}>
                Back
            </button>
            <h1>Room {params.roomId}</h1>
        </>
    );
}
