export default function FAQPage() {
    return (
        <div className="h-full w-4/6">
            <div className="container py-8 px-12 bg-lighter-grey shadow h-full">
                <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions (FAQ)</h1>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Question 1: What is ProTalks.io?</h2>
                    <p>
                        ProTalks.io is a chat platform where users can engage in discussions with professionals and
                        experts on various topics.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Question 2: How can I join a chatroom?</h2>
                    <p>
                        To join a chatroom, navigate to the "Chat Rooms" page and select the room you're interested in.
                        Click on the room to enter and start chatting.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">
                        Question 3: Is there a free trial for premium chatrooms?
                    </h2>
                    <p>
                        Yes, ProTalks.io offers a 7-day free trial for the premium subscription plan. During this trial
                        period, you can access all premium features.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Question 4: How can I become a professional host?</h2>
                    <p>
                        If you're an expert in your field and interested in hosting premium chatrooms, you can apply on
                        the "Become a Host" page. Our team will review your application, and if approved, you can start
                        hosting.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Question 5: How is payment handled?</h2>
                    <p>
                        We use a secure payment gateway (Stripe) to handle subscription payments. You can subscribe
                        using your credit card, and payments are processed securely.
                    </p>
                </section>
            </div>
        </div>
    );
}
