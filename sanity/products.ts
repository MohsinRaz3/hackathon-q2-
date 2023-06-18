import { defineType, defineField } from "sanity"

export const product = defineType({
    name: "product",
    title: "Products",
    type: "document",

    fields: [defineField(
        {
            name: "title",
            title: "Title",
            type: "string"
        }),
    defineField({
        name: "description",
        title: "Product Description",
        type: "string"
    }),
    defineField({
        name: "price",
        title: "Product Price",
        type: "number"
    }),

    defineField({
        name: "image",
        title: "Product image",
        type: "image"

    }),
    defineField({
        name: "category",
        title: "Product Category",
        type: "reference",
        to: [
            {
                type: "category"
            }
        ]
    })
    ]

})