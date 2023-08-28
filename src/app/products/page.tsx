import React from 'react'
import { ProductCards } from "@/components/ProductCards"
import getProducts from "@/utils/mock"
import AddToCart from '@/components/AddToCart'

const AllProducts = async () => {

    async function allProductsData() {
        const allData = await getProducts()
        return allData
    }
    const ddd = await allProductsData()
    return (
        <div className="flex flex-col md:flex-row justify-evenly mt-16 flex-wrap">
            {ddd.map((pro: any) => (
                <div key={pro._id} className='flex flex-col gap-5 flex-wrap sm:my-6'>
                    <ProductCards item={pro} />
                    <AddToCart item={pro} />
                </div>

            ))}

        </div>
    )
}

export default AllProducts