import { cartTable, db } from '../../../lib/drizzle'
//@ts-ignore
import { eq } from 'drizzle-orm';
// import { cookies } from 'next//headers';
import { NextRequest, NextResponse } from 'next/server.js'

export const POST = async (request: NextRequest) => {
    const req = await request.json();

    try {
        const res = await db.insert(cartTable).values({

            user_id: req.user_id,
            product_id: req.product_id,
            product_title: req.product_title,
            image_url: req.image_url,
            product_price: req.product_price,
            product_quantity: req.product_quantity,
        }).onConflictDoUpdate({
            target: [cartTable.product_title],
            set: {
                product_price: req.product_price,
                product_quantity: req.product_quantity
            }
        })
            .returning()
        console.log("data successfully added", res);
        return NextResponse.json({ res })


    } catch (error) {
        console.log("error", error);
        return NextResponse.json({ message: "something went terribly wrong" })

    }
}


export const GET = async (request: NextRequest) => {
    const uid = request.nextUrl.searchParams.get("user_id") as string
    try {
        const res = await db.select().from(cartTable).where(eq(cartTable.user_id, uid))
        return NextResponse.json(res)
    } catch (error) {
        return NextResponse.json(error)

    }
}