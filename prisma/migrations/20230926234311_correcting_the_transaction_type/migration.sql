/*
  Warnings:

  - The values [EXPRENSE] on the enum `transaction_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "transaction_type_new" AS ENUM ('INCOME', 'EXPENSE');
ALTER TABLE "categories" ALTER COLUMN "type" TYPE "transaction_type_new" USING ("type"::text::"transaction_type_new");
ALTER TABLE "transactions" ALTER COLUMN "type" TYPE "transaction_type_new" USING ("type"::text::"transaction_type_new");
ALTER TYPE "transaction_type" RENAME TO "transaction_type_old";
ALTER TYPE "transaction_type_new" RENAME TO "transaction_type";
DROP TYPE "transaction_type_old";
COMMIT;
