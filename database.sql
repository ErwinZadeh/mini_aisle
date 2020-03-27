-- Create a DATABASE and name it as “mini_aisle”,

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
  "id" SERIAL PRIMARY KEY ,
  "item_name" VARCHAR(50) NOT NULL,
  "status" Boolean DEFAULT FALSE,
  "amount" INT,
  "amount_unit" VARCHAR(50) NOT NULL,
  "category" VARCHAR(50) NOT NULL,
  "store" VARCHAR(50) NOT NULL,
  "user_id" INT REFERENCES "user"
);

SELECT * FROM "item"
JOIN "user" ON "item"."user_id" = "user"."id";
