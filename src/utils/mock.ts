// import { IProduct } from "./types";
// import P1 from "/public/p1.png"
// import kurta from "/public/kurta.png"
// import tshirt from "/public/tshirt.jpg"
// export const Products: IProduct[] = [
//     {
//         id: 1,
//         name: "abc",
//         tagline: "Dress",
//         price: 123,
//         category: "female",
//         image: P1
//     },
//     {
//         id: 2,
//         name: "abcd",
//         tagline: "Dress",
//         price: 13,
//         category: "male",
//         image: kurta
//     },
//     {
//         id: 3,
//         name: "abcde",
//         tagline: "Dress",
//         price: 23,
//         category: "male",
//         image: tshirt
//     },
//     {
//         id: 4,
//         name: "xyz",
//         tagline: "Dress",
//         price: 35,
//         category: "kids",
//         image: P1
//     },
//     {
//         id: 5,
//         name: "bat",
//         tagline: "Dress",
//         price: 35,
//         category: "sports",
//         image: P1
//     },
//     {
//         id: 6,
//         name: "abcde",
//         tagline: "Dress",
//         price: 23,
//         category: "male",
//         image: tshirt
//     },
//     {
//         id: 7,
//         name: "xyz",
//         price: 35,
//         tagline: "Dress",
//         category: "kids",
//         image: P1
//     },
//     {
//         id: 8,
//         name: "bat",
//         tagline: "Dress",
//         price: 35,
//         category: "sports",
//         image: P1
//     },
//     {
//         id: 9,
//         name: "abcde",
//         tagline: "Dress",
//         price: 23,
//         category: "male",
//         image: tshirt
//     },
//     {
//         id: 10,
//         name: "xyz",
//         tagline: "Dress",
//         price: 35,
//         category: "kids",
//         image: P1
//     },
//     {
//         id: 11,
//         name: "bat",
//         tagline: "Dress",
//         price: 35,
//         category: "sports",
//         image: P1
//     }
// ]

export const featureImg = ["/Featured1.png", "/Featured2.png", "/Featured3.png", "/Featured4.png"]

import { client } from "@/lib/sanityClient"


const getProducts = async () => {
    const res = await client.fetch(`*[_type=='product']{_id, title, description, price,image, category -> {name}}`)
    return res
}

export default getProducts;

