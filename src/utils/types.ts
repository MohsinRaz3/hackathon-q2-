import { StaticImageData } from "next/image"
import { Image as IImage } from "sanity"

export type IProduct = {
    id: number,
    name: string,
    tagline: string,
    price: number,
    category: string,
    image: StaticImageData

}


export interface IIProduct {
    _id: string,
    title: string,
    description: string,
    price: string,
    image: IImage,
    category: {
        name: string
    }
}
