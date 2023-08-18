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

const ProductList: FC<{ item: any }> = ({ item }) => {
    //console.log(item);


    return (
        <div className="flex flex-col md:flex-row justify-evenly mt-16">
            <ProductCards {...item} />
            {/* {item.map((pro: any) => (
                <div key={pro._id}>
                    <ProductCards pro={pro} />
                </div>
            ))} */}
        </div>
    )
}

export default ProductList