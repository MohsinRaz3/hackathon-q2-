import { client } from "@/lib/sanityClient"
import imageUrlBuilder from "@sanity/image-url"
import Image from "next/image"

interface IProduct {
  _id: string,
  title: string,
  description: string,
  image: string[]
}


const getProducts = async () => {
  const res = await client.fetch("*[_type=='product']{_id, title, description, image}")
  return res
}

const builder = imageUrlBuilder(client)
function urlFor(source: any) {
  return builder.image(source)
}

export default async function Home() {
  const data: IProduct[] = await getProducts()
  console.log(data);

  return (

    <section>
      <div>
        {data.map((item) => (
          <>
            <div className="flex flex-col items-center m-5">
              <h1 className="text-2xl text-yellow-700" key={item._id}>{item.title}</h1>
              <div className="text-slate-700">{item.description}</div>

            </div>
          </>

        ))

        }</div>
    </section>
  )
}
