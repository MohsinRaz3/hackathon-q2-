--create table
CREATE TABLE cart (
    id serial PRIMARY KEY,
    user_id varchar(255) NOT NULL,
    product_id varchar(255) NOT NULL,
    product_title varchar(255) NOT NULL,
    image_url varchar NOT NULL,
    product_price integer NOT NULL,
    product_quantity integer NOT NULL
);


-- delete table rows
DELETE FROM cart;


--delete whole table
DROP TABLE cart

-- Unique column entry
ALTER TABLE cart
ADD CONSTRAINT UNIQUENESS UNIQUE (
    product_title
)