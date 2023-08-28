'use client'
import { Button } from "./ui/button"
import { toast } from "react-hot-toast"
import { FC, useState } from "react"
import { urlForImage } from "../../sanity/lib/image"
import { useAuth } from "@clerk/nextjs"

const AddToCart: FC<{ item: any }> = ({ item }) => {

    const { userId } = useAuth()
    const [quantity, setQuantity] = useState(1)

    function handleIncrement() {
        setQuantity(quantity + 1);
    }
    function handleDecrement() {
        setQuantity(quantity - 1);
    }

    const handleCart = async () => {
        try {

            const res = await fetch("/api/cart", {
                method: "POST",
                body: JSON.stringify({
                    user_id: userId,
                    product_id: item._id,
                    product_title: item.title,
                    image_url: urlForImage(item.image).url(),
                    product_price: item.price * quantity,
                    product_quantity: quantity
                })
            })
            const result = res.json()
            console.log("reslut of add to cart", result);

        } catch (error) {
            console.log("error here", error);

        }




    }
    return (
        <div>
            <div>
                <div className='flex gap-x-5 items-center '>
                    <span className="text-2xl font-bold">Quantity: </span>
                    <button disabled={quantity === 1} onClick={handleDecrement} className='h-5 w-5 border rounded-full flex justify-center items-center'>
                        -
                    </button>
                    <span>{quantity}</span>

                    <button onClick={handleIncrement} className=' h-5 w-5 border border-ring ring-offset-2  ring-offset-black border-black rounded-full flex justify-center items-center'>+</button>


                </div>
                <div className='my-5 px-5'>
                    <span className='font-bold text-lg'>Price:   ${item.price * quantity} </span>
                </div>
            </div>
            <Button onClick={handleCart}>Add to cart</Button>
        </div>
    )

}
export default AddToCart