import React from 'react'
import { ProductCards } from "@/components/ProductCards"
import { Products } from "@/utils/mock"


const AllProducts = () => {
    return (
        <div className="flex flex-col md:flex-row justify-evenly mt-16 flex-wrap">
            {Products.map((pro) => (

                <ProductCards id={pro.id} key={pro.id} name={pro.name} price={pro.price} category={pro.category} image={pro.image} />

            ))}
        </div>
    )
}

export default AllProducts