//@ts-ignore

import { serial, pgTable, varchar, integer } from "drizzle-orm/pg-core"
//@ts-ignore

import { drizzle } from 'drizzle-orm/vercel-postgres'
//@ts-ignore

import { sql } from "@vercel/postgres";

//defining our table schema for postgres database in vercel
export const cartTable = pgTable("cart", {
    id: serial("id").primaryKey(),
    user_id: varchar("user_id", { length: 255 }).notNull(),
    product_id: varchar("product_id", { length: 255 }).notNull(),
    product_title: varchar("product_title", { length: 255 }).notNull(),
    image_url: varchar("image_url").notNull(),
    product_price: integer("product_price").notNull(),
    product_quantity: integer("product_quantity").notNull()
})
// drizzle connection with vercel postgresql
export const db = drizzle(sql);  