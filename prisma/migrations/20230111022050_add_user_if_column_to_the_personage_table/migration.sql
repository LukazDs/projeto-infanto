/*
  Warnings:

  - Added the required column `userId` to the `personage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "personage" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "personage" ADD CONSTRAINT "personage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
