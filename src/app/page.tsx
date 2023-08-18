import 'tailwindcss/tailwind.css'
import Hero from '@/components/views/Hero'
import ProductList from '@/components/views/ProductList'
import Promotions from '@/components/views/Promotions'
import StripePayment from '@/components/views/StripePayment'
import Footer from '@/components/views/Footer'
import getProducts from '@/utils/mock'
import { IIProduct } from '../utils/types'




export default async function Home() {
  const data = await getProducts()
  //console.log(data);

  return (

    <section>

      <Hero />
      <Promotions />
      <StripePayment />




      <div className="grid grid-cols-[repeat(3,auto)]  justify-center gap-x-10">
        {data.map((item: any) => (
          <>
            <div key={item._id} className="flex flex-col items-center mt-10 m-5">

              {/* <ProductList {...item} /> */}
              {/* <ProductCart item={item} /> */}
            </div>
          </>

        ))

        }</div>


      <Footer />

    </section>
  )
}
