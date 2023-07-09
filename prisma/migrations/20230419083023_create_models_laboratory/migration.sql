/*
  Warnings:

  - Added the required column `code` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `delivery_time` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "delivery_time" TEXT NOT NULL;
