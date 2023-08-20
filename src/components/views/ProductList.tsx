import { ProductCards } from "@/components/ProductCards"
import getProducts from "@/utils/mock"
import { FC } from "react"
import React from 'react'
// import getProducts from "@/utils/mock"
// import { IIProduct } from "@/utils/types"


// export const getProd = async () => {
//     const slicedProd: IIProduct = await getProducts()
//     // return slicedProd;
//     //  console.log(slicedProd);

// }

async function ProductList() {
    const data = await getProducts()

    //console.log("items product lizzst", data);

    return (


        <div className="flex flex-col md:flex-row justify-evenly mt-16">

            <div className="grid grid-cols-[repeat(3,auto)]  justify-center gap-x-10">
                {data.map((item: any) => (
                    <>
                        <div key={item._id} className="flex flex-col items-center mt-10 m-5">

                            <ProductCards item={item} />
                            {/* <ProductCart item={item} /> */}
                        </div>
                    </>

                ))

                }</div>
            {/* {item.map((pro: any) => (
                <div key={pro._id}>
                    <ProductCards pro={pro} />
                </div>
            ))} */}
        </div>
    )
}

export default ProductList