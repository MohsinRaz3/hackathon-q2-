import { StaticImageData } from "next/image"

export type IProduct = {
    id: number,
    name: string,
    price: number,
    category: string,
    image: StaticImageData

}