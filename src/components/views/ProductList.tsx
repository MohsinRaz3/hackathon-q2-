import { ProductCards } from "@/components/ProductCards"
import getProducts from "@/utils/mock"
import { FC } from "react"
import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImageData } from "next/image"
import { Image as IImage } from "sanity"



// import getProducts from "@/utils/mock"
// import { IIProduct } from "@/utils/types"


// export const getProd = async () => {
//     const slicedProd: IIProduct = await getProducts()
//     // return slicedProd;
//     //  console.log(slicedProd);

// }
type IdataStruct = {
    _id: string,
    title: string,
    price: string,
    image: StaticImageData | IImage

}

async function ProductList() {
    const data = await getProducts()
    const [{ _id, title, price, image }] = data;
    const dataDestruct: IdataStruct[] = [{ _id, title, price, image }]

    console.log("items product lizzst", dataDestruct);

    return (
        <div>


            <div className="flex flex-col md:flex-row justify-evenly mt-16">

                <div className="grid grid-cols-[repeat(3,auto)]  justify-center gap-x-10">
                    {dataDestruct.map((item: any) => (
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
        </div>
    )
}

export default ProductList