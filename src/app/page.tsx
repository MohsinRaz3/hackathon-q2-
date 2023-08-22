import 'tailwindcss/tailwind.css'
import Hero from '@/components/views/Hero'
import ProductList from '@/components/views/ProductList'
import Promotions from '@/components/views/Promotions'
import StripePayment from '@/components/views/StripePayment'
import Footer from '@/components/views/Footer'
// import getProducts from '@/utils/mock'
// import { IIProduct } from '../utils/types'




export default async function Home() {


  return (

    <section>

      <Hero />
      <Promotions />
      <StripePayment />
      {/* @ts-ignore */}
      <ProductList />



      <Footer />

    </section>
  )
}
