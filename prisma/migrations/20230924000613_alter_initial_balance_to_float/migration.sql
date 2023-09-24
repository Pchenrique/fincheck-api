/*
  Warnings:

  - Changed the type of `initial_balance` on the `banck_accounts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "banck_accounts" DROP COLUMN "initial_balance",
ADD COLUMN     "initial_balance" DOUBLE PRECISION NOT NULL;
