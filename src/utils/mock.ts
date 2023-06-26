import { IProduct } from "./types";
import P1 from "/public/p1.png"
import kurta from "/public/kurta.png"
import tshirt from "/public/tshirt.jpg"
export const Products: IProduct[] = [
    {
        id: 1,
        name: "abc",
        price: 123,
        category: "female",
        image: P1
    },
    {
        id: 2,
        name: "abcd",
        price: 13,
        category: "male",
        image: kurta
    },
    {
        id: 3,
        name: "abcde",
        price: 23,
        category: "male",
        image: tshirt
    },
    {
        id: 4,
        name: "xyz",
        price: 35,
        category: "kids",
        image: P1
    }
]