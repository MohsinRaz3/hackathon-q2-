
import { Products } from "@/utils/mock"
import Image from "next/image";
import { ProductCards } from "@/components/ProductCards";

function getProductDetails(id: number | string) {
    console.log(id);

    return Products.filter((prod) => (prod.id == id))


}

export default function Page({ params }: { params: { id: number | string } }) {
    const result = getProductDetails(params.id)
    console.log(result);

    return (
        <div className=" flex justify-center items-center "> {
            result.map((res) => (
                <>
                    <Image key={res.id} src={res.image} alt="product" />
                    <p className="ml-10">{res.name}</p>
                </>
            ))
        }</div>
    )

}