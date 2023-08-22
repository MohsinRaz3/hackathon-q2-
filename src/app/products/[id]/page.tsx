
import getProducts from "@/utils/mock";
import Image from "next/image";
import { ProductCards } from "@/components/ProductCards";
import Quantity from "@/components/Quantity";
import { IIProduct } from "@/utils/types";
import { urlForImage } from ".././../../../sanity/lib/image";
import AddToCart from "@/components/AddToCart";


const sizes = ["XS", "SM", "MD", "LG", "XL"]

export default async function Page({ params }: { params: { id: number | string } }) {

    async function allProductsData() {
        const allData = await getProducts()
        return allData
    }
    const ddd = await allProductsData()
    // console.log(ddd.category);


    async function getProductDetails(id: number | string) {
        const res = ddd.find((prod: any) => (prod._id == id))
        return res;
    }
    const result: IIProduct = await getProductDetails(params.id)
    //console.log("resultss", result);

    return (
        <div className=" flex flex-wrap py-10 mt-16">
            <div>
                <div key={result._id} className="flex justify-between gap-6">

                    <div><Image src={urlForImage(result.image).url()} alt="product" width={300} height={200} /></div>
                    {/* Right div */}
                    <div>
                        <div>
                            <h1 className="text-2xl font-bold"> {result.title}</h1>
                            <h2 className="text-base text-gray-400 font-semibold"></h2>
                        </div>


                        <div>
                            <h3 className="text-xs mt-6 font-semibold">SELECT SIZE</h3>
                        </div>
                        <div className="flex gap-x-3">                       {
                            sizes.map((item, i) => (
                                <div key={i} className="w-6 h-6 rounded-full mt-2 duration-300 hover:shadow-2xl border active:bg-red-800 flex justify-center items-center">
                                    <span className="text-[10px] font-semibold text-center text-gray-600 hover:cursor-pointer "> {item}</span>
                                </div>

                            ))
                        }

                            <div className="flex gap-x-3 mt-10 items-center">
                                <Quantity price={result.price} />
                            </div>

                        </div>
                        <AddToCart />
                    </div>




                </div>

            </div>
        </div>

    )

}