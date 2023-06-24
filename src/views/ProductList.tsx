import { ProductCards } from "@/components/ProductCards"
import React from 'react'
import P1 from "/public/p1.png"
import kurta from "/public/kurta.png"
import tshirt from "/public/tshirt.jpg"

const ProductList = () => {
    return (
        <div className="flex flex-col md:flex-row justify-evenly mt-16">
            <ProductCards title={"Flex Sweatshirt"} price={22} img={P1} />
            <ProductCards title={"Male Kurta"} price={32} img={kurta} />
            <ProductCards title={"T-Shirt"} price={42} img={tshirt} />

        </div>
    )
}

export default ProductList