import getProducts from "@/utils/mock";
import { ProductCards } from "@/components/ProductCards"

export default async function Page({ params }: { params: { slug: string } }) {

    async function allProductsData() {
        const allData = await getProducts()
        return allData
    }

    const ddd = await allProductsData()
    // console.log(ddd);


    const getProductByCategory = async (category: string) => {
        // console.log(category);

        const catData = await ddd.filter((pro: any) => pro.category.name == category)
        //console.log(catData);

        return catData;

    }

    const result = await getProductByCategory(params.slug)
    // console.log(result);

    return (
        <>
            <div className="flex flex-col md:flex-row justify-evenly mt-16">
                {result.length > 0 ? result.map((pro: any) => (
                    <ProductCards key={pro._id} item={pro} />
                )) : (<div> No Product Found</div>)
                }
            </div >
        </>
    )
}