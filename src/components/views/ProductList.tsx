import { ProductCards } from "@/components/ProductCards"
import { FC } from "react"
import React from 'react'
// import getProducts from "@/utils/mock"
// import { IIProduct } from "@/utils/types"


// export const getProd = async () => {
//     const slicedProd: IIProduct = await getProducts()
//     // return slicedProd;
//     //  console.log(slicedProd);

// }

const ProductList = (item: any) => {
    // console.log("items product list", item);


    return (
        <div className="flex flex-col md:flex-row justify-evenly mt-16">
            <ProductCards productCardItem={item} />
            {/* {item.map((pro: any) => (
                <div key={pro._id}>
                    <ProductCards pro={pro} />
                </div>
            ))} */}
        </div>
    )
}

export default ProductList