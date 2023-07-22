
import { Products } from "@/utils/mock"
import Image from "next/image";
import { ProductCards } from "@/components/ProductCards";
import Quantity from "@/components/Quantity";

function getProductDetails(id: number | string) {

    return Products.filter((prod) => (prod.id == id))

}
const sizes = ["XS", "SM", "MD", "LG", "XL"]
export default function Page({ params }: { params: { id: number | string } }) {
    const result = getProductDetails(params.id)
    // console.log(result);

    return (
        <div className=" flex flex-wrap py-10 mt-16"> {
            result.map((res) => (
                <div key={res.id} className="flex justify-between gap-6">

                    <div><Image src={res.image} alt="product" /></div>
                    {/* Right div */}
                    <div>
                        <div>
                            <h1 className="text-2xl font-bold"> {res.name}</h1>
                            <h2 className="text-base text-gray-400 font-semibold">{res.tagline}</h2>
                        </div>


                        <div>
                            <h3 className="text-xs mt-6 font-semibold">SELECT SIZE</h3>
                        </div>
                        <div className="flex gap-x-3">                       {
                            sizes.map((item, i) => (
                                <div key={i} className="w-6 h-6 rounded-full mt-2 duration-300 hover:shadow-2xl border flex justify-center items-center">
                                    <span className="text-[10px] font-semibold text-center text-gray-600"> {item}</span>
                                </div>

                            ))
                        }

                            <div className="flex gap-x-3 mt-6 items-center">
                                <Quantity />
                            </div>
                        </div>

                    </div>



                </div>
            ))
        }</div>
    )

}