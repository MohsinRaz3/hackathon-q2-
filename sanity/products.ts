export const product = {
    name: "product",
    title: "Products",
    type: "document",

    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "description",
            title: "Product Description",
            type: "string"
        },
        {
            name: "image",
            title: "Product image",
            type: "array",
            of: [{
                name: "img",
                title: "Image",
                type: "image"
            }]

        }
    ]

}