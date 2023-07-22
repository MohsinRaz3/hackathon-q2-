'use client'
import { Button } from "./ui/button"
import { useDispatch } from "react-redux"
import { cartActions } from "@/store/slice/cartSlice"
import { toast } from "react-hot-toast"

const AddToCart = () => {
    const dispatch = useDispatch()
    const addItems = () => {
        dispatch(cartActions.addToCart({ product: {}, quantity: 1 }))
        toast.success("Product added");
    }
    return (
        <div>
            <Button onClick={addItems}>Add to cart</Button>
        </div>
    )

}
export default AddToCart