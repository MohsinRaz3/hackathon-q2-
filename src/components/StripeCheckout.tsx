'use client'
import getStipePromise from "../lib/stripe"
const product =
    [
        {
            "product": 1,
            "name": "Stripe Product",
            "price": 40,
            "quantity": 3
        },
        {
            "product": 2,
            "name": "Stripe Product 2",
            "price": 50,
            "quantity": 1
        },
        {
            "product": 3,
            "name": "Stripe Product 3",
            "price": 30,
            "quantity": 2
        }
    ]

const StripeCheckout = () => {

    const handleCheckout = async () => {

        const stripe = await getStipePromise();

        const response = await fetch("/api/stripe-session/", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", },
            cache: "no-cache",
            mode: "no-cors",
            body: JSON.stringify(product),
        });

        const data = await response.json();


        if (data.session) {
            stripe?.redirectToCheckout({ sessionId: data.session.id })
        }
    }
    return (
        <div className="py-5">
            <button
                className="bg-green-500 py-3 px-3 rounded-md"
                onClick={handleCheckout}
            >
                Check out
            </button>
        </div>
    );
};

export default StripeCheckout