/*
  Warnings:

  - You are about to drop the `personage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "personage" DROP CONSTRAINT "personage_userId_fkey";

-- DropTable
DROP TABLE "personage";

-- CreateTable
CREATE TABLE "personages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "player" BOOLEAN NOT NULL,
    "classification" "Classification" NOT NULL DEFAULT 'Warrior',
    "imageUrl" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "personages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "personages" ADD CONSTRAINT "personages_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
