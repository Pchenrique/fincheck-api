-- CreateEnum
CREATE TYPE "back_account_type" AS ENUM ('CHECKING', 'INVESTMENT', 'CASH');

-- CreateTable
CREATE TABLE "banck_accounts" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "initial_balance" TEXT NOT NULL,
    "type" "back_account_type" NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "banck_accounts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "banck_accounts" ADD CONSTRAINT "banck_accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
