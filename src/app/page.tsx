
import { Image as IImage } from "sanity"
import { client } from "@/lib/sanityClient"
import { ProductCart } from "./ProductCart"

interface IProduct {
  _id: string,
  title: string,
  description: string,
  price: string,
  image: IImage,
  category: {
    name: string
  }
}


const getProducts = async () => {
  const res = await client.fetch(`*[_type=='product']{_id, title, description, price,image, category -> {name}}`)
  return res
}


export default async function Home() {
  const data: IProduct[] = await getProducts()
  //  console.log(data);

  return (

    <section>
      <div className="grid grid-cols-[repeat(3,auto)]  justify-center gap-x-10">
        {data.map((item) => (
          <>
            <div key={item._id} className="flex flex-col items-center mt-10 m-5">
              <ProductCart item={item} />
            </div>
          </>

        ))

        }</div>
    </section>
  )
}
