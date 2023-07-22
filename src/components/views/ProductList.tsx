import { ProductCards } from "@/components/ProductCards"
import React from 'react'
import { Products } from "@/utils/mock"


const ProductList = () => {
    const slicedProd = Products.slice(0, 4)

    return (
        <div className="flex flex-col md:flex-row justify-evenly mt-16">
            {slicedProd.map((pro) => (
                <ProductCards id={pro.id} key={pro.id} name={pro.name} price={pro.price} category={pro.category} image={pro.image} />
            ))}
        </div>
    )
}

export default ProductList