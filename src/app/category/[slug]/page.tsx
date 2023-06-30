import { Products } from "@/utils/mock"
import { ProductCards } from "@/components/ProductCards"


const getProductByCategory = (category: string) => {
    return Products.filter((pro) => pro.category === category)
}

export default function Page({ params }: { params: { slug: string } }) {
    const result = getProductByCategory(params.slug)
    return (
        <>
            <div className="flex flex-col md:flex-row justify-evenly mt-16">
                {result.length > 0 ? result.map((pro) => (
                    <ProductCards id={pro.id} key={pro.id} name={pro.name} price={pro.price} category={pro.category} image={pro.image} />
                )) : (<div> No Product Found</div>)
                }
            </div >
        </>
    )
}