/*
  Warnings:

  - You are about to drop the column `amount` on the `items` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `table` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `banner` on the `products` table. All the data in the column will be lost.
  - Added the required column `number_sus` to the `orders` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpf` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "items" DROP COLUMN "amount";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "name",
DROP COLUMN "table",
ADD COLUMN     "number_sus" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products" DROP COLUMN "banner";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "cpf" TEXT NOT NULL;
