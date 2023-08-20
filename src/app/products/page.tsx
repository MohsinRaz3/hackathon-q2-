import React from 'react'
import { ProductCards } from "@/components/ProductCards"
import getProducts from "@/utils/mock"
import { urlForImage } from '../../../sanity/lib/image'




const AllProducts = async () => {

    async function allProductsData() {
        const allData = await getProducts()
        return allData
    }
    const ddd = await allProductsData()
    return (
        <div className="flex flex-col md:flex-row justify-evenly mt-16 flex-wrap">
            {ddd.map((pro: any) => (

                <ProductCards item={pro} />

            ))}
        </div>
    )
}

export default AllProducts