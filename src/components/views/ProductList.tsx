import { ProductCards } from "@/components/ProductCards"
import getProducts from "@/utils/mock"
import { StaticImageData } from "next/image"
import { Image as IImage } from "sanity"




type IdataStruct = {
    _id: string,
    title: string,
    price: string,
    image: StaticImageData | IImage
}


async function ProductList() {
    const data = await getProducts()

    const dataDestruct: IdataStruct[] = data.map((item: any) => ({
        _id: item?._id,
        title: item.title,
        price: item.price,
        image: item.image
    }));

    const dataDestructSlice = dataDestruct.slice(1, 4)
    return (
        <div>

            <div className="flex flex-col md:flex-row justify-evenly mt-16">
                <div className="grid grid-cols-[repeat(3,auto)] justify-center gap-x-10">


                    {dataDestructSlice.map((item: any) => (
                        <div key={item._id} className="flex flex-col items-center mt-10 m-5" >
                            <ProductCards item={item} />

                        </div>))}

                </div>
            </div>
        </div >
    )
}

export default ProductList