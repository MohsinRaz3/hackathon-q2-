"use client"
import { urlForImage } from "../../sanity/lib/image"
import Image from "next/image"
import { FC } from "react"

export const ProductCart: FC<{ item: any }> = ({ item }) => {

    const handleCart = async () => {
        const res = await fetch("/api/cart", {
            method: "POST",
            body: JSON.stringify({
                product_id: item._id
            })
        })
        const result = res.json()
        console.log(result);

    }

    return (
        <>
            <Image placeholder='empty' className="max-h-[200px] object-cover object-top" src={urlForImage(item.image).url()} alt="product" width={300} height={200} />
            <h1 className="text-2xl text-yellow-700" >{item.title}</h1>

            <h1 className="text-2xl text-yellow-700" >${item.price}</h1>
            <h1 className="text-xl text-yellow-700" >{item.category.name}</h1>

            <div className="text-slate-700">{item.description}</div>
            <button onClick={() => handleCart()} className="border bg-blue-600 text-white py-2 px-6 rounded"> Add to cart</button>

        </>
    )
}
