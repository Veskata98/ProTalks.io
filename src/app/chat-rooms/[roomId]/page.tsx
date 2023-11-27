export default function ChatRoom({ params }: { params: { roomId: string } }) {
    return <h1>Room {params.roomId}</h1>;
}
